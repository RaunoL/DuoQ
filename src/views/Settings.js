import React, {useState} from 'react';
import Button from "../components/Button";
import Main from "../components/Main";
import Input from "../components/Input";
import ChooseGame from "../components/settings/ChooseGame";
import RegionLeague from "../components/settings/RegionLeague";
import GameModeLeague from "../components/settings/GameModeLeague";
import VoiceChat from "../components/settings/VoiceChat";
import Mbti from "../components/settings/Mbti";


function Settings() {
  const [game, setGame] = useState(null);
  const [gameMode, setGameMode]= useState(null);
  const [region, setRegion] = useState(null);
  const [voice, setVoice] = useState(null);
  const [personality, setPersonality] = useState(null);

  let currentForm;
  if(game==null){
    currentForm = <ChooseGame setGame={setGame}></ChooseGame>
    console.log(game);
  }
  else if (gameMode==null || gameMode==1  && game == 1){
    currentForm = <GameModeLeague gameMode={gameMode} setGameMode={setGameMode}> </GameModeLeague>
  }
  else if(region==null && game == 1){
    currentForm = <RegionLeague setRegion={setRegion}></RegionLeague>
  }
  else if(voice == null){
    currentForm = <VoiceChat setVoice={setVoice}></VoiceChat>
  }
  else if(personality == null){
    currentForm = <Mbti setPersonality={setPersonality}></Mbti>
  }
  return (
    <Main>
      <div class="formWrapper">
        {currentForm}
      </div>
    </Main>
  )
}
export default Settings