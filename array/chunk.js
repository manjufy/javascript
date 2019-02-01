/**
 * Chuck array with N number
 */

 const items = [1,2,3,4,5,6,7,8,9,10];
 const chunk = 3;

 for(i=0, j=items.length; i < j; i+=chunk) {
     console.log(items.slice(i, i+chunk))
 }