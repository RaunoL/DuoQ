import React from "react";
import Button from "../Button";

function GameModeDota(props) {
    const { setGameMode } = props;
    const { gameMode } = props;
    const changeMode = (e)=>{
        setGameMode(e.target.id)
    }
    const gameModes =
        <div className="gameModesDota" id="GameModesDota">
            <h4>Choose Game mode</h4>
            <Button action={changeMode} id="1" text="Ranked"></Button>
            <Button action={changeMode} id="2" text="Captains Mode"></Button>
            <Button action={changeMode} id="3" text="Random Draft "></Button>
            <Button action={changeMode} id="0" text="Unranked "></Button>
        </div>;
    const gameRanks =
        <div className="ranksDota" id="RanksDota">
            <Button action={changeMode} id="4" text="Herald"></Button>
            <Button action={changeMode} id="5" text="Guardian"></Button>
            <Button action={changeMode} id="6" text="Crusader"></Button>
            <Button action={changeMode} id="7" text="Archon"></Button>
            <Button action={changeMode} id="8" text="Legend"></Button>
            <Button action={changeMode} id="9" text="Ancient"></Button>
            <Button action={changeMode} id="10" text="Divine or above"></Button>
        </div>;
    let currentMode;
    if (gameMode === "1"){
        currentMode = gameRanks;
    }
    else{
        currentMode = gameModes
    }
    return (
        <div className="gameModes">
            {currentMode}

        </div>
    )
}
export default GameModeDota