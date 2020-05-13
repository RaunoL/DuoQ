import app from "../services/firebase/base";
import React from "react"
function FindMatch(props){
    app.firestore().collection("queue").add({
        uid: "myUid",
        discord: "mydiscord",
        game: 1,
        mode: 0,
        region: 2,
        voice: 1
    });
    return(
        <h1>You are in queue</h1>
    )
}
export default FindMatch