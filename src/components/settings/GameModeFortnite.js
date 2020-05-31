import React from "react";
import Button from "../Button";

function GameModeFortnite(props) {
    const { setGameMode } = props;
    const changeMode = (e)=>{
        setGameMode(e.target.id)
    }
    return (
        <div className="gameModes">
            <div className="gameModesFortnite" id="gameModesFortnite">
            <h4>Choose Game mode</h4>
            <Button action={changeMode} id="1" text="Battle Royale"></Button>
            <Button action={changeMode} id="2" text="Save the world"></Button>
            <Button action={changeMode} id="3" text="Creative"></Button>
        </div>

        </div>
    )
}
export default GameModeFortnite