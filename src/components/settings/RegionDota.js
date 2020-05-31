import React from "react";
import Button from "../Button";

function RegionDota(props){
    const {setRegion} = props;
    const changeRegion = (e)=>{
        setRegion(e.target.id);
    }
    return(
        <div className="RegionDota" id="region3">
          <h4>Choose Your region</h4>
          <Button action ={changeRegion} id="1" text="Europe"></Button>
          <Button action ={changeRegion} id="2" text="North America"></Button>
        </div>
    )
}
export default RegionDota