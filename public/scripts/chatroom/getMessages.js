/**
 *  All functions that GET the users joined, messages, ...
 */

import { CHATROOMS,QSELECT,USER } from "../consts.js";
import { userJoinNotification,messageBubble } from "../../Components/chatComponents.js";
import { playEnterRoom,playMyMessageSound,playOtherMessageSound,playLeaveRoom } from "../audio.js";
import { removeMessage } from "./removeMessage.js";


/**
 * @param {*} id Give a unique ID
 * @param {*} appendParent The parent to append the users to 
 * @returns Functions that listens if users are joined and adds them to the display
 */
const getUsersJoined = async (id, appendParent) => {
    await CHATROOMS.doc(id).collection("users").orderBy('createdOn', 'asc')
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                const userClass = change.doc.data().user.replace(/[`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi,'').replaceAll(" ",""); //to add to the class as unique ID
                if (change.type === "added") { //if the listener detects an add to the firestore --> execute
                    if (!QSELECT(`.${userClass}`)) {
                        appendParent.appendChild(userJoinNotification(change.doc.data().user, `user-join-bubble ${userClass}`));
                        playEnterRoom();
                    }
                }
                if (change.type === "removed") { //if the listener detects a remove in the firestore --> execute
                    appendParent.removeChild(QSELECT(`.${userClass}`));
                    playLeaveRoom();
                }
            })
        });
}

/**
 * @param {*} id Give the id of the doc in the collection "Chatrooms"
 * @param {*} appendParent The parent to append the messages to
 * @returns Function that listens if messages are added,modified or removed and adds them to the chatfield
 */
const getMessages = async (id, appendParent) => {
    await CHATROOMS.doc(id).collection("messages").orderBy('createdOn', 'asc')
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                const uniqueID = change.doc.data().createdOn.replaceAll("/", "").replaceAll(":", "").replaceAll(" ", ""); //create unique ID out of timestamp
                if (change.type === "added") { //if the listener detects an add to the firestore --> execute
                    if (change.doc.data().userId == USER.currentUser.uid) { //if user logged equals the user that send the message (give class my-bubble)
                        console.log();
                        appendParent.appendChild(messageBubble(change.doc.data().user, change.doc.data().createdOn, change.doc.data().message, `my-bubble id${uniqueID}`, removeMessage));
                        playMyMessageSound();
                    } else { //if it's an other user (give class other-bubble)
                        appendParent.appendChild(messageBubble(change.doc.data().user, new Date().toLocaleString('nl-BE'), change.doc.data().message, `other-bubble id${uniqueID}`));
                        playOtherMessageSound();
                    }
                    appendParent.scrollTop = appendParent.scrollHeight;
                }
                if (change.type === "modified") { //if the listener detects a change to the firestore --> execute
                    let message = QSELECT(`.id${uniqueID}`).firstChild.firstChild; //get the message in the bubble
                    message.innerText = "message deleted";
                    message.style.fontSize = '0.8em';
                    message.style.fontWeight = '500';
                }
            });
        });
}

export { getUsersJoined,getMessages }