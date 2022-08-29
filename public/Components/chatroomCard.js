import { div } from "./div.js"
import { header } from "./header.js"
import { text } from "./text.js"

/**
 * A Chatroom Card Component
 */

/**
 * 
 * @param {*} parent Insert the parent element to whom this card needs to be appended
 * @param {*} chatroomName Name of the chatroom as string
 * @param {*} username Name of the user as string
 * @param {*} count Insert the size of the docs inside the firebase collection
 * @param {*} divFunction Insert a function to execute when div is clicked
 * @returns A Card with chatroom name, creator and amount of people inside the room
 */

export const chatroomCard = (appendParent,chatroomName, username,count,divFunction) => {
    appendParent.appendChild(div([
        div([
            header(chatroomName,2,'chatroom-name'), 
            text(username,'username'), 
        ],'chatroom-info'),
        div([
            text(count,'room-users-amount'),
            text('<i class="fas fa-users fa-2x"></i>','users-icon')
        ],'flex flex-center no-gap')
    ],'flex flex-space-between chatroomcard-div',divFunction))

}

