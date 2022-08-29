/**
 * The Register Form + functionality
 */


import { createRegisterForm } from "./createFunctions.js";
import { QSELECT,USER } from "./consts.js";
import { animationLogin } from "../Components/loginAnimation.js";
import { playLoginSound } from "./audio.js";

//Get the container to append
const appContainer = QSELECT('#appRegister');


const initRegister = () => {
  const btnRegister = QSELECT('.register-btn'); //Get the button
  btnRegister.setAttribute('type','submit');
  btnRegister.addEventListener('click', register); //Assign the register function to button
}

//Function to show if email/password was not the right format
const showError = (error) => {
  if (!error) return;
  const errorContainer = QSELECT('#errorLogin');
  errorContainer.innerHTML = error.message;
  errorContainer.classList.remove('hide');
}

//Main register function
const register = async (e) => {
  e.preventDefault();
  
  const error = QSELECT('#errorLogin');
  //Get all data from Form
  const formData = new FormData(QSELECT('form'));
  const email = formData.get('email');
  const password = formData.get('password');
  const username = formData.get('username');
  
  if(username){
    try {
      await USER.createUserWithEmailAndPassword(email, password); //Creates the user
      await USER.currentUser.updateProfile({displayName: username}).then(()=>{ //Updates the username to the chosen one
  
        if(register){
          animationLogin(appContainer,formDiv);
          playLoginSound();
          setTimeout(()=>{
            location.replace('./chat.html'); //Go to Chat application
          },7000)
        }
      })
    } 
    catch (e) {
      showError(e);
      
    }
  }
  else{
    error.innerHTML = 'A username is required';
    error.classList.remove('hide');
  }
}

const appRegister = () =>{
  //This will be executed when the page is loaded
  window.addEventListener('load', initRegister);
  //Create the Form Element with all fields
  createRegisterForm(appContainer);
}
appRegister();

const formDiv = QSELECT('#registerContainer');

