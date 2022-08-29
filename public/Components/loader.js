/**
 * A Spinning Loader Component
 */

import { div } from "./div.js";

/**
 * @returns A Spinning Loader Component
 */

 export const loader = () =>{
 const spinnerContainer  = div([],'loader');
 return div([spinnerContainer],'loader-container');
 }