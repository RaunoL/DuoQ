import React, { useContext } from "react"
import app from "../services/firebase/base";
import { AuthContext } from "../services/firebase/auth";

function QueueStatus(props) {
    const {queueState} = props;
    const {setQueueState} = props;
    let currentStatus= <h1>Nothing to render</h1>;
    const { currentUser } = useContext(AuthContext);
    const queueref = app.firestore().collection("queue");
    const matchref = app.firestore().collection("match");
    queueref
        .where("uid", "==", currentUser.uid)
        .get()
        .then((queueSnapshot) => {
            if (queueSnapshot.docs == "") {
                matchref
                    .where("uid", "==", currentUser.uid)
                    .get()
                    .then((matchSnapshot) => {
                        if (matchSnapshot.docs == "") {
                            setQueueState("Not in queue")
                        }
                        else {
                            matchSnapshot.forEach((doc)=>{
                                let matchDiscord = doc.data().matchDiscord;
                                console.log(doc.data())
                                setQueueState( matchDiscord)
                            })
                        }
                    })
                
            }
            else {
                setQueueState("In queue")
            }
        })
    return (
    <h1>{queueState}</h1>
    )
}
export default QueueStatus