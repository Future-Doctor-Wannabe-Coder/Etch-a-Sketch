//Creating sketcher variable so I can add child elements
let sketcher = document.querySelector('.sketcher');

//Creating container to hold buttons below sketcher
let buttonContainer = document.querySelector('.buttonContainer');

//Function that asks user how many pixels they want on each side of sketcher
function numPixels() {
    let numPix = prompt("Welcome to Etch-A-Sketch. Please Enter the number of pixels you would like on each side of the sketch. Example, entering 16 will create and etch a sketch with 16x16 pixels. Keep your answer under 200.")
    if (numPix <= 200) {
        console.log(numPix);
        return numPix;
    }
    else {
        numPixels();
    }  
}

let length = numPixels();
console.log(length);

let pixelLength = sketcher.offsetHeight / length;
console.log(sketcher.offsetHeight);
console.log(length);
console.log(pixelLength);
//pixelLength = Math.floor(pixelLength);
//console.log(pixelLength);
let lenSquared = (length * length);
console.log(lenSquared);

//pixSquared = Math.floor(pixSquared);
//console.log(pixSquared);



//Creating pixels
let pixel = [];
for (let i = 0; i < lenSquared; i++) {
    pixel[i] = document.createElement('div');
    pixel[i].classList.add('pixel');
    pixel[i].style.width = pixelLength + "px";
    pixel[i].style.height = pixelLength + "px";
    sketcher.appendChild(pixel[i]);  
}







//Creating draw button to color pixels

let draw = document.createElement('button');
draw.classList.add('draw');
draw.textContent = "Black";
buttonContainer.appendChild(draw);
document.querySelector('.draw').style.backgroundColor = 'blue';

let rainbow = document.createElement('button');
rainbow.classList.add('rainbow');
rainbow.textContent = "Rainbow";
buttonContainer.appendChild(rainbow);

//creating erase variable
let erase = false;

//creating clear variable
let cleared = false;

//creating rainbow variable
let rainbowClick = false;

//Added so we can make sure hovering changes color only when click occurs on draw button
let drawClick = true;

document.querySelector('.draw').addEventListener('click', () => {
    drawClick = !drawClick;
    if(drawClick === true) {
        document.querySelector('.draw').style.backgroundColor = 'blue';
        if (erase === true || cleared === true || rainbowClick === true) {
            erase = false;
            cleared = false;
            rainbowClick = false;
            document.querySelector('.eraser').style.backgroundColor = 'white';
            document.querySelector('.clear').style.backgroundColor = 'white';
            document.querySelector('.rainbow').style.backgroundColor = 'white';
        }
    }
    else {
        document.querySelector('.draw').style.backgroundColor = 'white';
    }
    console.log('drawclick: ' + drawClick);
});

for (let i = 0; i < lenSquared; i++) {
    pixel[i].addEventListener('mouseover', () => {
        if(drawClick === true) {
            pixel[i].style.backgroundColor = 'black';
            erase = false;
        }
        else {
            pixel[i].style.backgroundColor = pixel[i].style.backgroundColor;
        }
        console.log(drawClick);
    }); 
}


//create button that clears sketcher
let clear = document.createElement('button');
clear.classList.add('clear');
clear.textContent = "Clear";
buttonContainer.appendChild(clear);

for (let i = 0; i < lenSquared; i++) {
    clear.addEventListener('click', () => {
        pixel[i].style.backgroundColor = 'white';
        console.log("cleared: " + cleared);
    });
}

document.querySelector(".clear").addEventListener('click', () => {
    cleared = !cleared;
    if(cleared === true) {
        document.querySelector('.clear').style.backgroundColor = 'blue';
        if(drawClick === true || erase === true || rainbowClick === true) {
            erase = false;
            drawClick = false;
            rainbowClick = false;
            document.querySelector('.draw').style.backgroundColor = 'white';
            document.querySelector('.eraser').style.backgroundColor = 'white';
            document.querySelector('.rainbow').style.backgroundColor = 'white';
        }
    }
    else {
        document.querySelector('.clear').style.backgroundColor = 'white';
    }
});

//Create eraser button
let eraser = document.createElement('button');
eraser.classList.add('eraser');
eraser.textContent = 'Eraser';
buttonContainer.appendChild(eraser);

document.querySelector('.eraser').addEventListener('click', () => {
    erase = !erase;
    if(erase === true) {
        document.querySelector('.eraser').style.backgroundColor = 'blue';
        if(drawClick === true || cleared === true || rainbowClick === true) {
            drawClick = false;
            cleared = false;
            rainbowClick = false;
            document.querySelector('.draw').style.backgroundColor = 'white';
            document.querySelector('.clear').style.backgroundColor = 'white';
            document.querySelector('.rainbow').style.backgroundColor = 'white';
        }
    }
    else {
        document.querySelector('.eraser').style.backgroundColor = 'white';
    console.log(erase);
    }
});

for(let i = 0; i < lenSquared; i++) {
    pixel[i].addEventListener('mouseover', () => {
        if(erase === true) {
            console.log("erase: true");
            draw = false;
            pixel[i].style.backgroundColor = 'white';
        }
        
        else {
            console.log("erase: false");   
            }
        
        });
}

//Create button that turns colors rainbow/random
document.querySelector('.rainbow').addEventListener('click', () => {
    rainbowClick = !rainbowClick;
    document.querySelector('.rainbow').style.backgroundColor = 'blue';
    if(drawClick === true || cleared === true || erase === true) {
        drawClick = false;
        cleared = false;
        erase = false;
        document.querySelector('.draw').style.backgroundColor = 'white';
        document.querySelector('.clear').style.backgroundColor = 'white';
        document.querySelector('.eraser').style.backgroundColor = 'white';
    }
    else {
        document.querySelector('.rainbow').style.backgroundColor = 'white';
    console.log(rainbow);
    }
});

for(let i = 0; i < lenSquared; i++) {
    pixel[i].addEventListener('mouseover', () => {
        if(rainbowClick === true) {
            console.log("rainbow: true");
            pixel[i].style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
        }

        else {
            console.log("erase: false");   
            }
        
        });
}



//Create a function that changes size/number of pixels































