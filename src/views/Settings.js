import React, {useState} from 'react';
import Main from "../components/Main";
import ChooseGame from "../components/settings/ChooseGame";

import RegionLeague from "../components/settings/RegionLeague";
import RegionDota from "../components/settings/RegionDota"
import RegionFortnite from "../components/settings/RegionFortnite"
import RegionPubg from "../components/settings/RegionPubg"

import GameModeLeague from "../components/settings/GameModeLeague";
import GameModeDota from "../components/settings/GameModeDota";
import GameModeFortnite from "../components/settings/GameModeFortnite";
import GameModePubg from "../components/settings/GameModePubg";


import VoiceChat from "../components/settings/VoiceChat";
import Mbti from "../components/settings/Mbti";
import FindMatch from "../components/FindMatch";


function Settings() {
  const [game, setGame] = useState(null);
  const [gameMode, setGameMode]= useState(null);
  const [region, setRegion] = useState(null);
  const [voice, setVoice] = useState(null);
  const [personality, setPersonality] = useState(null);

  let currentForm;
  if(game==null){
    currentForm = <ChooseGame setGame={setGame}></ChooseGame>
  }
  else if ((gameMode===null || gameMode==="1")  && (game === "1" )){
    currentForm = <GameModeLeague gameMode={gameMode} setGameMode={setGameMode}> </GameModeLeague>
  }
  else if ((gameMode===null)  && (game === "2" )){
    currentForm = <GameModeFortnite gameMode={gameMode} setGameMode={setGameMode}> </GameModeFortnite>
  }
  else if ((gameMode===null || gameMode==="1")  && (game === "3" )){
    currentForm = <GameModeDota gameMode={gameMode} setGameMode={setGameMode}> </GameModeDota>
  }
  else if ((gameMode===null)  && (game === "4" )){
    currentForm = <GameModePubg gameMode={gameMode} setGameMode={setGameMode}> </GameModePubg>
  }
 
  else if(region===null && game === "1"){
    currentForm = <RegionLeague setRegion={setRegion}></RegionLeague>
  }
  else if(region===null && game === "2"){
    currentForm = <RegionFortnite setRegion={setRegion}></RegionFortnite>
  }
  else if(region===null && game === "3"){
    currentForm = <RegionDota setRegion={setRegion}></RegionDota>
  }
  else if(region===null && game === "4"){
    currentForm = <RegionPubg setRegion={setRegion}></RegionPubg>
  }

  else if(voice === null){
    currentForm = <VoiceChat setVoice={setVoice}></VoiceChat>
  }
  else if(personality === null){
    currentForm = <Mbti setPersonality={setPersonality}></Mbti>
  }
  else{
    currentForm = <FindMatch personality={personality} game={game} gameMode={gameMode} region={region} voice={voice}></FindMatch>
  }
  return (
    <Main>
      <div className="formWrapper">
        {currentForm}
      </div>
    </Main>
  )
}
export default Settings