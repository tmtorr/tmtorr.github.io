//maple leaf svg 
const mapleLeafSvg = d3.select("#mapleLeaf");

//maple leaf svg node
const mapleLeafSvgNode = d3.select("#mapleLeaf").node();

//and it's d value
const mapleLeafSvgDValue = d3.select("#mapleLeaf path").attr("d");


$(document).ready(() => {

    console.log(d3.select("path").attr("d"));           // first path
    console.log(d3.select("#mapleLeaf path").attr("d"));    // first path in #mySvg
    console.log(d3.selectAll("path").attr("d"));        // first path (all)
    console.log(document.querySelector("path").getAttribute("d"));  // vanilla JS

    document.addEventListener("keypress", function(event) {

        //NOTE: all keys that can interefere with the webpage have been physically removed
        //from the interactive keyboard

        //"Generated from Math.random(), will be refered to as random for the sake of this piece"
        var size = (Math.random());
        var r_x = Math.floor(Math.random() * 10);
        var r_y = (Math.random() * 10);

        var neg_1 = ((Math.random() * 2) - 1) ;
        var neg_2 = ((Math.random() * 2) - 1) ;

        //var neg_1 = Math.random() > 0.5 ? 1 : -1;  // example: 1 or -1
        //var neg_2 = Math.random() > 0.5 ? 1 : -1;
        

        //############ a ##############
        if (event.key === "a" ) { //a pressed
            dot(r_x, r_y, neg_1, neg_2, "blue");
        }
        //############ a ##############


        //############ b ##############
        if (event.key === "b" ) { //b pressed
            dot(r_x, r_y, neg_1, neg_2, "red");
        }
        //############ b ##############


        //############ c ##############
        if (event.key === "c" ) { //d pressed
            triangle(r_x, r_y, neg_1, neg_2, size, "yellow");
        }
        //############ c ##############


        //############ d ##############
        if (event.key === "d" ) { //d pressed
            dot(r_x, r_y, neg_1, neg_2, "yellow");
        }
        //############ d ##############


        //############ e ##############
        if (event.key === "e" ) { //e pressed
            heart_flipped(r_x, r_y, neg_1, neg_2, size, "yellow");
        }
        //############ e ##############



        //############ f ##############
        //Little orange flame
        if (event.key === "f" ) { //f pressed
            droplet(r_x, r_y, neg_1, neg_2, size, "orange");
        }
        //############ f ##############



        //############ g ##############
        if (event.key === "g" ) { //e pressed
            skull(r_x, r_y, neg_1, neg_2, size, "blue");
        }
        //############ g ##############


        //############ h ##############
        //with glowing hearts
        if (event.key === "h" ) { //e pressed
            heart(r_x, r_y, neg_1, neg_2, size, "red");
        }
        //############ h ##############



        //############ i ##############
        if (event.key === "i" ) { //e pressed
            heart(r_x, r_y, neg_1, neg_2, size, "red");
        }
        //############ i ##############



        //############ j ##############
        //junctions...
        //stop sign at a junction
        if (event.key === "j" ) { //j pressed
            octagon(r_x, r_y, neg_1, neg_2, size, "orange");
        }
        //############ j ##############

        

        //############ k ##############
        //Kan 'k' stand for Kaos?
        //O.K!
        if (event.key === "k" ) { //k pressed

            mapleLeafSvg.append("path")
            .attr("d", spewChaos10(mapleLeafSvgDValue))
            .attr("fill", "none")
            .attr("stroke", generateRandomHexColor())

            mapleLeafSvg.append("path")
            .attr("d", spewChaos10(mapleLeafSvgDValue))
            .attr("fill",  generateRandomHexColor())
            .attr("stroke", generateRandomHexColor())

            long_rect(r_x, r_y, neg_1, neg_2, 100, generateRandomHexColor());
            circle(r_x, r_y, neg_1, neg_2, generateRandomHexColor())

        }
        //############ k ##############



        //############ l ##############
        //long yellow lines
        if (event.key === "l" ) { //e pressed
            long_rect(r_x, r_y, neg_1, neg_2, size, "yellow");
        }
        //############ l ##############

        

        //############ m ##############
        //it makes the world go round
        if (event.key === "m"){ //m pressed
            dollar(r_x, r_y, neg_1, neg_2, size * 5, "#FFD700");
        }
        //############ m ##############



        //############ n ##############
        //MAPLE is reborn
        if (event.key === "n") { //x pressed
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
            triangle(r_x, r_y, neg_1, neg_2, size*100, generateRandomHexColor());
        }
        //############ p ##############



        //############ q ##############
        //QAOS
        if (event.key === "q"){
            mapleLeafSvg.append("path")
            .attr("d", spewChaos10(mapleLeafSvgDValue))
            .attr("fill", generateRandomHexColor())
            .attr("stroke", "red")
        }
        //############ q ##############


        //############ r ##############
        //Beauty in corruption?

        if (event.key === "r"){ //r pressed
            mapleLeafSvg.append("path")
            .attr("d", wiggleD(mapleLeafSvgDValue, 30));
        }
        //############ r ##############


        //############ s ##############

        if (event.key === "s" ) { //s pressed
            heart_flipped(r_x, r_y, neg_1, neg_2, size, "black");
        }
        //############ s ##############



        //############ t ##############
        //wide lines 
        //drawn
        //
        if (event.key === "t" ) { //s pressed
            long_rect(r_x, r_y, neg_1, neg_2, size * 10, "red");
        }
        //############ t ##############



        //############ u ##############
        if (event.key === "u"){
            mapleLeafSvg.append("path")
            .attr("d", spewChaos10(mapleLeafSvgDValue))
            .attr("fill", "none")
            .attr("stroke", "green")
        }
        //############ u ##############



        //############ v ##############
        if (event.key === "v"){
            path = mapleLeafSvg.append("path")
            .attr("d", "M300 300 L1500 1500 L2700 300 Z")
            .attr("fill", "none")
            .attr("stroke", "blue")

            bumpNthCoord(path, 1000);
        }
        //############ v ##############



        //############ w ##############
        if (event.key === "w"){
            mapleLeafSvg.append("path")
            .attr("d", spewChaos10(mapleLeafSvgDValue))
            .attr("fill", "none")
            .attr("stroke", generateRandomHexColor())
        }
        //############ w ##############



        //############ x ##############
        //x-ray
        //one two three
        //each rib a little
        //piece of me
        if (event.key === "x") { //x pressed
            mapleLeafSvg.append("path")
            .attr("d", outline(mapleLeafSvgDValue))
            .attr("fill", "none")
            .attr("stroke", "black")
        }
        //############ x ##############



        //############ y ##############
        if (event.key === "y"){
            mapleLeafSvg.append("path")
            .attr("d", veryExtendedPath(mapleLeafSvgDValue))
            .attr("fill", "none")
            .attr("stroke", "#8B0000")
        }
        //############ y ##############



        //############ z ##############
        //shadows?
        if (event.key === "z"){
            mapleLeafSvg.append("path")
            .attr("d", extendPath(mapleLeafSvgDValue))
            .attr("fill", "none")
            .attr("stroke", "red")
        }
        //############ z ##############



        //############ Space ##############
    
        //Need some space?
        if (event.keyCode === 32) { //the event key value itself is a space
            long_rect(r_x, r_y, neg_1, neg_2, size * 20, "white");
            event.preventDefault(); //needed to prevent default behaviour 
        }
        //############ Space ##############


        //############ Backspace #############
        //NOT PICKING UP the BACKSPACE for whatever reason
        if (event.keyCode === 8) { //the event key value itself is a space
            long_rect(r_x, r_y, neg_1, neg_2, size * 20, "white");
        }
        //############ Backspace ##############


        //############ Enter ##############
        if (event.keyCode === 13) { //enter pressed
            long_rect(r_x, r_y, neg_1, neg_2, size * 2, "black");
            high_rect(r_x, r_y, neg_1, neg_2, size * 2, "black");
        }
        //############ Enter ##############


        //############ + ##############
        if (event.key === "+"){ // + key pressed creates long red rectangles
            high_rect(r_x, r_y, neg_1, neg_2, size * 20, "red");
        }
        //############ + ##############


    if (event.key === "`") {
        mapleLeafSvg.attr("viewBox", "-4030 -2000 8030 4030");
    }


    if (event.key === "1") {
        mapleLeafSvg.attr("viewBox", "-6030 -4000 10030 6030");
    }
    if (event.key === "2") {
        mapleLeafSvg.attr("viewBox", "-5030 -3000 9030 5030");
    }      
    if (event.key === "3") {
        mapleLeafSvg.attr("viewBox", "-4030 -2000 8030 4030");
    }
    if (event.key === "4") {
        mapleLeafSvg.attr("viewBox", "-3030 -1500 7030 3030");
    }
    if (event.key === "5") {
        mapleLeafSvg.attr("viewBox", "-2030 -1000 7030 3030");
    }
    if (event.key === "6") {
        mapleLeafSvg.attr("viewBox", "-1030 -500 4030 2030");
    }
    if (event.key === "7") {
        mapleLeafSvg.attr("viewBox", "-530 -250 2030 1030");
    }
    if (event.key === "8") {
        mapleLeafSvg.attr("viewBox", "-230 -100 1030 530");
    }
    if (event.key === "9") {
        mapleLeafSvg.attr("viewBox", "-130 -50 530 230");
    }
    if (event.key === "0") {
        mapleLeafSvg.attr("viewBox", "-80 -25 330 130");
    }
    if (event.key === "-") {
        mapleLeafSvg.attr("viewBox", "-30 -10 130 80");
    }











        //If CAPS LOCKS is pressed all colours switched to white
        //check if 
//#####################################################################################################
        //Below are CAPITALIZED inputs, detected if capslocks is on

        //White will match with the background, like an eraser

        
        if (event.key === "A" || event.key === "B" || event.key === "C" || event.key === "D") { //A, B, C, D pressed
            dot(r_x, r_y, neg_1, neg_2, "white");
        }

        if (event.key === "E" || event.key === "S") { //E or S pressed
            heart_flipped(r_x, r_y, neg_1, neg_2, size, "white");
        }

        if (event.key === "G") { 
            skull(r_x, r_y, neg_1, neg_2, size, "white");
        }

        if (event.key === "H") { 
            heart(r_x, r_y, neg_1, neg_2, size, "white");
        }

        if (event.key === "L") { 
            long_rect(r_x, r_y, neg_1, neg_2, size, "white");
        }

    });

});







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


//Creates squares randomly all over the svg
function block(x_index, y_index, neg_1, neg_2, colour){
        mapleLeafSvg.append("square")
        .attr("cx", neg_1*(x_index * 90) )
        .attr("cy", neg_2*(y_index * 90) )
        .attr("r", x_index + y_index)
        .style("fill", colour);
}

//Creates triangles randomly all over the svg
function triangle(cx, cy, neg_1, neg_2, size, colour){
        mapleLeafSvg.append("polygon")
        .attr("points", "100,10 150,190 50,190") 
        .style("fill", colour)
        .attr("transform", `translate(${cx * 100 * neg_1}, ${cy * 100 * neg_2}) scale(${ size })`)
}

//Creates big empty triangles randomly all over the svg
function big_triangle(cx, cy, neg_1, neg_2, size, colour){
        mapleLeafSvg.append("polygon")
        .attr("points", "1000,100 1500,1900 500,1900") 
        .style("fill", "none")
        .attr("stroke", colour)
        .attr("transform", `translate(${cx * 100 * neg_1}, ${cy * 100 * neg_2}) scale(${ size })`)
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
     .attr("transform", `translate(${cx * 100 * neg_1}, ${cy * 100 * neg_2}) scale(${ size })`)
     .append("path")
     .attr("d", "m 88 ,40.328288 c -11.493113,6.101916 -16.265068,20.392528 -14.24903,32.728715 0.469157,6.89517 4.714473,12.747806 5.957244,19.457565 -0.783804,8.588672 -12.197491,11.539252 -12.152116,20.430352 0.255089,5.52923 7.043334,6.21773 10.900165,3.86869 4.431726,-5.14475 12.243433,-0.42338 11.081665,5.9321 -0.941877,6.54232 -3.331767,13.51922 -0.964906,20.04096 3.450335,6.44178 8.69542,-1.67456 11.82225,-4.15996 1.68397,4.47742 7.53822,5.4864 10.38834,2.68351 2.65543,1.751 8.64101,4.16796 8.44836,-1.30155 4.105,-3.45434 11.98734,7.53385 13.07869,-1.8659 0.91966,-7.05737 -5.57133,-13.45142 -2.77227,-20.49019 4.1211,-6.50738 10.61285,1.63249 15.774,1.64355 7.90195,-0.84025 7.5463,-11.30073 1.22978,-14.32728 -5.42809,-3.27037 -5.94133,-10.002659 -3.72505,-15.379375 2.45865,-7.181533 6.60863,-14.25724 5.45562,-22.141213 C 147.81569,52.906123 136.67109,39.024315 121.9056,36.957907 110.72377,34.675593 99.008372,36.330879 88.411658,40.328288 Z M 98.5144,75.452242 c 8.04606,0.714278 11.93624,11.006403 8.46781,17.691105 -1.96506,6.807082 -12.63016,9.374783 -16.708265,3.116756 C 84.334807,89.211465 89.234021,76.380295 98.5144,75.452242 Z m 10.80968,26.356018 c 7.04493,0.13478 7.75811,12.21877 0.99862,13.54499 -7.30775,-0.15496 -7.66896,-11.98275 -0.99862,-13.54499 z m 19.85803,-2.399378 c -8.57809,2.642548 -16.47255,-7.20218 -14.38797,-15.299702 1.17496,-6.36679 9.57847,-11.064759 15.02058,-6.53751 6.97108,4.863016 8.33767,18.245099 -0.63261,21.837212 z")
     .attr("fill", colour);
}

//droplet shape
function droplet(cx, cy, neg_1, neg_2, size, colour){
    mapleLeafSvg.append("g")
     .attr("transform", `translate(${cx * 100 * neg_1}, ${cy * 100 * neg_2}) scale(${ size/10 })`)
     .append("path")
     .attr("d", "M316.099,85.846c-24.586-35.32-45.821-65.827-50.974-80.433c-1.139-3.215-4.145-5.372-7.554-5.414 c-3.15,0.096-6.476,2.044-7.68,5.227c-5.244,13.812-25.405,42.765-48.752,76.314C147.671,158.326,74.447,263.494,74.447,331.917 c0,100.926,82.103,183.034,183.029,183.034s183.029-82.108,183.029-183.034C440.505,264.6,368.599,161.285,316.099,85.846z")
     .attr("fill", colour);

}


//###############################################################################
//################ FUNCTIONS RESPONSIBLE FOR LARGE MODIFICATIONS ################
//###############################################################################

function long_rect(cx, cy, neg_1, neg_2, size, colour){
    mapleLeafSvg.append("rect")
      .attr("x", cx * neg_1 * -3000)
      .attr("y", cy * neg_2 * -300)
      .attr("width", 5000)
      .attr("height", (size * 6) )
      .style("fill", colour);
}

function high_rect(cx, cy, neg_1, neg_2, size, colour){
    mapleLeafSvg.append("rect")
      .attr("x", cx + 4000 * neg_1 * 3)
      .attr("y", cy + 400 * neg_2 * 30)
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


//Some sort of sine wave thing
function veryExtendedPath(originalD) {
  return originalD + 
" M20,250 Q50,300 80,260 T120,290 Q150,320 180,280 T220,310" +
" M30,270 L60,320 L90,290 L120,340 L150,300 L180,350 L210,310 Z" +
" M40,330 Q70,380 100,350 T140,390 Q170,420 200,380 T240,410" +
" A5,5 0,1,1 250,400 A3,3 0,1,0 260,390 L270,420 Q280,450 290,430" +
" M80,440 Q110,500 140,460 T180,510 Q210,550 240,500 T280,540" +
" L260,560 L290,600 L320,570 L350,620 L380,580 Z" +
" M100,620 Q130,680 160,640 T200,690 Q230,740 260,690 T300,740" +
" A10,10 0,1,1 320,730 Q340,780 360,750 L380,800 Z" +
" M120,800 Q150,860 180,820 T220,870 Q250,920 280,870 T320,920" +
" L340,940 L370,980 L400,950 Z M140,960 Q170,1020 200,980 T240,1030" +
" Q270,1080 300,1030 Z M160,1040 Q190,1100 220,1060 T260,1110 Z";                           
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


//this should be interesting
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



//just makes a triangle for now
function bumpNthCoord(path, nth = 3) {
  const d = path.attr("d");
  const coords = d.match(/-?\d+(?:\.\d+)?/g).map(Number);
  
  const xIndex = nth * 2;
  const yIndex = nth * 2 + 1;
  coords[xIndex] += 50;  // BIG move
  coords[yIndex] += 30;
  
  coords.forEach((_, i) => coords[i] += (Math.random() - 0.5) * 40);
  
  // MANUAL rebuild - skip ALL regex
  let newD = "";
  let j = 0;
  for (let i = 0; i < d.length; i++) {
    if (/\d/.test(d[i]) || d[i] === '.' || d[i] === '-') {
      newD += coords[j++].toFixed(1);
      while (i < d.length && /\d|\.|-/.test(d[i])) i++;  // skip rest of number
      i--;
    } else {
      newD += d[i];
    }
  }
  
  path.attr("d", newD);
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

