// Functions

function createGrid(size){
  gridContainer.textContent = '';

  gridContainer.style.gridTemplateColumns = "repeat(" + size + ", auto)";
  gridContainer.style.gridTemplateRows = "repeat(" + size + ", auto)";

  for(let i = 1; i<=(size*size); i++){

    const div = document.createElement('div');
      div.setAttribute('id', 'grid');
      div.addEventListener('mouseover', function(e){
      div.style.backgroundColor = 'black';
    });
    gridContainer.appendChild(div);
    }
}

function randomColor(){
  let color = Math.floor(Math.random()*256);
  return color;
}

// References

const eraseGridButton = document.querySelector('#eraseGridButton');
const gridContainerButton = document.querySelector('#gridContainerButton');
const selectGridButton = document.querySelector('#selectGridButton');
const multiColorButton = document.querySelector('#multiColorButton');
const blackButton = document.querySelector('#blackButton');


// Events

selectGridButton.addEventListener('click', function(e){
let size = prompt('Select grid size, please');
createGrid(size);
});

eraseGridButton.addEventListener('click', function(e) {
  const  divList1 = document.querySelectorAll('#grid');
  divList1.forEach(div => div.style.backgroundColor = '#f2f2f2');
});

multiColorButton.addEventListener('click', function(e) {
const divList2 = document.querySelectorAll('#grid');
divList2.forEach(div => div.addEventListener('mouseover', function(e){
div.style.backgroundColor = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
}));
});

blackButton.addEventListener('click', function(e) {
const divList3 = document.querySelectorAll('#grid');
divList3.forEach(div => div.addEventListener('mouseover', function(e){
div.style.backgroundColor = 'black';
}));
});
