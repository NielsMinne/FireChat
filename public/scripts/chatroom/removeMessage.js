/**
 * All functions needed to remove a message AND/OR user
 */

import { USER,CHATROOMS } from "../consts.js";

/**
 * Removes a user from the collection Users
 */
const removeUser = async () => {
    const id = localStorage.getItem('room-name');
    const user = USER.currentUser.displayName;
    await CHATROOMS.doc(id).collection('users').where('user', "==", user).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            CHATROOMS.doc(id).collection('users').doc(doc.id).delete();
        })
    });
}

/**
 * @returns Function that modifies the message to "message deleted" if the remove icon is clicked
 */
const removeMessage = async (e) => {
    const id = localStorage.getItem('room-name');
    const timestamp = e.currentTarget.parentNode.parentNode.querySelector('.message-info').innerText;
    const createdOn = timestamp.substring(timestamp.indexOf('|') + 2);

    await CHATROOMS.doc(id).collection('messages').where('createdOn', "==", createdOn).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            CHATROOMS.doc(id).collection('messages').doc(doc.id).update({
                message: 'message deleted'
            });
        })
    });

}

const logoutInRoom = async () => {
    await removeUser();
    USER.signOut();
}

const logout = async () =>{
    USER.signOut();
}

const backToHub = async () => {
    await removeUser();
    location.replace('./chat.html');
}

export{logout,backToHub,removeMessage,logoutInRoom}