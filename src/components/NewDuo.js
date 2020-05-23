import React, { useContext } from "react";
import Button from "./Button"
import { useHistory } from "react-router-dom";
import { AuthContext } from "../services/firebase/auth";
import app from "../services/firebase/base";

function NewDuo(props) {
    const { queueState } = props;
    console.log(queueState)
    const { setQueueState } = props
    const { currentUser } = useContext(AuthContext);
    const history = useHistory();
    const removeFromQueue = (e) => {
        const queueref = app.firestore().collection("queue");
        queueref.
            where("uid", "==", currentUser.uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach(function (doc) {
                    const matchQueueId = doc.id;
                    queueref
                        .doc(matchQueueId)
                        .delete()
                });
            })
            .then(() => {
                setQueueState("Not in queue")
            })
    }
    const newMatch = (e) => {
        const matchref = app.firestore().collection("match");
        matchref.
            where("uid", "==", currentUser.uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach(function (doc) {
                    const matchQueueId = doc.id;
                    matchref
                        .doc(matchQueueId)
                        .delete()
                });
            })
            .then(() => {
                matchref.
                    where("matchUid", "==", currentUser.uid)
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach(function (doc) {
                            const matchQueueId = doc.id;
                            matchref
                                .doc(matchQueueId)
                                .delete()
                        });
                    })
            })
            .then(() => {
                setQueueState("Not in queue");
            })
    }
    if (queueState == "In queue") {
        return (
            <div>
                <h1>In queue</h1>
                <Button action={removeFromQueue} text={"Change Settings"}></Button>
            </div>

        )
    }
    if (queueState == "Not in queue") {
        history.push("/settings")
    }
    if (queueState == null) {
        return null
    }
    if (queueState != "In queue" || queueState != "Not in queue") {
        return (
            <div>
                <h5>You have been matched with</h5>
                <h2>{queueState}</h2>
                <Button action={newMatch} text={"Find new Duo"}></Button>
            </div>
        )

    }
    return null
}
export default NewDuo