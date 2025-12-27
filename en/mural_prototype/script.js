//maple leaf svg 
let mapleLeafSvg = d3.select("#mapleLeaf");

//maple leaf svg node
let mapleLeafSvgNode = d3.select("#mapleLeaf").node();

//and it's d value
let mapleLeafSvgDValue = d3.select("#mapleLeaf path").attr("d");


$(document).ready(() => {

   // For debugging purposes
   // console.log(d3.select("path").attr("d"));           // first path
   // console.log(d3.select("#mapleLeaf path").attr("d"));    // first path in #mySvg
   // console.log(d3.selectAll("path").attr("d"));        // first path (all)
   // console.log(document.querySelector("path").getAttribute("d"));  // vanilla JS

    document.addEventListener("keydown", function(event) {

        event.preventDefault();
        
        //uncomment for debugging purposes
        //console.log("Key:", event.key);
        

        //NOTE: all keys that can interefere with the webpage have been physically removed
        //from the interactive keyboard

        //"Generated from Math.random(), will be refered to as random for the sake of this piece"
        var size = (Math.random() + 1);
        var r_x = Math.floor(Math.random() * 10);
        var r_y = (Math.random() * 10);

        var neg_1 = ((Math.random() * 2) - 1) ;
        var neg_2 = ((Math.random() * 2) - 1) ;

        var neg_or_pos_1 = Math.random() > 0.5 ? 1 : -1;  // example: 1 or -1
        var neg_or_pos_2 = Math.random() > 0.5 ? 1 : -1;
        

        //############ a ##############
        if (event.key === "a" ) { //a pressed
            dot(r_x, r_y, neg_1, neg_2, "blue");
            dot(r_x * 2, r_y * 2, neg_1, neg_2, "blue");
            dot(r_x * 4, r_y * 4, neg_1, neg_2, "blue");
            dot(r_x * 8, r_y * 8, neg_1, neg_2, "blue");
            dot(r_x * r_x, r_y * r_y, neg_1, neg_2, "blue");
            dot(r_x * r_x * 2, r_y * r_y * 2, neg_1, neg_2, "blue");
        }
        //############ a ##############


        //############ b ##############
        if (event.key === "b" ) { //b pressed
            //dot(r_x, r_y, neg_1, neg_2, "red");
            mapleLeafSvg.append("path")
            .attr("d", outline(mapleLeafSvgDValue))
            .attr("fill", generateRandomHexColor)
        }
        //############ b ##############


        //############ c ##############
        if (event.key === "c" ) { //d pressed
            temp_color = generateRandomHexColor()
            for(let i = 0; i < 200; i++) {
                long_rect(r_x + i, r_y + i, neg_1, neg_2, size, temp_color);
            }
        }
        //############ c ##############


        //############ d ##############
        if (event.key === "d" ) { //d pressed
            temp_color = generateRandomHexColor();
            dot(r_x, r_y, neg_1, neg_2, temp_color);
            dot(r_x * 2, r_y * 2, neg_1, neg_2, temp_color);
            dot(r_x * 3, r_y * 3, neg_1, neg_2, temp_color);
            dot(r_x * 4, r_y * 4, neg_1, neg_2, temp_color);
            dot(r_x * 5, r_y * 5, neg_1, neg_2, temp_color);
            dot(r_x * 6, r_y * 6, neg_1, neg_2, temp_color);
        }
        //############ d ##############


        //############ e ##############
        if (event.key === "e" ) { //e pressed
            long_rect(r_x , r_y / 2, neg_1, neg_2, size * 10, "red");
        }
        //############ e ##############



        //############ f ##############
        if (event.key === "f" ) { //f pressed
            droplet(r_x, r_y, neg_1, neg_2, size * 10, "orange");
        }
        //############ f ##############



        //############ g ##############
        if (event.key === "g" ) { //e pressed
            skull(r_x, r_y, neg_1, neg_2, size * 4, generateRandomHexColor);
        }
        //############ g ##############


        //############ h ##############
        if (event.key === "h" ) { //h pressed, makes a poppy
            poppy(r_x, r_y, neg_1, neg_2, generateRandomHexColor())
        }
        //############ h ##############



        //############ i ##############
        if (event.key === "i" ) { //e pressed
            //spawns hearts
            heart(r_x, r_y, neg_1, neg_2, size * 10, generateRandomHexColor);
        }
        //############ i ##############



        //############ j ##############
        if (event.key === "j" ) { //j pressed
            octagon(r_x, r_y, neg_1, neg_2, size * 10, "orange");
        }
        //############ j ##############

        

        //############ k ##############
        if (event.key === "k" ) { //k pressed

            mapleLeafSvg.append("path")
            .attr("d", spewChaos10(mapleLeafSvgDValue))
            .attr("fill", "none")

            mapleLeafSvg.append("path")
            .attr("d", spewChaos10(mapleLeafSvgDValue))
            .attr("fill",  generateRandomHexColor())


            long_rect(r_x, r_y, neg_1, neg_2, 100, generateRandomHexColor());
            circle(r_x, r_y, neg_1, neg_2, generateRandomHexColor())

        }
        //############ k ##############



        //############ l ##############
        if (event.key === "l" ) { //l pressed
            giant_triangle_flipped(r_x - 3000, (r_y * 0.5), neg_1, neg_2, size * 5, generateRandomHexColor());
        }
        //############ l ##############

        

        //############ m ##############
        if (event.key === "m"){ //m pressed
            dollar(r_x, r_y, neg_1, neg_2, size * 50, "#FFD700");
        }
        //############ m ##############


        //############ , ##############
        //puts a dollar sign down in a random color
        if (event.key === ","){ 
           dollar(r_x, r_y, neg_1, neg_2, size * 20, generateRandomHexColor());
        }
        //############ , ##############


        //############ . ##############
        //sprinkles tiny dollars everywhere
        if (event.key === "."){ 
            for(let i = 0; i < 200; i++) {
                dollar(r_x + i, r_y + i, neg_1, neg_2, size*2, "#FFD700");
                dollar(r_x - i, r_y + i, neg_1, neg_2, size*2, "#FFD700");
                dollar(r_x + i, r_y - i, neg_1, neg_2, size*2, "#FFD700");
            }
        }
        //############ . ##############



        //############ n ##############
        //A new red maple leaf
        if (event.key === "n") { //n pressed
            mapleLeafSvg.append("path")
            .attr("d", outline(mapleLeafSvgDValue))
            .attr("fill", "red")
        }
        //############ n ##############



        //############ o ##############
        if (event.key === "o"){
            circle(r_x, r_y, neg_1, neg_2, generateRandomHexColor());
        }
        //############ o ##############



        //############ p ##############
        if (event.key === "p"){
            triangle(r_x, r_y, neg_1, neg_2, size * 10, generateRandomHexColor());
        }
        //############ p ##############


        //############ ; ##############
        if (event.key === ";"){
            giant_triangle(r_x - 3000, (r_y * 0.5), neg_1, neg_2, size * 5, generateRandomHexColor());
        }
        //############ ; ##############


        //############ q ##############
        if (event.key === "q"){
            mapleLeafSvg.append("path")
            .attr("d", spewChaos10(mapleLeafSvgDValue))
            .attr("fill", generateRandomHexColor())
        }
        //############ q ##############


        //############ r ##############
        // flipped black heart
        if (event.key === "r"){ //r pressed
            heart_flipped(r_x, r_y, neg_1, neg_2, size * 5, "black");
        }
        //############ r ##############


        //############ s ##############
        if (event.key === "s" ) { //s pressed
            dot(r_x, r_y, neg_1, neg_2, "#d1b725ff");
            dot(r_x * 2, r_y * 2, neg_1, neg_2, "#FFD700");
            dot(r_x * 3, r_y * 3, neg_1, neg_2, "#d1b725ff");
            dot(r_x * 4, r_y * 4, neg_1, neg_2, "#FFD700");
            dot(r_x * 5, r_y * 5, neg_1, neg_2, "#d1b725ff");
            dot(r_x * 6, r_y * 6, neg_1, neg_2, "yellow");
        }
        //############ s ##############



        //############ t ##############
        //an explosion to the LEFT
        if (event.key === "t" ) { //s pressed
            mapleLeafSvg.append("path")
            .attr("d", abstractMapleRight(mapleLeafSvgDValue, r_x, r_y, neg_1, neg_2))
            .attr("transform", "scale(-1, 1) translate(0, 0)")
            .attr("fill", generateRandomHexColor())
        }
        //############ t ##############



        //############ u ##############
        //an explosion to the RIGHT
        if (event.key === "u"){
            mapleLeafSvg.append("path")
            .attr("d", abstractMapleRight(mapleLeafSvgDValue, r_x, r_y, neg_1, neg_2))
            .attr("fill", generateRandomHexColor())
        }
        //############ u ##############



        //############ v ##############
        //adds an outline of the maple leaf with bold lines
        if (event.key === "v"){
            mapleLeafSvg.append("path")
            .attr("d", outline(mapleLeafSvgDValue))
            .attr("fill", "none")
            .attr("stroke", "#000000ff")
            .attr("stroke-width", "40")  
        }
        //############ v ##############



        //############ w ##############
        if (event.key === "w"){
            long_rect(r_x, r_y, neg_1, neg_2, size * 15, "red");
            long_rect(r_x*4, r_y*4, neg_1, neg_2, size * 15, "#c91701");
            long_rect(r_x, r_y *8, neg_1, neg_2, size * 15, "#df1e2b");
            long_rect(r_x*16, r_y, neg_1, neg_2, size * 15, "#e63e4a");
        }
        //############ w ##############



        //############ x ##############
        if (event.key === "x") { //x pressed
            for(let i = 0; i < 200; i++) {
                long_rect(r_x + i, r_y + i, neg_1, neg_2, size, "yellow");
            }
        }
        //############ x ##############



        //############ y ##############
        //explosion in ALL DIRECTIONS
        if (event.key === "y"){
            mapleLeafSvg.append("path")
            .attr("d", abstractMapleExplosion(mapleLeafSvgDValue, r_x, r_y, neg_1, neg_2))
            .attr("fill", generateRandomHexColor())
        }
        //############ y ##############



        //############ z ##############
        if (event.key === "z" ) { //e pressed
            for(let i = 0; i < 200; i++) {
                long_rect(r_x + i, r_y + i, neg_1, neg_2, size, "blue");
            }
        }
        //############ z ##############


        //############ [ ##############
        if (event.key === "[" ) { //e pressed
            temp_color = generateRandomHexColor()
            perfect_square(r_x, r_y, neg_1, neg_2, generateRandomHexColor );
        }
        //############ [ ##############

 
        //############ ] ##############
        if (event.key === "]" ) { //e pressed
            temp_color = generateRandomHexColor()
            for(let i = 0; i < 5; i++) {
                box(r_x + i * 4, r_y + i * 4, neg_1, neg_2, temp_color);
            }
        }
        //############ ] ##############


        //############ \ ##############
        if (event.key === "\\" ) { 
            for(let i = 0; i < 200; i++) {
                box(r_x + i, r_y * i, neg_1, neg_2, generateRandomHexColor);
            }
        }
        //############ \ ##############

        //############ Space ##############
        if (event.keyCode === 32) { //the event key value itself is a space
            long_rect(r_x, r_y, neg_1, neg_2, size * 20, "white");
        }
        //############ Space ##############


        //############ Backspace #############
        if (event.key === "Backspace") { 
            temp_color = generateRandomHexColor()
            long_rect(r_x, r_y, neg_1, neg_2, size * 10, temp_color);
            high_rect(r_x, r_y, neg_1, neg_2, size * 10, temp_color);
        }
        //############ Backspace ##############


        //############ Enter ##############
        if (event.keyCode === 13) { 
            long_rect(r_x, r_y, neg_1, neg_2, size * 10, "black");
            high_rect(r_x, r_y, neg_1, neg_2, size * 10, "black");
            
        }
        //############ Enter ##############


        //############ + ##############
        if (event.key === "+"){ // + key pressed creates long red rectangles
            high_rect(r_x, r_y, neg_1, neg_2, size * 20, "red");
        }
        //############ + ##############

    if (event.key === "`") {
        mapleLeafSvg.attr("viewBox", "-3030 -1500 7030 3030");
    }

    if (event.key === "1") {
        mapleLeafSvg.attr("viewBox", "-4030 -2000 8030 4030");
    }

    if (event.key === "2") {
        mapleLeafSvg.attr("viewBox", "-6030 -4000 10030 6030");
    }

    if (event.key === "3") {
        mapleLeafSvg.attr("viewBox", "-7030 -5000 11030 7030");
    }      

    if (event.key === "4") {
        mapleLeafSvg.attr("viewBox", "-8030 -6000 12030 8030");
    }

    if (event.key === "5") {
        mapleLeafSvg.attr("viewBox", "-9030 -6500 13030 9030");
    }
    if (event.key === "6") {
        mapleLeafSvg.attr("viewBox", "-10030 -7500 14030 10030");
    }


    if (event.key === "0") {
        //creates a triangle
        path = mapleLeafSvg.append("path")
        .attr("d", "M300 300 L1500 1500 L2700 300 Z")
        .attr("transform", "scale(1, -1)")
        .attr("fill", generateRandomHexColor())
        .attr("stroke", "blue")
    }

    if (event.key === "-") {
        //creates a triangle
        path = mapleLeafSvg.append("path")
        .attr("d", "M300 300 L1500 1500 L2700 300 Z")
        .attr("fill", generateRandomHexColor())
        .attr("stroke", "blue")
    }                              

    //for the keys above the arrows
    if(event.key === "Home"){
        mapleLeafSvg.attr("viewBox", "-4030 -2000 8030 4030");
        mapleLeafSvg.attr("transform", "scale(1, 1)");  // normal width and height
    }

    if(event.key === "Insert"){ //left of home
        //TALL
        mapleLeafSvg.attr("viewBox", "-6030 -5000 11030 7030");
        mapleLeafSvg.attr("transform", "scale(1, 2)");  // normal width, 2x tall
    }

    if(event.key === "PageUp"){ //right of home
        //WIDE
        mapleLeafSvg.attr("viewBox", "-6030 -5000 11030 7030");
        mapleLeafSvg.attr("transform", "scale(2, 1)");  // 2x wide, normal height
    }

    if(event.key === "End"){ //under home
        r1 = clampedRand(); 
        r2 = clampedRand();
        //random transform
        mapleLeafSvg.attr("transform", `scale(${r1}, ${r2}) rotate(${r_y})`); 
        console.log(r1);
        console.log(r2);
    }

    if(event.key === "Delete"){ //under left of home
        let clone = mapleLeafSvg.node().cloneNode(true);

        // Insert BEFORE original SVG (parent does the insert)
        mapleLeafSvg.node().parentNode.insertBefore(clone, mapleLeafSvg.node());

        // NOW select the clone and style it
        d3.select(clone)
            .attr("id", "left_svg")
            .style("position", "absolute")
            .style("right", `${r_x * 100}px`)
            .style("opacity", "0.6");
    }

    if(event.key === "PageDown"){ //under right of home
        let clone = mapleLeafSvg.node().cloneNode(true);

        // Insert BEFORE original SVG (parent does the insert)
        mapleLeafSvg.node().parentNode.insertBefore(clone, mapleLeafSvg.node());

        // NOW select the clone and style it
        d3.select(clone)
            .attr("id", "left_svg")
            .style("position", "absolute")
            .style("left", `${r_x * 100}px`)
            .style("opacity", "0.6");
    }


    if(event.key === "ArrowLeft"){// <
        console.log("left key pressed")
         mapleLeafSvg.attr("transform", "rotate(-90)");
    }

    if(event.key === "ArrowUp"){// ^
         mapleLeafSvg.attr("transform", "rotate(360)");
    }

    if(event.key === "ArrowRight"){// >
        mapleLeafSvg.attr("transform", "rotate(90)");
    }

    if(event.key === "ArrowDown"){// v
         mapleLeafSvg.attr("transform", "rotate(180)");
    }


    if(event.key === "*"){
        temp_color = generateRandomHexColor();
        starburst(temp_color, r_x, r_y);
    }

    if(event.key === "Pause"){
        absoluteColourSwirls();
    }

    if(event.key === "Clear"){
        temp_color = generateRandomHexColor();
        absoluteSwirls(temp_color)
    }

    if(event.key === "F2"){
        window.print();
    }

    if(event.key === "F5"){ //full page reload
        location.reload();
    }

    if(event.key === "F8"){ //deletes the old svg and places a new one down
        d3.select("body").style("background-color", generateRandomHexColor());               
    }

    if(event.key === "F9"){ //removes the svg and creates a new one
        mapleLeafSvg.remove();
        mapleLeafSvg = d3.select("h4")
                        .append("svg")
                        .attr("id", "mapleLeaf")
                        .attr("width", 950)
                        .attr("height", 500)
                        .attr("viewBox", "-4030 -2000 8030 4030");     
    }

    });

});

//################## SVG Drawing Functions ##################


//Creates dots randomly all over the svg
function dot(x_index, y_index, neg_1, neg_2, colour){
        mapleLeafSvg.append("circle")
        .attr("cx", neg_1*(x_index * 90) )
        .attr("cy", neg_2*(y_index * 90) )
        .attr("r", x_index + y_index)
        .style("fill", colour);
}

//Creates circles randomly all over the svg
function circle(x_index, y_index, neg_1, neg_2, colour){
        mapleLeafSvg.append("circle")
        .attr("cx", neg_1*(x_index * 400) )
        .attr("cy", neg_2*(y_index * 400) )
        .attr("r", x_index + y_index * 100)
        .attr("fill", colour)
        .attr("stroke", "none")
}

//Creates a poppy
function poppy(x_index, y_index, neg_1, neg_2, colour){
        mapleLeafSvg.append("circle")
        .attr("cx", neg_1*(x_index * 400) - (20 * x_index))
        .attr("cy", neg_2*(y_index * 400) - (20 * y_index))
        .attr("r", x_index + y_index + 300)
        .attr("fill", "red")

        mapleLeafSvg.append("circle")
        .attr("cx", neg_1*(x_index * 400) - (20 * x_index))
        .attr("cy", neg_2*(y_index * 400) + (20 * y_index))
        .attr("r", x_index + y_index + 300)
        .attr("fill", "red")

         mapleLeafSvg.append("circle")
        .attr("cx", neg_1*(x_index * 400) + (20 * x_index))
        .attr("cy", neg_2*(y_index * 400) + (20 * y_index))
        .attr("r", x_index + y_index + 300)
        .attr("fill", "red")

        mapleLeafSvg.append("circle")
        .attr("cx", neg_1*(x_index * 400) + (20 * x_index))
        .attr("cy", neg_2*(y_index * 400) - (20 * y_index))
        .attr("r", x_index + y_index + 300)
        .attr("fill", "red")

        mapleLeafSvg.append("circle")
        .attr("cx", neg_1*(x_index * 400) )
        .attr("cy", neg_2*(y_index * 400) )
        .attr("r", x_index + y_index + 100)
        .attr("fill", "black")
        .attr("stroke", "none")
}

//Creates boxes 
function box(cx, cy, neg_1, neg_2, colour){
        mapleLeafSvg.append("rect")
        .attr("x", cx * neg_1 * -200)
        .attr("y", cy * neg_2 * -200)
        .attr("width", cx * cx)
        .attr("height", cy * cy)
        .style("fill", colour);
}

//creates an even square
function perfect_square(cx, cy, neg_1, neg_2, colour){
        mapleLeafSvg.append("rect")
        .attr("x", cx * neg_1 * -100)
        .attr("y", cy * neg_2 * -10)
        .attr("width", cx * cx + 600)
        .attr("height", cx * cx + 600)
        .style("fill", colour);
}

//Creates triangles randomly all over the svg
function triangle(cx, cy, neg_1, neg_2, size, colour){
        mapleLeafSvg.append("polygon")
        .attr("points", "100,10 150,190 50,190") 
        .style("fill", colour)
        .attr("transform", `translate(${cx * neg_1}, ${cy * neg_2}) scale(${ size})`)
}

//Creates big empty triangles randomly all over the svg
function big_triangle(cx, cy, neg_1, neg_2, size, colour){
        mapleLeafSvg.append("polygon")
        .attr("points", "1000,100 1500,1900 500,1900") 
        .style("fill", "none")
        .attr("stroke", colour)
        .attr("transform", `translate(${cx * 100 * neg_1}, ${cy * 100 * neg_2}) scale(${ size })`)
}

//Creates big empty triangles randomly all over the svg
function giant_triangle(cx, cy, neg_1, neg_2, size, colour){
        mapleLeafSvg.append("polygon")
        .attr("points", "1000,100 1500,1900 500,1900") 
        .style("fill", colour)
        .attr("transform", `translate(${cx - 4000}, ${cy * 900 * neg_2 - 3000}) scale(${ size })`)
}

function giant_triangle_flipped(cx, cy, neg_1, neg_2, size, colour){
        mapleLeafSvg.append("polygon")
        .attr("points", "1000,100 1500,1900 500,1900") 
        .style("fill", colour)
        .attr("transform", `translate(${cx - 4000}, ${cy * 900 * neg_2 + 3000}) scale(${ size }, -10)`)
}

function octagon(cx, cy, neg_1, neg_2, size, colour){
        mapleLeafSvg.append("polygon")
        .attr("points",  "20,50 50,20 80,20 110,50 110,80 80,110 50,110 20,80")
        .style("fill", colour)
        .attr("transform", `translate(${cx * 100 * neg_1}, ${cy * 100 * neg_2}) scale(${ size })`)
}

function dollar(cx, cy, neg_1, neg_2, size, colour){
        console.log("dollar called")
        mapleLeafSvg.append("g")
        .attr("transform", `translate(${cx * 100 * neg_1}, ${cy * 100 * neg_2}) scale(${ size })`)
        .append("path")
        .attr("d", "M6.21606 15L6.10495 16H8.11726L8.22837 15H10.003C12.2105 15 14 13.2105 14 11.003C14 9.12963 12.6989 7.5076 10.8701 7.1012L9.14852 6.71864L9.45059 4H13V1H9.78393L9.89504 0H7.88273L7.77162 1H5.99699C3.78951 1 2 2.78951 2 4.99699C2 6.87037 3.30115 8.4924 5.12992 8.8988L6.85147 9.28136L6.54939 12H3V15H6.21606ZM8.5617 12H10.003C10.5536 12 11 11.5536 11 11.003C11 10.5357 10.6754 10.1311 10.2193 10.0298L8.81528 9.71776L8.5617 12ZM7.1847 6.28223L7.43828 4H5.99699C5.44637 4 5 4.44637 5 4.99699C5 5.46427 5.32455 5.86887 5.78071 5.97023L7.1847 6.28223Z")
        .attr("fill", colour)  // gold dollar color
}

//flipped heart shape
function heart_flipped(cx, cy, neg_1, neg_2, size, colour) {
    mapleLeafSvg.append("g")
    
     .attr("transform", `translate(${cx * 100 * neg_1}, ${cy * 100 * neg_2}) scale(${ size })`)
     .append("path")

     //flipped
     .attr("d", "M 65 94 C 59 104 49 111 37 111 20 111 7 98 7 81 7 48 25 43 65 5 105 43 123 48 123 81 123 98 110 111 93 111 81 111 71 104 65 94 Z")

     .attr("fill", colour);
}

//heart shape
function heart(cx, cy, neg_1, neg_2, size, colour) {
    mapleLeafSvg.append("g")
     .attr("transform", `translate(${cx * 100 * neg_1}, ${cy * 100 * neg_2}) scale(${ size })`)
     .append("path")

     //original
     .attr("d", "M 65 29 C 59 19 49 12 37 12 20 12 7 25 7 42 7 75 25 80 65 118 105 80 123 75 123 42 123 25 110 12 93 12 81 12 71 19 65 29 Z")
     .attr("fill", colour);
}

//svg skull shape
function skull(cx, cy, neg_1, neg_2, size, colour){
    mapleLeafSvg.append("g")
     .attr("transform", `translate(${cx * 50 * neg_1}, ${cy * 50 * neg_2}) scale(${ size })`)
     .append("path")
     .attr("d", "m 88 ,40.328288 c -11.493113,6.101916 -16.265068,20.392528 -14.24903,32.728715 0.469157,6.89517 4.714473,12.747806 5.957244,19.457565 -0.783804,8.588672 -12.197491,11.539252 -12.152116,20.430352 0.255089,5.52923 7.043334,6.21773 10.900165,3.86869 4.431726,-5.14475 12.243433,-0.42338 11.081665,5.9321 -0.941877,6.54232 -3.331767,13.51922 -0.964906,20.04096 3.450335,6.44178 8.69542,-1.67456 11.82225,-4.15996 1.68397,4.47742 7.53822,5.4864 10.38834,2.68351 2.65543,1.751 8.64101,4.16796 8.44836,-1.30155 4.105,-3.45434 11.98734,7.53385 13.07869,-1.8659 0.91966,-7.05737 -5.57133,-13.45142 -2.77227,-20.49019 4.1211,-6.50738 10.61285,1.63249 15.774,1.64355 7.90195,-0.84025 7.5463,-11.30073 1.22978,-14.32728 -5.42809,-3.27037 -5.94133,-10.002659 -3.72505,-15.379375 2.45865,-7.181533 6.60863,-14.25724 5.45562,-22.141213 C 147.81569,52.906123 136.67109,39.024315 121.9056,36.957907 110.72377,34.675593 99.008372,36.330879 88.411658,40.328288 Z M 98.5144,75.452242 c 8.04606,0.714278 11.93624,11.006403 8.46781,17.691105 -1.96506,6.807082 -12.63016,9.374783 -16.708265,3.116756 C 84.334807,89.211465 89.234021,76.380295 98.5144,75.452242 Z m 10.80968,26.356018 c 7.04493,0.13478 7.75811,12.21877 0.99862,13.54499 -7.30775,-0.15496 -7.66896,-11.98275 -0.99862,-13.54499 z m 19.85803,-2.399378 c -8.57809,2.642548 -16.47255,-7.20218 -14.38797,-15.299702 1.17496,-6.36679 9.57847,-11.064759 15.02058,-6.53751 6.97108,4.863016 8.33767,18.245099 -0.63261,21.837212 z")
     .attr("fill", colour);
}

//droplet shape
function droplet(cx, cy, neg_1, neg_2, size, colour){
    mapleLeafSvg.append("g")
     .attr("transform", `translate(${cx * 50 * neg_1}, ${cy * 50 * neg_2}) scale(${ size/10 })`)
     .append("path")
     .attr("d", "M316.099,85.846c-24.586-35.32-45.821-65.827-50.974-80.433c-1.139-3.215-4.145-5.372-7.554-5.414 c-3.15,0.096-6.476,2.044-7.68,5.227c-5.244,13.812-25.405,42.765-48.752,76.314C147.671,158.326,74.447,263.494,74.447,331.917 c0,100.926,82.103,183.034,183.029,183.034s183.029-82.108,183.029-183.034C440.505,264.6,368.599,161.285,316.099,85.846z")
     .attr("fill", colour);
}

function starburst(colour, cx, cy){
   var centerX = cx;
   var centerY = cy;
   var maxLength = 5000;

    for(let i = 0; i < 360; i += 2) {  // 180 lines, every 2 degrees
        let angle = (i * Math.PI) / 180;  // radians
        let endX = centerX + maxLength * Math.cos(angle);
        let endY = centerY + maxLength * Math.sin(angle);
  
        mapleLeafSvg.append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", endX)
        .attr("y2", endY)
        .attr("stroke", colour)
        .attr("stroke-width", clampedRand() * 8 + 2)
        .attr("opacity", 0.7);
    }
}


//###############################################################################
//################ FUNCTIONS RESPONSIBLE FOR LARGE MODIFICATIONS ################
//###############################################################################

function long_rect(cx, cy, neg_1, neg_2, size, colour){
    mapleLeafSvg.append("rect")
      .attr("x", cx * neg_1 * -1000)
      .attr("y", cy * neg_2 * -100)
      .attr("width", 10000)
      .attr("height", (size * 6) )
      .style("fill", colour);
}

function high_rect(cx, cy, neg_1, neg_2, size, colour){
    mapleLeafSvg.append("rect")
      .attr("x", cx + 1000 * neg_1 * 3)
      .attr("y", cy + 100 * neg_2 * 30)
      .attr("width", (size * 6) )
      .attr("height", 5000 )
      .style("fill", colour);
}

//returns the outline
function outline(originalD) {
    return originalD;                           
}

//###############################################################################
//################ FUNCTIONS WITH STRANGE BEHAVIOUR ################
//###############################################################################

//jiggles coordinates, written by AI, uses regex, horribly corrupted, nightmarish maybe
function wiggleD(dString, amount = 2) {
  const numbers = dString.match(/-?\d+\.?\d*/g) || [];
  let result = dString;
  
  numbers.forEach(num => {
    const n = parseFloat(num);
    const wiggled = n + (Math.random() - 0.5) * amount;
    result = result.replace(num, wiggled.toFixed(1));
  });
  
  return result;
}


//definitely not corrupted, an AI assured me of it
function extendPath(originalD, extras = 3) {
  // Append squiggles, loops, spikes to the end
  const extensions = [
    " Q 2,18 5,15",    // curve back
    " L 3,13 M 12,3", // line + move
    " A 2,2 0,1,0 14,2", // arc
    " Z"              // close if needed
  ];
  
  let result = originalD;
  for (let i = 0; i < extras; i++) {
    result += extensions[Math.floor(Math.random() * extensions.length)];
  }
  return result;
}



function abstractMapleRight(originalD, c_x, c_y, neg_1, neg_2) {
  return originalD + 
` M${c_x * 250 * neg_2},${c_y * 250 * neg_2} Q50,${c_x * 300 *neg_1} 80,${c_y * 20 * neg_2} T120,290 Q150,320 180,2800 T220,310` +
` M30,270 L60,320 L90,290 L1200,340 L150,300 L180,350 L210,310 Z` +
` M40,${c_x * 300} Q70,380 100,${c_y * 500 * neg_1} T140,390 Q170,420 200,380 T2400,410` +
` A5,5 0,1,1 250,400 A3,3 0,1,0 260,390 L270,420 Q280,4500 290,430` +
` M80,440 Q110,5000 1400,460 T180,510 Q210,550 240,500 T280,${c_y * 500 * neg_1}` +
` L260,${c_y * 500} L290,600 L320,570 L350,620 L380,580 Z` +
` M100,${c_y * 620 * neg_2} Q130,${c_y * 600 * neg_2} 160,${c_y * 640 * neg_2} T200,${c_x * c_y} Q230,740 260,690 T300,740` +
` A10,10 0,1,1 320,${c_y * 540} Q340,780 360,750 L380,${c_y * 900 * neg_2} Z` +
` M120,${c_y * 800 * neg_2} Q150,860 180,820 T220,${c_y * 870 * neg_2} Q250,920 280,870 T320,920` +
` L340,940 L370,980 L4000,950 Z M140,960 Q170,1020 200,980 T240,1030` +
` Q270,1080 300,1030 Z M160,1040 Q190,1100 220,10060 T260,1110 Z`;                           
}

function abstractMapleExplosion(originalD, c_x, c_y, neg_1, neg_2) {
  return originalD + 
` M250,250 Q${c_x * 3000 *neg_1},50 ${c_y * 20 * neg_2},80 T120,290 Q150,320 180,2800 T220,310` +
` M30,270 L60,320 L90,${c_y * 2900 * neg_1} L1200,340 L150,300 L${c_y * 550 * neg_1},350 L210,310 Z` +
` M${c_x * 3000},40 Q70,380 ${c_y * 500 * neg_1},100 T140,${c_x * 3000 * neg_1} Q170,${c_y * 400 * neg_1} 200,380 T2400,410` +
` A5,5 0,1,1 250,${c_x * 400 * neg_1} A3,3 0,1,0 260,${c_y * 3000 * neg_2} L270,420 Q280,4500 290,430` +
` M80,440 Q110,${c_x * 500 * neg_1} 1400,460 T180,510 Q210,${c_y * 550 * neg_1} 240,500 T${c_y * 500 * neg_1},280` +
` L${c_y * 500},260 L290,600 L320,570 L350,620 L380,580 Z` +
` M${c_y * 620 * neg_2},100 Q${c_y * 600 * neg_2},130 ${c_y * 640 * neg_2},160 T${c_x * c_y},200 Q230,740 260,690 T300,740` +
` A10,10 0,1,1 320,${c_y * 540} Q340,780 360,750 L380,${c_y * 900 * neg_2} Z` +
` M${c_y * 800 * neg_2},120 Q150,860 180,820 T${c_y * 870 * neg_2},220 Q250,920 280,870 T320,920` +
` L340,940 L370,980 L4000,${c_x * 900 * neg_1} Z M140,960 Q170,1020 200,980 T240,1030` +
` Q${c_y * 200 * neg_1},1080 300,${c_x * 100 * neg_1} Z M160,1040 Q190,1100 220,10060 T260,1110 Z`;                           
}


//this should be interesting
function spewChaos(baseD) {
  const placeholders = [
    "M{r1},{y1} Q{r2},{y2} {r3},{y3} T{r4},{y4}",
    "M{r5},{y5} L{r6},{y6} L{r7},{y7} Z",
    "Q{r8},{y8} {r9},{y9} T{r10},{y10}",
    "A{r11},{r12} 0,1,{rand} {r13},{y11}"
  ];
  
  let result = baseD;
  for (let i = 0; i < 12; i++) {
    const template = placeholders[Math.floor(Math.random() * placeholders.length)];
    result += template
      .replace(/{r\d+}/g, () => (100 + Math.random() * 300).toFixed(0))
      .replace(/{y\d+}/g, () => (200 + Math.random() * 800).toFixed(0))
      .replace(/{rand}/g, Math.round(Math.random()));
  }
  return result;
}


//this should be interesting x10
function spewChaos10(baseD) {
  const placeholders = [
    "M{r1},{y1} Q{r2},{y2} {r3},{y3} T{r4},{y4}",
    "M{r5},{y5} L{r6},{y6} L{r7},{y7} Z",
    "Q{r8},{y8} {r9},{y9} T{r10},{y10}",
    "A{r11},{r12} 0,1,{rand} {r13},{y11}"
  ];
  
  let result = baseD;
  for (let i = 0; i < 120; i++) {
    const template = placeholders[Math.floor(Math.random() * placeholders.length)];
    result += template
      .replace(/{r\d+}/g, () => (1000 + Math.random() * 3000).toFixed(0))
      .replace(/{y\d+}/g, () => (2000 + Math.random() * 8000).toFixed(0))
      .replace(/{rand}/g, Math.round(Math.random()));
  }
  return result;
}



//creates swirls!
function absoluteSwirls(colour){
    const centerX = 400, centerY = 300;
    for(let i = 0; i < 360; i += 3) {
        const angle = (i * Math.PI) / 180;
        const len = 5000 + Math.random() * 100;
        const endX = centerX + len * Math.cos(angle);
        const endY = centerY + len * Math.sin(angle);
  
        // Two control points for extreme curve
        const control1Offset = 600 + Math.random() * 80;
        const control2Offset = 900 + Math.random() * 100;
  
        const perpAngle1 = angle + Math.PI / 2 + (Math.random() - 0.5);
        const perpAngle2 = angle - Math.PI / 2 + (Math.random() - 0.5);
  
        const control1X = centerX + control1Offset * Math.cos(perpAngle1);
        const control1Y = centerY + control1Offset * Math.sin(perpAngle1);
        const control2X = centerX + control2Offset * Math.cos(perpAngle2);
        const control2Y = centerY + control2Offset * Math.sin(perpAngle2);
  
        mapleLeafSvg.append("path")
        .attr("d", `M ${centerX} ${centerY} C ${control1X} ${control1Y} ${control2X} ${control2Y} ${endX} ${endY}`)
        .attr("fill", "none")
        .attr("stroke", colour)
        .attr("stroke-width", 2 + Math.random() * 6);
    }
}

function absoluteColourSwirls() {
    const centerX = 400 * Math.random(), centerY = 300 * Math.random();
    for(let i = 0; i < 360; i += 2) {
        const angle = (i *                                                                                                                                                                                                                                                                                                                                                                                                                                                            Math.PI) / 180;
        const len = 5000 + Math.random() * 100;
        const wobbleX = (Math.random() - 0.5) * 100;  // ±50px CRAZY
        const wobbleY = (Math.random() - 0.5) * 100;
  
        mapleLeafSvg.append("line")
        .attr("x1", centerX + (Math.random()-0.5)*30)  // center wobbles too
        .attr("y1", centerY + (Math.random()-0.5)*30)
        .attr("x2", centerX + len * Math.cos(angle) + wobbleX)
        .attr("y2", centerY + len * Math.sin(angle) + wobbleY)
        .attr("stroke-width", 2 + Math.random() * 16)  // varying boldness
        .attr("stroke", `hsl(${Math.random()*360}, 70%, 50%)`);  // random colors
    }
}



//######## UTILITY FUNCTIONS ########

function generateRandomHexColor() {
  // Generate a random number up to 0xFFFFFF (16777215)
  // Convert it to a hexadecimal string
  let color = Math.floor(Math.random() * 16777215).toString(16);

  // Pad the string with leading zeros if it's less than 6 digits long
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}

//####### So that the rotation isn't too small #########
function clampedRand() {
  while(true) {
    let r = Math.random() * 2 - 1;  // -1 to 1
    if (Math.abs(r) >= 0.1) return r;
  }
}

//####### Creates a fading effect #########
function toggleOverlay() {
  d3.select("#duplicate").style("opacity", 
    d3.select("#duplicate").style("opacity") === "1.0" ? 0.3 : 1.0
  );
}


