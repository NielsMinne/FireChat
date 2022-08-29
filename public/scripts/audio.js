/**
 * Audio script (All sounds are created here)
 */

let audioMyMessage = null;
let audioOtherMessage = null;
let audioEnterRoom = null;
let audioAnimationPlay = null;
let audioLeaveRoom = null;

/**
 * @returns Plays a specific sound if you send a message
 */
export const playMyMessageSound = () =>{
    if(!audioMyMessage) audioMyMessage = new Audio('./assets/sounds/my_bubble.mp3');
    audioMyMessage.play();
    audioMyMessage.volume = 0.3;
}

/**
 * @returns Plays a specific sound when another user sends a message
 */
export const playOtherMessageSound = () =>{
    if(!audioOtherMessage) audioOtherMessage = new Audio('./assets/sounds/other_bubble.mp3');
    audioOtherMessage.play();
}

/**
 * @returns Plays a specific sound when someone enters a room
 */
export const playEnterRoom = () =>{
    if(!audioEnterRoom) audioEnterRoom = new Audio('./assets/sounds/enter_room.mp3');
    audioEnterRoom.play();
    audioEnterRoom.volume = 0.3;
}


/**
 * @returns Plays a specific sound when someone leaves a room
 */
export const playLeaveRoom = () =>{
    if(!audioLeaveRoom) audioLeaveRoom = new Audio('./assets/sounds/leave_room.mp3');
    audioLeaveRoom.play();
    audioLeaveRoom.volume = 0.3;
}
/**
 * @returns Plays a specific sound when you login/register
 */
export const playLoginSound = () =>{
    if(!audioAnimationPlay) audioAnimationPlay = new Audio('./assets/sounds/login_sound.wav');
    audioAnimationPlay.play();
    audioAnimationPlay.volume = 0.3;
}