import React from 'react';
import './user_profile.css';

class UserProfile extends React.Component {

    render() {
        return (
            <div>
                <div class="subsection">
                    <div>
                        Profile
                    </div>
                </div>
                <div class="Family">
                    <div class="first">
                        <div class="pfp">
                            <img id="imageid" alt="Avatar"></img>
                        </div>
                        <div class="usertag">@ivanma9</div>
                    </div>
                    <div class="pokeDiv" >
                        <img id="imageid2" alt="Avatar2" class="pokeImage"></img>
                    </div>
                    <div class="pokeDiv" >
                        <img id="imageid3" alt="Avatar3" class="pokeImage"></img>
                    </div>
                    <div class="pokeDiv" >
                        <img id="imageid4" alt="Avatar4" class="pokeImage"></img>
                    </div>
                    <div class="pokeDiv" >
                        <img id="imageid5" alt="Avatar5" class="pokeImage"></img>
                    </div>
                    <div class="pokeDiv" >
                        <img id="imageid6" alt="Avatar6" class="pokeImage"></img>
                    </div>
                </div>
                <div class="subsection">
                    <div>
                        <b>Pokedex Search:</b> Input a pokemon name below.
                    </div>
                    <input id="input-number" placeholder="Enter pokemon name"></input>
                    <button class="btn" id="poke-btn">Choose pokemon buddy for profile picture</button>
                    <button class="btn" id="poke-btn2">Choose pokemon 2</button>
                    <button class="btn" id="poke-btn3">Choose pokemon 3</button>
                    <button class="btn" id="poke-btn4">Choose pokemon 4</button>
                    <button class="btn" id="poke-btn5">Choose pokemon 5</button>
                    <button class="btn" id="poke-btn6">Choose pokemon 6</button>

                    <div class="fact" id="poke-fact"></div>
                </div>
            </div>
        );
    }
}

export default UserProfile;