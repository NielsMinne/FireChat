import { div } from "./div.js"
import { text } from "./text.js"
import { anchor } from "./anchor.js"

/**
 * 
 * A Message Bubble Component
 */

/**
 * 
 * @param {*} user Name of the user as string
 * @param {*} time Time of message send as string
 * @param {*} message Message as string
 * @param {*} className Give 1 or more classnames (attaches to div)
 * @returns A single chat bubble with the user's message, name and time
 */

export const messageBubble = (user,time,message,className,onClick) =>{
    const messageBubble = div([
        div([
            text(message,'message-show'),
            anchor('<i class="fas fa-minus-square"></i>','delete-icon',onClick) //Remove message button
        ],'flex flex-space-between'),
        text(`${user} | ${time}`,'message-info')
    ],className)
    return messageBubble;
}