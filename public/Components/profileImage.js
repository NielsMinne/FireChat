/**
 * A Profile Image Component
 */

/**
 * 
 * @param {*} photoUrl Insert the URL of the photo (path or URL)
 * @param {*} className Give 1 or more classnames
 * @returns A profile picture linked to user's account
 */

export const profileImage = (photoUrl,className) =>{
    const image = document.createElement('img');
    if(photoUrl) image.src = photoUrl; // executes only if there is a valid photoUrl
    else image.src = '../assets/images/profile-placeholder.png'; //if no photoUrl is found, a placeholder picture is set
    image.className = className;
    return image;
}