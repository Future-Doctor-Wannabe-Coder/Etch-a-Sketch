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
draw.textContent = "Draw";
buttonContainer.appendChild(draw);

//creating erase variable
let erase = false;

//Added so we can make sure hovering changes color only when click occurs on draw button
let drawClick = false;
document.querySelector('.draw').addEventListener('click', () => {
    drawClick = !drawClick;
    console.log('drawclick: ' + drawClick);
});

for (let i = 0; i < 256; i++) {
    pixel[i].addEventListener('mouseover', () => {
        if(drawClick === true) {
            pixel[i].style.backgroundColor = 'black';
            document.querySelector('.draw').style.backgroundColor = 'blue';
        }
        else {
            document.querySelector('.draw').style.backgroundColor = 'white';
            pixel[i].style.backgroundColor = pixel[i].style.backgroundColor;
        }
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
    });
}

//Create eraser button
let eraser = document.createElement('button');
eraser.classList.add('eraser');
eraser.textContent = 'Eraser';
buttonContainer.appendChild(eraser);

document.querySelector('.eraser').addEventListener('click', () => {
    erase = !erase;
    console.log(erase);
});

for(let i = 0; i < 256; i++) {
    pixel[i].addEventListener('mouseover', () => {
        if(erase === true) {
            console.log("erase: true");
            draw = false;
            document.querySelector('.eraser').style.backgroundColor = 'blue';
            pixel[i].style.backgroundColor = 'white';
        }
        
        else {
            document.querySelector('.eraser').style.backgroundColor = 'white';
            console.log("erase: false");   
            }
        
        });
}


























