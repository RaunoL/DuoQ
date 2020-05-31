import React from "react";
import Button from "../Button";

function GameModePubg(props) {
    const { setGameMode } = props;
    const changeMode = (e)=>{
        setGameMode(e.target.id)
    }
    return (
        <div className="gameModes">
            <div className="gameModesPubg" id="gameModesPubg">
            <h4>Choose Game mode</h4>
            <Button action={changeMode} id="1" text="First person"></Button>
            <Button action={changeMode} id="2" text="Third person"></Button>
        </div>

        </div>
    )
}
export default GameModePubg