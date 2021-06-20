// Write your code here!

main.remove()

// index.html
// after index.js is processed
// has a 'newHeader' variable that points to node 'h1#victory':

const newHeader = document.createElement('h1');
newHeader.id = ("victory");
document.body.appendChild(newHeader);

//1) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside

const getH1 = document.getElementById('victory');
getH1.innerHTML = "<p>Eric is the champion!</p>"