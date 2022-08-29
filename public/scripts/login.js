/**
 * The Login Form + Functionality
 */

import { createLoginForm } from "./createFunctions.js";
import { QSELECT,USER } from "./consts.js";
import { animationLogin } from "../Components/loginAnimation.js";
import { playLoginSound } from "./audio.js";

//Get the container to append
const appContainer = QSELECT('#appLogin');

//This function happens on load
const initLogin = () => {
  USER.onAuthStateChanged(onAuthStateChanged); //Check if user is logged in
  
  const btnLogin = QSELECT('.login-btn');
  btnLogin.addEventListener('click', login);
  
  const btnGoogle = QSELECT('.google-btn');
  btnGoogle.addEventListener('click', googleLogin);
  
  const btnGithub = QSELECT('.github-btn');
  btnGithub.addEventListener('click',githubLogin);
  
  const btnFacebook = QSELECT('.facebook-btn');
  btnFacebook.addEventListener('click',facebookLogin);
  
}

//Go to chat application if user is logged in 
const onAuthStateChanged = (firebaseUser) =>{
  setTimeout(()=>{
    if(firebaseUser) location.replace('./chat.html');
  },7000)

}

//Function to show if email/password was not the right format OR correct
const showError = (error) => {
  if(!error) return;
  const errorContainer = QSELECT('#errorLogin');
  errorContainer.innerHTML = error.message;
  errorContainer.classList.remove('hide');
}


//Login process for Google
const googleLogin = async(e)=>{
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider(); //make new google provider
  try{
    await USER.signInWithPopup(provider); //authenticate with google signin popup
      if(googleLogin){
        playLoginSound();
        animationLogin(appContainer,formDiv);
    }
  }
  catch(e){
    showError(e);
  }
}

//Login process for Github
const githubLogin = async(e) =>{
  e.preventDefault();
  const provider = new firebase.auth.GithubAuthProvider(); //make new github provider
  try{
    await USER.signInWithPopup(provider); //authenticate with github signin popup
    if(githubLogin){
      playLoginSound();
      animationLogin(appContainer,formDiv);
  }
  }
  catch(e){
    showError(e);
  }
}

//Login process for Facebook
const facebookLogin = async(e) => {
  e.preventDefault();
  const provider = new firebase.auth.FacebookAuthProvider(); //make new facebook provider
  try{
    await USER.signInWithPopup(provider); //authenticate with facebook signin popup
    if(facebookLogin){
      playLoginSound();
      animationLogin(appContainer,formDiv);
  }
  }
  catch(e){
    showError(e);
  }
}

//Main login function
const login = async(e) =>{
  e.preventDefault();
  
  //Get all data from Form
  const formData = new FormData(QSELECT('form'));
  const email = formData.get('email');
  const password = formData.get('password');

  try{
    await USER.signInWithEmailAndPassword(email,password); //Sign in with credentials
    if(login){
      playLoginSound();
      animationLogin(appContainer,formDiv);
  }
  }
  catch(e){
    showError(e);
    console.log(e);
  }
}

const appLogin = () =>
{
  //This will be executed when the page is loaded
  window.addEventListener('load',initLogin);
  //Create the Form Element with all fields
  createLoginForm(appContainer);
}

appLogin();

const formDiv = QSELECT('#loginContainer');