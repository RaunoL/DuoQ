import React from "react";
import Button from "../Button";

function ChooseGame(props) {
    const {setGame} = props;
    const changeGame = (e)=>{
        setGame(e.target.id);
    }
    return (
        <div id="changeGame">
            <h4>Choose your game</h4>
            <Button action={changeGame} id="1" text="League of Legends"></Button>
            <Button action={changeGame} id="2" text="Fortnite"></Button>
            <Button action={changeGame} id="3" text="Dota"></Button>
            <Button action={changeGame} id="4" text="Player Unknown's Battlegrounds"></Button>
        </div>
    )
}
export default ChooseGame