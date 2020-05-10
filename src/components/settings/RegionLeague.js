import React from "react";
import Button from "../Button";

function RegionLeague(props){
    const {setRegion} = props;
    const changeRegion = (e)=>{
        setRegion(e.target.id);
    }
    return(
        <div class="RegionLeague" id="region1">
          <h4>Choose Your region</h4>
          <Button action ={changeRegion} id="RegionLeague1" text="EUW"></Button>
          <Button action ={changeRegion} id="RegionLeague2" text="EUNE"></Button>
          <Button action ={changeRegion} id="RegionLeague3" text="NA"></Button>
        </div>
    )
}
export default RegionLeague