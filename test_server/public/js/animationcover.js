//Cover animation
const cover = document.querySelectorAll('#cover path');

for(let c=0; c<cover.length; c++){
    console.log(`Letter $[c] is ${cover[c].getTotalLength()}`);
}