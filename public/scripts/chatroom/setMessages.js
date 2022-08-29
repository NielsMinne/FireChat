/**
 *  All functions that SET the users joined, messages, ...
 */

import { CHATROOMS,USER,QSELECT } from "../consts.js";

/**
 * @returns Function that sends the message to firestore to be retrieved with snapshot
 */
 const sendMessage = async () => {

     //get all elements needed
     const chatroomId = QSELECT('.chatroom-id').innerText; //get roomname
     const messageToSend = QSELECT('.message-input-field');
     const emojiPanel = QSELECT('.emoji-panel');
     //Create a time at which the message is created
     const timestamp = firebase.firestore.Timestamp.now().toMillis();
     const date = new Date(timestamp);
     const fDate = date.toLocaleString('nl-BE'); //formatted timestring

     const message = {
         message: messageToSend.value,
         createdOn: fDate,
         user: USER.currentUser.displayName,
         userId: USER.currentUser.uid,
     }

     if (messageToSend.value) { //if there is something in the messagefield -> you can send
         try {
             await CHATROOMS.doc(chatroomId).collection('messages').doc().set(message);
             messageToSend.value = "";
         } catch (error) {
             alert(error.message);
         }
     }
     emojiPanel.classList.add('hide'); //hide the emoji panel is message is send (reset)
 }

/**
 * @returns Function that adds the user to the firestore when joining a room
 */
const userJoinRoom = async () => {
    const id = localStorage.getItem('room-name');
    const timestamp = firebase.firestore.Timestamp.now().toMillis();
    const date = new Date(timestamp);
    const fDate = date.toLocaleString('nl-BE');

    const userJoin = {
        user: USER.currentUser.displayName,
        createdOn: fDate,
    }
    try {
        await CHATROOMS.doc(id).collection('users').doc().set(userJoin);
    } catch (error) {
        alert(error.message);
    }
}

export { sendMessage,userJoinRoom }