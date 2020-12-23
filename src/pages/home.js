import React from 'react';
import './home.css';
import Slider from '../components/slider.js'

const slides = [
    {
        character: 'Pikachu',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    },
    {
        character: 'Treecko',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png',
    },
    {
        character: 'Eevee',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
    },

];

class Home extends React.Component {
    render() {
        return (
            <div className='home page'>
                <div className="subsection">
                    <div>Click the button below to do nothing!</div>
                </div>
                <Slider slides={slides} />
                <div className="subsection">
                    <div>
                        <b>Pokedex Search:</b>
                        <b>Input a pokemon name below.</b>
                    </div>
                    <input id="input-number" placeholder="Enter pokemon name"></input>
                    <button className="btn" id="poke-btn">Click to find pokemon</button>
                    <div className="fact" id="poke-fact"></div>
                </div>
            </div>
        );
    }
}

export default Home;