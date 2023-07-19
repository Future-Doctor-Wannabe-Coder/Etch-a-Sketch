//Creating sketcher variable so I can add child elements
let sketcher = document.querySelector('.sketcher');

//Creating container to hold buttons below sketcher
let buttonContainer = document.querySelector('.buttonContainer');

//Creating pixels
let pixel = [];
for (let i = 0; i < 256; i++) {
    pixel[i] = document.createElement('div');
    pixel[i].classList.add('pixel');
    sketcher.appendChild(pixel[i]);  
}

//Creating draw button to color pixels

let draw = document.createElement('button');
draw.classList.add('draw');
draw.textContent = "Black";
buttonContainer.appendChild(draw);
document.querySelector('.draw').style.backgroundColor = 'blue';

//creating erase variable
let erase = false;

//creating clear variable
let cleared = false;

//Added so we can make sure hovering changes color only when click occurs on draw button
let drawClick = true;

document.querySelector('.draw').addEventListener('click', () => {
    drawClick = !drawClick;
    if(drawClick === true) {
        document.querySelector('.draw').style.backgroundColor = 'blue';
        if (erase === true || cleared === true) {
            erase = false;
            cleared = false;
            document.querySelector('.eraser').style.backgroundColor = 'white';
            document.querySelector('.clear').style.backgroundColor = 'white';
        }
    }
    else {
        document.querySelector('.draw').style.backgroundColor = 'white';
    }
    console.log('drawclick: ' + drawClick);
});

for (let i = 0; i < 256; i++) {
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


for (let i = 0; i < 256; i++) {
    clear.addEventListener('click', () => {
        pixel[i].style.backgroundColor = 'white';
        console.log("cleared: " + cleared);
    });
}

document.querySelector(".clear").addEventListener('click', () => {
    cleared = !cleared;
    if(cleared === true) {
        document.querySelector('.clear').style.backgroundColor = 'blue';
        if(drawClick === true || erase === true) {
            erase = false;
            drawClick = false;
            document.querySelector('.draw').style.backgroundColor = 'white';
            document.querySelector('.eraser').style.backgroundColor = 'white';
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
        if(drawClick === true || cleared === true) {
            drawClick = false;
            cleared = false;
            document.querySelector('.draw').style.backgroundColor = 'white';
            document.querySelector('.clear').style.backgroundColor = 'white';
        }
    }
    else {
        document.querySelector('.eraser').style.backgroundColor = 'white';
    console.log(erase);
    }
});

for(let i = 0; i < 256; i++) {
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


























