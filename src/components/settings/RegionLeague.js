import React from "react";
import Button from "../Button";

function RegionLeague(props){
    const {setRegion} = props;
    const changeRegion = (e)=>{
        setRegion(e.target.id);
    }
    return(
        <div className="RegionLeague" id="region1">
          <h4>Choose Your region</h4>
          <Button action ={changeRegion} id="1" text="EUW"></Button>
          <Button action ={changeRegion} id="2" text="EUNE"></Button>
          <Button action ={changeRegion} id="3" text="NA"></Button>
        </div>
    )
}
export default RegionLeague