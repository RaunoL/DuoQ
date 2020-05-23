import app from "../services/firebase/base";
import React, { useContext } from "react";
import { AuthContext } from "../services/firebase/auth";
import { useHistory } from "react-router-dom";
function FindMatch(props) {
    const { currentUser } = useContext(AuthContext);
    const history = useHistory();
    const { game } = props;
    const { gameMode } = props;
    const { region } = props;
    const { voice } = props;
    const {personality} = props
    const queueref = app.firestore().collection("queue");
    queueref
        .where("game", "==", game)
        .where("mode", "==", gameMode)
        .where("region", "==", region)
        .where("voice", "==", voice)
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.docs === "") {
                app.firestore().collection("queue")
                    .add({
                        uid: currentUser.uid,
                        discord: currentUser.displayName,
                        game: game,
                        mode: gameMode,
                        region: region,
                        voice: voice,
                        personality: personality
                    })
                    .then(function () {
                        history.push("/dash")
                    })
                    .catch(function (error) {
                        console.error("Error writing document: ", error);
                    });
            }
            else {
                querySnapshot.forEach((doc) => {
                    const match = doc.data();
                    queueref
                    .where("uid", "==", match.uid)
                    .get()
                    .then((querySnapshot)=>{
                        querySnapshot.forEach(function(doc) {
                            const matchQueueId = doc.id;
                            queueref
                            .doc(matchQueueId)
                            .delete()
                        });
                    })
                    app.firestore().collection("match")
                        .add({
                            uid: currentUser.uid,
                            matchUid: match.uid,
                            matchDiscord: match.discord
                        })
                        .then(function () {
                            app.firestore().collection("match")
                                .add({
                                    uid: match.uid,
                                    matchUid: currentUser.uid,
                                    matchDiscord: currentUser.displayName
                                })
                                .then(function () {
                                    history.push("/dash")
                                })
                                .catch(function (error) {
                                    console.error("Error writing document: ", error);
                                });
                        })
                        .catch(function (error) {
                            console.error("Error writing document: ", error);
                        });
                });
            }

        })
    history.push("/dash")
    return (
        <h1>Finding your Duo</h1>
    )

}
export default FindMatch
