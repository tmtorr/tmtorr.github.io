//array of preloaded images
const imagesToPreload = [
    "images/leaf-north-america.jpg",
    "images/leaf-south-america.jpg",
    "images/leaf-europe.jpg",
    "images/leaf-africa.jpg",
    "images/leaf-asia.jpg",
    "images/leaf-oceania.jpg",
    "images/leaf-antarctica.jpg"
];

$(document).ready(() => {

    const imageCache = [];
        //loops through all images and pushes them to cache
        //This is done so there is no lag, and so they're preloaded
        imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
        imageCache.push(img);
    });


    // Sets up event handlers for buttons
    $('#northAmericaButton').click(() => { leafColour(0) });

    $('#southAmericaButton').click(() => { leafColour(1) });

    $('#europeButton').click(() => { leafColour(2) });

    $('#africaButton').click(() => { leafColour(3) });

    $('#asiaButton').click(() => { leafColour(4) });

    $('#oceaniaButton').click(() => { leafColour(5) });

    $('#antarcticaButton').click(() => { leafColour(6) });

});

function leafColour(indexNumber){
    document.getElementById('mapleLeaf').innerHTML = '<img src="' + imagesToPreload[indexNumber] + '" alt="Leaf">'
}


