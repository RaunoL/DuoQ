import React from "react";
import Button from "../Button";

function VoiceChat(props){
    const {setVoice} = props;
    const changeVoice = (e)=>{
        setVoice(e.target.id)
    }
    return(
        <div className="voiceChat">
          <h4>Do you want to use voice chat?</h4>
          <Button action={changeVoice} id="1" text="Yes"></Button>
          <Button action={changeVoice} id="0" text="No"></Button>
        </div>
    )
}
export default VoiceChat