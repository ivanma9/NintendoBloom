import React from 'react';
import classNames from 'classnames';
import './slider.scss';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.IMAGE_PARTS = 3;
        this.changeTO = null;
        this.AUTOCHANGE_TIME = 4000;
        this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }
    
    componentWillUnmount() {
        window.clearTimeout(this.changeTO);
    }

    componentDidMount() {
        this.runAutochangeTO();
        setTimeout(() => {
          this.setState({ activeSlide: 0, sliderReady: true });
        }, 0);
      }
      
      runAutochangeTO() {
        this.changeTO = setTimeout(() => {
          this.changeSlides(1);
          this.runAutochangeTO();
        }, this.AUTOCHANGE_TIME);
      }

      changeSlides(change) {
        window.clearTimeout(this.changeTO);
        const { length } = this.props.slides;
        const prevSlide = this.state.activeSlide;
        let activeSlide = prevSlide + change;
        if (activeSlide < 0) activeSlide = length - 1;
        if (activeSlide >= length) activeSlide = 0;
        this.setState({ activeSlide, prevSlide });
      }

      
    render() {
        const { activeSlide, prevSlide, sliderReady } = this.state;
        return (
          <div className={classNames('slider', { 's--ready': sliderReady })}>
            <div className="slider__slides">
              {this.props.slides.map((slide, index) => (
                <div
                  className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
                  key={slide.character}
                >
                    <div className="slider__slide-content">
                        <h2 className="slider__slide-heading">
                            {slide.character.split('').map(l => <span>{l}</span>)}
                        </h2>
                    </div>
                  <div className="slider__slide-parts">
                    {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                      <div className="slider__slide-part" key={i}>
                        <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="slider__control slider__control--left" onClick={() => this.changeSlides(-1)} />
            <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
          </div>
        );
    }
      
        /*return (
            <div class="slideshow-container">
                <div class="slideshow-gallery">
                    <button type="button" class="slideshow-button slideshow-button-left" aria-label="previous slide"></button>
                    <button type="button" class="slideshow-button slideshow-button-right" aria-label="next slide"></button>
                    <div class="slideshow-slider">
                        <div class="slideshow-slides">
                        </div>
                    </div>
                    <div class="slideshow-dots">
                        <button type="button" class="slideshow-dot" aria-label="slide 1" aria-pressed="false"></button>
                        <button type="button" class="slideshow-dot" aria-label="slide 2" aria-pressed="false"></button>
                        <button type="button" class="slideshow-dot" aria-label="slide 3" aria-pressed="false"></button>
                    </div>
                </div>  
            </div>
        );*/
}

export default Slider;