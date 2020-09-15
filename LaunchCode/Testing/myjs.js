let button = null;
let username = null;
let date = null;
let dateArray = ["Food", "Movie", "Drinks", "Games", "5", "6", "7", "8", "9", "10"];





function init () {
    button = document.getElementById("button");
    username = document.getElementById("username");
 

    // button.onclick = function() {
    //  if (username.value === "pooptrick" || username.value === "Pooptrick") {
    //      window.alert("Sorry, 'Pooptrick' isn't a REAL name...");
    //     } 
    // }

    button.onclick = function() {
        function randomSelection(dateArray){
            let index = Math.floor(Math.random()*arr.length);
            return dateArray[index];
        }
        date = dateArray[randomSelection(dateArray)];
        window.alert("Your date is");
        }
    
}




window.onload = init;