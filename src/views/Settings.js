import React from 'react';
import Button from "../components/Button";
import Main from "../components/Main";
import Input from "../components/Input";


function Settings() {
  return (
    <Main>
      <div class="formWrapper">
        <h4>Choose your game</h4>
        <Button id="1" text="League of Legends"></Button>
        <Button id="2" text="Fortnite"></Button>
        <Button id="3" text="Dota"></Button>
        <Button id="4" text="Player Unknown's Battlegrounds"></Button>
        <div class="gameModes">
          <div class="gameModesLeague" id="gameModes1">
            <h4>Choose Game mode</h4>
            <Button id="ModesLeague1" text="Ranked"></Button>
            <Button id="ModesLeague2" text="Normal"></Button>
            <Button id="ModesLeague3" text="Aram"></Button>
            <Button id="ModesLeague0" text="Any"></Button>
          </div>
          <div class="gameModesFortnite" id="gameModes2">
            <h4>Choose Game mode</h4>
            <Button id="ModesFortnite1" text="Ranked"></Button>
            <Button id="ModesFortnite2" text="Normal"></Button>
            <Button id="ModesFortnite3" text="Aram"></Button>
            <Button id="ModesFortnite0" text="Any"></Button>
          </div>
          <div class="gameModesDota" id="gameModes3">
            <h4>Choose Game mode</h4>
            <Button id="ModesFortnite1" text="Ranked"></Button>
            <Button id="ModesFortnite2" text="Normal"></Button>
            <Button id="ModesFortnite3" text="Aram"></Button>
            <Button id="ModesFortnite0" text="Any"></Button>
          </div>
          <div class="gameModesPubg" id="gameModes4">
            <h4>Choose Game mode</h4>
            <Button id="ModesPubg1" text="Ranked"></Button>
            <Button id="ModesPubg2" text="Normal"></Button>
            <Button id="ModesPubg3" text="Aram"></Button>
            <Button id="ModesPubg0" text="Any"></Button>
          </div>
        </div>
        <div class="region">
          <div class="RegionLeague" id="region1">
            <h4>Choose Your region</h4>
            <Button id="RegionLeague1" text="EUW"></Button>
            <Button id="RegionLeague2" text="EUNE"></Button>
            <Button id="RegionLeague3" text="NA"></Button>
          </div>
          <div class="RegionFortnite" id="region2">
            <h4>Choose Your region</h4>
            <Button id="RegionFortnite1" text="EUW"></Button>
            <Button id="RegionFortnite2" text="EUNE"></Button>
            <Button id="RegionFortnite3" text="NA"></Button>
          </div>
          <div class="RegionDota" id="region3">
            <h4>Choose Your region</h4>
            <Button id="RegionDota1" text="EUW"></Button>
            <Button id="RegionDota2" text="EUNE"></Button>
            <Button id="RegionDota3" text="NA"></Button>
          </div>
          <div class="RegionPubg" id="region4">
            <h4>Choose Your region</h4>
            <Button id="RegionDota1" text="EUW"></Button>
            <Button id="RegionDota2" text="EUNE"></Button>
            <Button id="RegionDota3" text="NA"></Button>
          </div>
        </div>
        <div class="voiceChat">
          <h4>Do you want to use voice chat?</h4>
          <Button id="voiceChat1" text="Yes"></Button>
          <Button id="voiceChat0" text="No"></Button>
        </div>
        <div class="MBTI">
          <h4>What is your MBTI personality type?</h4>
          <Input type="text" id="MBTI" placeholder="Personality type"></Input>
          <h4>Don't know? <a  rel="noopener noreferrer" href="https://www.16personalities.com/free-personality-test" target="_blank">Take a test</a></h4>
          <Button id="MBTI" text="Next"></Button>
          <Button id="noMBTI" text="Skip for now"></Button>
        </div>
      </div>
    </Main>
  )
}
export default Settings