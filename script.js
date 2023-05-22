let slider = document.getElementById("myRange");
let output = document.getElementById("range-numbers");
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = `${this.value} X ${this.value}`;
  let container = document.getElementById("container");

  for(let i=0; i < (this.value*this.value); i++) {
    let box = document.createElement('div');
    box.classList.add('created-box');
    container.appendChild(box);
  }
}
