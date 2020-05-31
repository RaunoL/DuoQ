import React from "react";
import Button from "../Button";

function RegionFortnite(props){
    const {setRegion} = props;
    const changeRegion = (e)=>{
        setRegion(e.target.id);
    }
    return(
        <div className="RegionFortnite" id="region2">
          <h4>Choose Your region</h4>
          <Button action ={changeRegion} id="1" text="Europe"></Button>
          <Button action ={changeRegion} id="2" text="North America"></Button>
        </div>
    )
}
export default RegionFortnite