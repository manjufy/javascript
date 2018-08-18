// Exploring for-loop

for(var i= 0; i < 2; i++) {
   setTimeout(() => console.log(i)) // whats the output
}

for(let i= 0; i < 2; i++) { 
  setTimeout(() => console.log(i)) // whats the output
}


for(let i= 0; i < 2; i++) { 
  setTimeout(() => console.log(i)) // whats the output
  i++
}

for(const i= 0; i < 2; i++) { 
  setTimeout(() => console.log(i)) // whats the output
  i++
}


for(
  let i = (setTimeout(() => console.log(i)), 0);
  i < 2;
  i++
) {
  i++
}