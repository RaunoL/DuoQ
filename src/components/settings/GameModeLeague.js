import React from "react";
import Button from "../Button";

function GameModeLeague(props) {
    const { setGameMode } = props;
    const { gameMode } = props;
    const changeMode = (e)=>{
        console.log(e.target.id);
        setGameMode(e.target.id)
    }
    const gameModes =
        <div className="gameModesLeague" id="gameModesLeague">
            <h4>Choose Game mode</h4>
            <Button action={changeMode} id="1" text="Ranked"></Button>
            <Button action={changeMode} id="2" text="Normal"></Button>
            <Button action={changeMode} id="3" text="Aram"></Button>
            <Button action={changeMode} id="0" text="Any"></Button>
        </div>;
    const gameRanks =
        <div className="ranksLeague" id="ranksLeague">
            <Button action={changeMode} id="4" text="Iron"></Button>
            <Button action={changeMode} id="5" text="Bronze"></Button>
            <Button action={changeMode} id="6" text="Silver"></Button>
            <Button action={changeMode} id="7" text="Gold"></Button>
            <Button action={changeMode} id="8" text="Platinum"></Button>
            <Button action={changeMode} id="9" text="Diamond"></Button>
            <Button action={changeMode} id="10" text="Master or above"></Button>
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
export default GameModeLeague