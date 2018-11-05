//we make an array from the querySelectorAll nodeList for input
let sliders = Array.from(document.querySelectorAll("input"));

//here is a little shortcut for targetting the body
let colourSource = getComputedStyle(document.body);
/*
     a fat arrow function contains our action for our listener.
     When a change is detected on an element, the slider value is updated
*/
let updateColor = (e) =>{
  /***  TRY IT OUT
    -data elements are part of the dataset of e.target
    -we want to get the color property from the dataset that we made earlier
    -lets use template literals to use the colour property
    -it should look something like this!
      eg. document.body.style.setProperty(`--${e.target.dataset.someValue}`, e.target.value);  
  */
  document.body.style.setProperty(`--${e.target.dataset.color}`, e.target.value);
  e.target.nextElementSibling.innerText = e.target.value;
}

/*
     For each slider we do the following:
     1.  we set the slider value based on the initial css variable for the color.
          each input holds its colour in its data-color datatag
     2.  we add an event listener to each slider to check for changes and run updateColor
     3.  dispatch an event to trigger the display of the range value
*/
sliders.forEach(slider => {
  slider.value = parseInt(colourSource.getPropertyValue(`--${slider.dataset.color}`));
  /**  TRY IT OUT!
    1.  add an event listener to each slider that:
      a.  looks for change events
      b.  calls updateColor
    2.  make a variable called fakeEvent which is a new Event for a 'change'
    3.  have the slider call the dispatchEvent function with the fakeEvent variable
  */
  slider.addEventListener("change", updateColor);
  let fakeEvent = new Event("change");
  slider.dispatchEvent(fakeEvent);  
});