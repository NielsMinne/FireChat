import {div} from "./div.js"
import {text} from "./text.js"

/**
 * 
 * A User Joined Bubble Component
 */

/**
 * 
 * @param {*} user Give the name of the user a string
 * @param {*} className Give 1 or more classnames
 * @returns A Component that prints when a user enters the room
 */

export const userJoinNotification = (user, className) => {
    const joinNotification =
        div([
            text(user, 'user-joined'),
        ], className);
    return joinNotification;
}