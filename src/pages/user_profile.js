import React from 'react';
import './user_profile.css';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
        this.imageRefs = [];
        for (let i = 0; i < 6; i++) {
            this.imageRefs.push(React.createRef());
        }
        this.inputRef = React.createRef(); 
        this.handleClick = this.handleClick.bind(this);
        this.getPokemonImageFromAPI = this.getPokemonImageFromAPI.bind(this);
    }

    getPokemonImageFromAPI(name, index) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) 
        .then( (response) => response.json() )
        .then( (resJson) => {
            let id = resJson.id.toString();
            this.imageRefs[index].current.src = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
            this.imageRefs[index].current.style = "text-align:center;display:flex;width:200px;height:200px";
        })
        .catch( (err) => {
            console.log(err);
        });
    }

    handleClick(e, index) {
        e.preventDefault();
        let input = this.inputRef.current.value;
        if (input && input.length > 0) {
            this.getPokemonImageFromAPI(input, index);
        }
        else {
            alert("Please input a name!");
        }
    }

    render() {
        return (
            <div>
                <div className="Family">
                    <div className="first">
                        <div className="pfp">
                            <img id="imageid1" ref={this.imageRefs[0]} key="avatar0" alt="avatar0" />
                        </div>
                        <div className="usertag">@ivanma9</div>
                    </div>
                    <div className="pokeDiv" >
                        <img id="imageid1" ref={this.imageRefs[1]} alt="avatar1" className="pokeImage" />
                    </div>
                    <div className="pokeDiv" >
                        <img id="imageid2" ref={this.imageRefs[2]} alt="avatar2" className="pokeImage" />
                    </div>
                    <div className="pokeDiv" >
                        <img id="imageid3" ref={this.imageRefs[3]} alt="avatar3" className="pokeImage" />
                    </div>
                    <div className="pokeDiv" >
                        <img id="imageid4" ref={this.imageRefs[4]} alt="avatar4" className="pokeImage" />
                    </div>
                    <div className="pokeDiv" >
                        <img id="imageid5" ref={this.imageRefs[5]} alt="avatar5" className="pokeImage" />
                    </div>
                </div>
                <div className="subsection">
                    <div>
                        <b>Pokedex Search:</b> Input a pokemon name below.
                    </div>
                    <div>
                        <input id="input-number" placeholder="Enter pokemon name" ref={this.inputRef} />
                        <button className="btn" id="poke-btn0" onClick={e => this.handleClick(e, 0)}>
                            Choose pokemon buddy for profile picture
                        </button>
                        <button className="btn" id="poke-btn1" onClick={e => this.handleClick(e, 1)}>
                            Choose pokemon 1
                        </button>
                        <button className="btn" id="poke-btn2" onClick={e => this.handleClick(e, 2)}>
                            Choose pokemon 2
                        </button>
                        <button className="btn" id="poke-btn3" onClick={e => this.handleClick(e, 3)}>
                            Choose pokemon 3
                        </button>
                        <button className="btn" id="poke-btn4" onClick={e => this.handleClick(e, 4)}>
                            Choose pokemon 4
                        </button>
                        <button className="btn" id="poke-btn5" onClick={e => this.handleClick(e, 5)}>
                            Choose pokemon 5
                        </button>
                    </div>
                    <div className="fact" id="poke-fact"></div>
                </div>
            </div>
        );
    }
}

export default UserProfile;