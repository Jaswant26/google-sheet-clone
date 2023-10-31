const cellNamePlaceholder =document.querySelector("#active-cell");
let activeElement = null;
function onCellFocus(event) {
    const elementId = event.target.id;
    cellNamePlaceholder.innerText = elementId;
    activeElement = event.target;
    if (state[elementId]) {
        // already selected cell
        // fill the options with the state of that cell
        resetOptions(state[elementId]);
    }
    else {
        // selected for the first time
        // fill the options with default state
        resetOptions(defaultProperties);
    }
}
