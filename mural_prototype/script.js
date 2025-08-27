$(document).ready(() => {

    // Sets up event handlers for buttons
    $('#northAmericaButton').click(() => {
        northAmericaColour();
        console.log("Button Click!");
    });

    $('#southAmericaButton').click(() => {
        southAmericaColour();
    });

    $('#europeButton').click(() => {
        europeColour();
    });

    $('#africaButton').click(() => {
        africaColour();
    });

    $('#asiaButton').click(() => {
        asiaColour();
    });

    $('#oceaniaButton').click(() => {
        oceaniaColour();
    });

    $('#antarcticaButton').click(() => {
        antarcticaColour();
    });


});

//TODO replace with cleaner more elegant DOM methods
function northAmericaColour(){
    document.getElementById('mapleLeaf').innerHTML = '<img src="images/leaf-north-america.jpg" alt="North America">';
}

function southAmericaColour(){
    document.getElementById('mapleLeaf').innerHTML = '<img src="images/leaf-south-america.jpg" alt="South America">';
}

function europeColour(){
    document.getElementById('mapleLeaf').innerHTML = '<img src="images/leaf-europe.jpg" alt="Europe">';
}

function africaColour(){
    document.getElementById('mapleLeaf').innerHTML = '<img src="images/leaf-africa.jpg" alt="Africa">';
}

function asiaColour(){
    document.getElementById('mapleLeaf').innerHTML = '<img src="images/leaf-asia.jpg" alt="Asia">';
}

function oceaniaColour(){
    document.getElementById('mapleLeaf').innerHTML = '<img src="images/leaf-oceania.jpg" alt="Oceania">';
}

function antarcticaColour(){
    document.getElementById('mapleLeaf').innerHTML = '<img src="images/leaf-antarctica.jpg" alt="Antarctica">';
}

