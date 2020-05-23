import React from "react";
import Button from "../Button";
import Input from "../Input";

function Mbti(props){
    const {setPersonality} = props;
    const changePersonality = (event)=>{
        event.preventDefault();
        console.log(event.target.elements.mbti.value);
    }
    return(
        <form class="MBTI" onSubmit={changePersonality}>
          <h4>What is your MBTI personality type?</h4>
          <Input type="text" id="MBTI" placeholder="Personality type"></Input>
          <h4>Don't know? <a  rel="noopener noreferrer" href="https://www.16personalities.com/free-personality-test" target="_blank">Take a test</a></h4>
          <Button id="MBTI" text="Next"></Button>
          <Button id="noMBTI" text="Skip for now"></Button>
        </form> 
    )
}
export default Mbti