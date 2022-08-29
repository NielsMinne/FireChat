/**
 * Emoji Creation Page (All functions in relation to emojis)
 */

import { QSELECT,USER,CHATROOMS,EMOJI_ARR } from "./consts.js";
import { createEmojiPanel } from "./createFunctions.js";

/**
 * @returns Opens the emoji panel (remove hide class)
 */
export const openPanelEmoji = () =>{
    const emojiPanel = QSELECT('.emoji-panel');
    if(emojiPanel.className == 'emoji-panel hide'){
        emojiPanel.classList.remove('hide');
    }
    else{
        emojiPanel.classList.add('hide');
    }
}

/**
 * @returns Creates the emoji panel
 */
//to export to other file
export const makePanelEmoji = () =>{
    const chatroomDiv = QSELECT('.message-div');
    createEmojiPanel(chatroomDiv,sendEmoji);
}

/**
 * @param {*} e callback
 * @returns A function where the emojis are send to the firebase firestore when clicked
 */
const sendEmoji = async(e) =>{

    //Get the info for the doc (time,user and userID). Put in seperate object for possible later expansion
    const timestamp = firebase.firestore.Timestamp.now().toMillis();
    const date = new Date(timestamp);
    const fDate = date.toLocaleString('nl-BE');

    const emoji = {
        message:"",
        createdOn: fDate,
        user: USER.currentUser.displayName,
        userId: USER.currentUser.uid,
    }

  
    
    switch(e.currentTarget.className){ //if clicked target classname = EMOJI_ARR[i] -> execute | (EMOJI_ARR -> consts.js)
        case EMOJI_ARR[0]:
            emoji.message = '<i class="far fa-laugh fa-3x"></i>'; //put message in emoji object that will print
            break;
        case EMOJI_ARR[1]:
            emoji.message = '<i class="far fa-smile-wink fa-3x"></i>';
            break;
        case EMOJI_ARR[2]:
            emoji.message = '<i class="far fa-grin-tongue-squint fa-3x"></i>';
            break;
        case EMOJI_ARR[3]:
            emoji.message = '<i class="far fa-kiss-wink-heart fa-3x"></i>';
            break;
        case EMOJI_ARR[4]:
            emoji.message = '<i class="far fa-grin-tears fa-3x"></i>';
            break;
        case EMOJI_ARR[5]:
            emoji.message = '<i class="far fa-meh-blank fa-3x"></i>';
            break;
        case EMOJI_ARR[6]:
            emoji.message = '<i class="far fa-surprise fa-3x"></i>';
            break;
        case EMOJI_ARR[7]:
            emoji.message = '<i class="far fa-dizzy fa-3x"></i>';
        break;
        case EMOJI_ARR[8]:
            emoji.message = '<i class="far fa-sad-tear fa-3x"></i>';
        break;
        case EMOJI_ARR[9]:
            emoji.message = '<i class="far fa-angry fa-3x"></i>';
        break;
        case EMOJI_ARR[10]:
            emoji.message = '<i class="far fa-grin-beam-sweat fa-3x"></i>';
        break;
        case EMOJI_ARR[11]:
            emoji.message = '<i class="far fa-thumbs-down fa-3x"></i>';
        break;
        case EMOJI_ARR[12]:
            emoji.message = '<i class="far fa-thumbs-up fa-3x"></i>';
        break;
        case EMOJI_ARR[13]:
            emoji.message = '<i class="far fa-hand-peace fa-3x"></i>';
        break;
        case EMOJI_ARR[14]:
            emoji.message = '<i class="fas fa-poo fa-2x"></i>';
        break;
        default:
    }
    
const chatroomId = QSELECT('.chatroom-id').innerText; //get the name of the roo
await CHATROOMS.doc(chatroomId).collection('messages').doc().set(emoji) //set emoji in firestore
    .then(() => {
        const emojiPanel = QSELECT('.emoji-panel'); //get panel
        emojiPanel.classList.add('hide'); //hide panel
    })
}
