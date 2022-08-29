/**
 * CreateFunctions.js = Where 'almost' all visual elements are created
 */

import { line,profileImage,form,inputField,header,button,anchor,label,div,errorMessage,text} from "../Components/createComponents.js";
import { EMAIL_LIMIT,USERNAME_LIMIT,PASSWORD_LIMIT,ROOMNAME_LIMIT,MESSAGE_LIMIT} from "./consts.js";

const goToRegister = () => {
  location.href = "./register.html"; //redirect to register.html
}

const goToLogin = () => {
  location.href = './index.html'; //redirect to index.html
}

/**
 * @param {*} appendDiv Div to append this form
 * @returns A Premade Register Form made with components
 */
export const createRegisterForm = (appendDiv) => {
  appendDiv.appendChild(form([
    header('Firechat 1.0', 1, 'firechat-title'),
    header('register', 2, 'capital-text'),

    errorMessage('hide error', 'errorLogin'),
    label('E-mail', 'label-input'),
    inputField('txtEmail input-field', 'text', 'email', 'example@gmail.com', EMAIL_LIMIT),
    label('Username', 'label-input'),
    inputField('txtUser input-field', 'text', 'username', 'Mr. Example', USERNAME_LIMIT),
    label('Password', 'label-input'),
    inputField('txtPassword input-field', 'password', 'password', '•••••••••••••••', PASSWORD_LIMIT),
    button('Sign up', 'btn register-btn'),

    anchor('Already have an account? <span>login here</span>', 'register', goToLogin)
  ], 'flex flex-center', 'registerContainer'));
}

/**
 * @param {*} appendDiv Div to append this form
 * @returns A Premade Login Form made with components
 */
export const createLoginForm = (appendDiv) => {
  appendDiv.appendChild(form([
    header('Firechat 1.0', 1, 'firechat-title'), //Title
    header('Login', 2, 'capital-text'),

    errorMessage('hide error', 'errorLogin'), //error (hidden until error)

    label('E-mail', 'label-input'), //Email Field
    inputField('txtEmail input-field', 'text', 'email', 'example@gmail.com', EMAIL_LIMIT),

    label('Password ','label-input'), //Password Field
    inputField('txtPassword input-field', 'password', 'password', '•••••••••••••••', PASSWORD_LIMIT),

    button('Login', 'btn login-btn'), //Login Button
    header('or', 3, 'capital-text'),
    div([
      button('<i class="fab fa-github fa-lg icon-hover"></i>', 'btn github-btn'), //github button
      button('<i class="fab fa-google fa-lg icon-hover"></i>', 'btn google-btn'), // google button
      button('<i class="fab fa-facebook-f fa-lg icon-hover"></i>', 'btn facebook-btn') //facebook button 
    ], 'flex flex-center'),

    anchor("Don't have an account? <span>register here</span>", 'login', goToRegister) //Anchor to go to Register Form
  ], 'flex flex-center', 'loginContainer'));
}

/**
 * @param {*} appendParent The parent that needs to be appended to
 * @param {*} logout A logout function
 * @param {*} showChatnameInput A function that toggles when you press 'Create Chatroom'
 * @param {*} addChatroom A function that adds the chatroom to the collection
 * @param {*} toggleDarkmode A toggle function for dark/light mode
 * @returns A Premade Chathub made with components, filled with functions (need to be created in specific script)
 */
export const createChatHub = (appendParent, logout, showChatnameInput, addChatroom, toggleDarkmode) => {
  appendParent.appendChild(div([

    div([header('FireChat 1.0', 2, 'title'), //The Hub Navbar
      header('Chatroom Hub', 2, 'hub-title'),
      button('logout <i class="fas fa-sign-out-alt icon"></i>', 'btn logout', logout)
    ], 'flex flex-space-around nav-hub'),

    button('create chatroom', 'btn chatroom-button', showChatnameInput), //Button to create a chatroom with inputfield

    form([
      label('Chatroom name :', 'chatroom-add-name hide'),
      inputField('input-field room-name hide', 'text', 'room-name', "User's Room", ROOMNAME_LIMIT),
      button('Submit', "btn namesubmit-btn hide", addChatroom) //Button to add chatroom with click/enter
    ], 'create-chatroom-nav'),

    errorMessage('error hide', 'errorLogin'), //error (hidden until error)
    line(), //style seperation

    button('<i class="fas fa-moon fa-2x toggle"></i>', 'btn darkmode-btn', toggleDarkmode) // Toggle button for dark/light mode (absolute)
  ], 'flex flex-column main-hub'));
}

/**
 * @param {*} appendParent The parent that needs to be appended to
 * @param {*} id Give a unique id
 * @param {*} backToHub A function that sends you back to the hub
 * @param {*} logout A logout function
 * @param {*} sendMessage A function that sends a message when you enter/click the send button
 * @param {*} openPanelEmoji A function to open the emoji panel when you click the button
 * @param {*} USER Gets the users info from Firebase auth()
 * @returns A Premade Chatroom with components, filled with functions (need to be created in specific script)
 */
export const createChat = (appendParent, id, backToHub, logoutInRoom, sendMessage, openPanelEmoji, USER) => {
  appendParent.appendChild(div([
    div([
      div([
        div([ //Profile picture + Username
          profileImage(USER.currentUser.photoURL, 'profile-picture'),
          text(USER.currentUser.displayName, 'profile-user')
        ], 'flex no-gap'),

        header(id, 2, 'chatroom-id'), //Chatroom Name

        div([ //Buttons to go Home or Logout
          button(`<i class="fas fa-house-user"></i> Home`, 'btn logout', backToHub),
          button(' <i class="fas fa-sign-out-alt icon"></i> logout ', 'btn logout', logoutInRoom)
        ], ' flex flex-column no-gap')
      ], 'flex flex-center flex-space-between padding-left-right'),
    ]),

    div([], 'flex no-gap users-joined'), //An empty div to append the users that joined
    line(), //style seperation
    div([], 'chat-field'), //An empty div to append the messages

    div([ //The interactive field where you can send messages and post emojis
      inputField('message-input-field', 'text', 'message', 'Enter your message here...', MESSAGE_LIMIT),
      button('<i class="far fa-laugh fa-2x"></i>', 'btn emoji-btn', openPanelEmoji),
      button('<i class="fas fa-paper-plane fa-2x send"></i>', 'btn send-button', sendMessage)
    ], 'flex no-gap message-div'),
  ], 'flex flex-column no-gap chatroom-div'))
}

/**
 * @param {*} appendParent The parent that needs to be appended to
 * @param {*} sendEmoji The function to send Emojis in chat (with a SWITCH-case for easy expansion)
 */
export const createEmojiPanel = (appendParent, sendEmoji) => {
  appendParent.appendChild(div([
    anchor('<i class="far fa-laugh fa-2x"></i>', 'emoji-laugh', sendEmoji),
    anchor('<i class="far fa-smile-wink fa-2x"></i>', 'emoji-wink', sendEmoji),
    anchor('<i class="far fa-grin-tongue-squint fa-2x"></i>', 'emoji-grin-tongue-squint', sendEmoji),
    anchor('<i class="far fa-kiss-wink-heart fa-2x"></i>', 'emoji-kiss-wink', sendEmoji),
    anchor('<i class="far fa-grin-tears fa-2x"></i>', 'emoji-grin-tears', sendEmoji),
    anchor('<i class="far fa-meh-blank fa-2x"></i>', 'emoji-meh', sendEmoji),
    anchor('<i class="far fa-surprise fa-2x"></i>', 'emoji-surprise', sendEmoji),
    anchor('<i class="far fa-dizzy fa-2x"></i>', 'emoji-dizzy', sendEmoji),
    anchor('<i class="far fa-sad-tear fa-2x"></i>', 'emoji-sad', sendEmoji),
    anchor('<i class="far fa-angry fa-2x"></i>', 'emoji-angry', sendEmoji),
    anchor('<i class="far fa-grin-beam-sweat fa-2x"></i>', 'emoji-sweat', sendEmoji),
    anchor('<i class="far fa-thumbs-down fa-2x"></i>', 'emoji-thumb-down', sendEmoji),
    anchor('<i class="far fa-thumbs-up fa-2x"></i>', 'emoji-thumb-up', sendEmoji),
    anchor('<i class="far fa-hand-peace fa-2x"></i>', 'emoji-peace', sendEmoji),
    anchor('<i class="fas fa-poo fa-2x"></i>', 'emoji-poo', sendEmoji),

  ], 'emoji-panel hide'));
}