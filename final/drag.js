
let p = document.getElementsByTagName('p');
let chocie = document.getElementsByClassName('chocie');
let dragItem = null;

// Start the  code of the elements 
// when they are dragged from one place to another
for(let i of p){
    i.ondragstart = dragStart;
    i.ondragend = dragEnd;  
}
// A function that enables the user to drag an item
function dragStart(){
    dragItem = this;
    setTimeout(()=>this.style.display='none',0);
}

// Function to drop the dragged item
function dragEnd(){
    dragItem = this; 
// Set a time for the item to appear when
//  it is dropped in a specific location
    setTimeout(()=>this.style.display='block',0);
}
// End the code of the elements 

// Start of code for where items are dropped
for(let x of chocie){
    x.ondragover = dragOver;
    x.ondragleave = dragLeave;
    x.ondrop = Drop;
}
// A function that executes a specific event 
// when the dragged object is on the drop target
function dragOver(h){
    h.preventDefault();
    this.style.border = "2px solid cyan";
}

// A function that executes a specific event
//  when the dragged object leaves the drop target 
// (unframed from the drop location)
function dragLeave(){
    this.style.border = "none";
}
// Drop function of the dragged object in the drop target
function Drop(){
    this.append(dragItem);
}
// End of the code for where items are dropped




