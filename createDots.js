const randomNumberOfDots = ~~(Math.random() * 24 + 2);
const dots = {};
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const paperWidth = 40;
const paperHeight = 30;

for (i = 0; i < randomNumberOfDots; i++) {    
    let x = ~~(Math.random() * paperWidth);  
    let y = ~~(Math.random() * paperHeight);    
    dots[alphabet[i]] = [x, y];
    if (Object.keys(dots).length > 1) {    
        //position conditions for current and previous dot:
        //  - same vertical line
        //  - same horizontal line
        //  - diagonal
        //position condition for all dots:
        //  - no repeat
        while (
                    (compareCoordinates(dots[alphabet[i-1]][0], dots[alphabet[i]][0]) != compareCoordinates(dots[alphabet[i-1]][1], dots[alphabet[i]][1]) 
                      && compareCoordinates(dots[alphabet[i-1]][0], dots[alphabet[i]][0]) != 0 
                     && compareCoordinates(dots[alphabet[i-1]][1], dots[alphabet[i]][1]) != 0)
                    || 
                    dotExists(x, y, i)
              ){
                x = ~~(Math.random() * paperWidth);  
                y = ~~(Math.random() * paperHeight);  
                dots[alphabet[i]] = [x, y];      
            }        
    } 
}

//checks if dot already exits
function dotExists(x, y, n){
    for(i = 0; i < n; i++){
        if(dots[alphabet[i]][0] == x && dots[alphabet[i]][1] == y){
            return true;
        }
    }
    return false;
}

//returns two numbers difference, used for current and previous dot comparison
function compareCoordinates(a, b) {
    if (a > b) {
        return a - b
    } else {
        return b - a
    }
}

//checks if coordinate pair exists in objects dots
function isValidDot(x, y) {
    for (n = 0; n < randomNumberOfDots; n++) {
        if (x == dots[alphabet[n]][0] && y == dots[alphabet[n]][1]) {
            return Object.keys(dots)[n];
        } 
    }
    return false;
}

// prints alphabet symbols on screen
for (j = 0; j < paperHeight; j++) {
    let row = '';
    for (k = 0; k < paperWidth; k++) {                
        let letter = isValidDot(k, j);
        if (letter == false) {                        
            row+=' ';
        } else {            
            row+=letter;
        }                                
    } 
    console.log(row);
}

module.exports.randomNumberOfDots = randomNumberOfDots;
module.exports.dots = dots;
module.exports.alphabet = alphabet;
module.exports.paperWidth = paperWidth;
module.exports.paperHeight = paperHeight;
module.exports.compareCoordinates = compareCoordinates;
module.exports.isValidDot = isValidDot;