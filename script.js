// Links the slider to an element
let slider = document.getElementById("myRange");

// Links the numbers about the slide to an element
let output = document.getElementById("range-numbers");

// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = `${this.value} X ${this.value}`;
  let container = document.getElementById("container");

  // Check if the board has any divs and delete them
  if (container.hasChildNodes()) {
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
  };

  // Create divs inside the drawing board based on the slider input
  for(let i=0; i < (this.value*this.value); i++) {
  
    let box = document.createElement('div');
    box.classList.add('created-box');
    container.appendChild(box);
    let height = `${500 / this.value}px`;
    let width =  `${500 / this.value}px`;
    box.style.height = height;
    box.style.width = width;

    // Change color of created-box on hover
    box.addEventListener("mouseover", changeColor);
    function changeColor() {
      box.style.backgroundColor = "black";
    };

    let clearButton = document.getElementById("clear");
    clearButton.addEventListener('click', clearBoard);
    function clearBoard() {
      box.style.backgroundColor = "white";
    }

    
  }
}



