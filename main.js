 /* select all variables */
const buttons = document.querySelectorAll(".container .tabs-buttons button");
const content = document.querySelectorAll(".container .tabs-panel");

/* a function to show panels */
function showPanel (panelIndex, colorCode){
    
    /*function to style background and font color for all buttons */
    buttons.forEach(function(e){
        e.style.backgroundColor = "";
        e.style.color = "";
        });
    buttons[panelIndex].style.backgroundColor = colorCode;
    buttons[panelIndex].style.color = "white";
    
    /*function to style background and font color for the content of all buttons */
    content.forEach(function(e){
        e.style.display = "none";
        });
    content[panelIndex].style.display = "block";
    content[panelIndex].style.backgroundColor = colorCode;
}

showPanel();