/**
 * Goal is to convert timestamp to time Ex: HH:MM:SS format
 */
const timestamp = 9462;

// Conver timestamp to Hours
const hours = Math.floor(timestamp / 60 / 60)

// Convert timestamp to minutes
const minutes =  Math.floor(timestamp / 60);
console.log(`${timestamp} = ${minutes} minutes`)

const actualMinutes = minutes - (hours * 60); // 157-120
console.log(`Its ${hours} hours and ${actualMinutes} minutes`)

// Calculating Seconds
const seconds = timestamp % 60;
console.log(`Its ${hours} hours and ${actualMinutes} minutes and ${seconds} seconds`)
console.log(`TIME => ${hours}:${actualMinutes}:${seconds}`)