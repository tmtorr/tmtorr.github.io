
const nums = ['&nbsp1&nbsp', '0&nbsp']; //nums that will randomly fill the string
const lengthOfString = 30; //length of binary string
const msTimeLoop = 200; //speed of animation
//  ^      
//NOTE on &nbsp
//my way of perserving spacing without it getting cleaned
//it needs the spacing between 1 and 0 for visual fitting
//e.g. &nbsp represents a space


$(document).ready(() => {
    setInterval(updateBinary, msTimeLoop, 1)
    setInterval(updateBinary, msTimeLoop, 2)
    setInterval(updateBinary, msTimeLoop, 3)
    setInterval(updateBinary, msTimeLoop, 4)
});

//updates the binary every msTimeLoop
function updateBinary(rowNum){
    let newBinaryArr = [];
    newBinaryArr = Array.from( {length: lengthOfString}, 
                                () => nums[Math.floor(Math.random() * nums.length)]
    );

    document.getElementById('binary' + rowNum).innerHTML = '<p>' + newBinaryArr.join('') + '</p>';
}



