/**
 * Constants
 */

import { initFirebase } from "./firebase.js";

initFirebase(); //Initialize Firebase App (Importing consts.js in either login,register or chat.js also imports InitFireBase() )

const EMAIL_LIMIT = 30;
const PASSWORD_LIMIT = 20;
const USERNAME_LIMIT = 15;
const ROOMNAME_LIMIT = 25;
const MESSAGE_LIMIT = 140;

const EMOJI_ARR1 = ['emoji-laugh','emoji-wink','emoji-grin-tongue-squint','emoji-kiss-wink','emoji-grin-tears','emoji-meh','emoji-surprise','emoji-dizzy'];
const EMOJI_ARR2 = ['emoji-sad','emoji-angry','emoji-sweat','emoji-thumb-down','emoji-thumb-up','emoji-peace','emoji-poo'];
const EMOJI_ARR = [...EMOJI_ARR1,...EMOJI_ARR2]; //spread 2 arrays in 1 (This gets exported)


const QSELECT = (input) => document.querySelector(input); //Shortcut querySelector
const USER = firebase.auth(); //returns the data of the authenticated User
const DB = firebase.firestore(); //returns data from firebase database
const CHATROOMS = DB.collection('Chatrooms') //Gives the collection "Chatrooms"

export { 
    EMAIL_LIMIT,
    PASSWORD_LIMIT,
    USERNAME_LIMIT,
    ROOMNAME_LIMIT,
    MESSAGE_LIMIT,
    EMOJI_ARR,
    QSELECT,
    USER,
    CHATROOMS
}