import { chatroomCard} from "../Components/chatComponents.js";
import { USER,CHATROOMS,QSELECT } from "./consts.js";
import { createChatHub ,createChat } from "./createFunctions.js";
import { makePanelEmoji,openPanelEmoji } from "./emoji.js";
import { loader } from "../Components/loader.js";
import { addChatroom } from "./collectionAdd.js";
import { showChatroomInput,toggleDarkmode } from "./toggleFunc.js";
import { logout,backToHub, logoutInRoom } from "./chatroom/removeMessage.js";
import { sendMessage,userJoinRoom } from "./chatroom/setMessages.js";
import { getUsersJoined,getMessages } from "./chatroom/getMessages.js";

/** -------------------------------------------------------------------------------------------------------------------- **/

const appChat = QSELECT('#appChat');
const root = document.documentElement;
root.setAttribute('theme',localStorage.getItem('mode')); //on refresh sets the dark/light mode to the one it was on
if(!localStorage.getItem('icon-class')) localStorage.setItem('icon-class','fas fa-moon fa-2x toggle'); //first time on load icon = moon

//Initialize the chat on load
const initChat = async() => {
    firebase.auth().onAuthStateChanged(onAuthStateChanged); //check if user is logged in (if not --> ./index.html)
    appChat.appendChild(loader()); //simulate a loader
    setTimeout(()=>{
            appChat.removeChild(QSELECT('.loader-container')); //remove loader after 1.5s
            loadChatrooms(); //load all the chatrooms
     },1500)

     //On page refresh --> delete user from room if he was in one
     const id = localStorage.getItem('room-name');
     const user = localStorage.getItem('user-name');
     await CHATROOMS.doc(id).collection('users').where('user', "==", user).get().then((querySnapshot)=>{
         querySnapshot.forEach((doc) =>{
              CHATROOMS.doc(id).collection('users').doc(doc.id).delete();
         })
     });
}

//Loads all the chatrooms that are in the collection
const loadChatrooms = async () => {
    const mainHub = QSELECT('.main-hub');
    await CHATROOMS.orderBy('createdOn', 'asc').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            CHATROOMS.doc(change.doc.id).collection('users').get().then(snap =>{
                    const amountOfUsers = snap.size; //checks the amount of users inside the room
                    if (change.type === "added") {
                        chatroomCard(mainHub, change.doc.id, JSON.stringify(change.doc.data().user).replace(/^"(.*)"$/, '$1'), amountOfUsers, joinChat); //Creates a chatroomcard with all info
                    }
                })
            })
    });
}

//When you enter a room by clicking on the chatroom card
const joinChat =  async(event) => {
    const id = event.currentTarget.querySelector('h2').innerText; //get the name of the clicked chatroom 

    localStorage.setItem('user-name',USER.currentUser.displayName); //set the username in the localstorage for later use
    localStorage.setItem('room-name',id); //set the roomname in local storage for later use

    appChat.innerHTML = ""; //clear the HTML

    createChat(appChat,id,backToHub,logoutInRoom,sendMessage,openPanelEmoji,USER);// Load the chatroom with all functions and visuals

    userJoinRoom(); //add users that join the room

    makePanelEmoji(); //create the emoji toggle panel

    const chatField = QSELECT('.chat-field'); 
    const userJoinNav= QSELECT('.users-joined');

    getMessages(id, chatField); //get all messages from collection
    getUsersJoined(id,userJoinNav); //get all users from collection
    
    // chatField.scrollTop = chatField.scrollHeight;
    
    const messageToSend = QSELECT('.message-input-field');
    messageToSend.addEventListener('keypress', (e)=>{ //to ensure you can also press enter in chat
        if(e.key === 'Enter'){
            sendMessage();
        }
    });
}

const onAuthStateChanged = (firebaseUser) => {
    if (!firebaseUser) location.replace('./index.html');
}

const chatApp = () =>{
    window.addEventListener('load', initChat); //when window is loaded --> execute initChat
    createChatHub(appChat,logout,showChatroomInput,addChatroom,toggleDarkmode); //creates the hub 
}

chatApp();

//This code is to ensure the icon always corresponds with the theme that is applied
const icon = QSELECT('.toggle');
if(localStorage.getItem('mode') === 'dark'){
    icon.className = localStorage.getItem('icon-class');
}
else{
    icon.className = localStorage.getItem('icon-class');
}