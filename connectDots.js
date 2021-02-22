const createDots = require('./createDots');

setTimeout(function(){
    let matrix = [];
    //matrix initialization with spaces
    for(y = 0; y < createDots.paperHeight; y++){
        let row = [];
        for(x = 0; x < createDots.paperWidth; x++){
            row.push(' ');
        }
        matrix.push(row);
    }

    for(i = 1; i < createDots.randomNumberOfDots; i++){
        let xPrev = createDots.dots[createDots.alphabet[i-1]][0];
        let xCur =  createDots.dots[createDots.alphabet[i]][0];
        let yPrev = createDots.dots[createDots.alphabet[i-1]][1];
        let yCur = createDots.dots[createDots.alphabet[i]][1];
        if(xPrev == xCur){ //dots are on the same vertical line
            let dotsAsc = giveMeDotsAscending(yCur, yPrev);
            for(j = dotsAsc[0]; j < dotsAsc[1]; j ++){
                matrix[j][xPrev] = "*";
            }
        }
        else if(yPrev == yCur){ //dots are on the same horizontal line
            let dotsAsc = giveMeDotsAscending(xCur, xPrev);
            for(j = dotsAsc[0]; j < dotsAsc[1]; j ++){
                matrix[yPrev][j] = "*";
            }
        }
        else{ //general case
            let dotsAscX = giveMeDotsAscending(xCur, xPrev);
            let dotsAscY = giveMeDotsAscending(yCur, yPrev);
            for(j = dotsAscX[0]; j < dotsAscX[1]; j++){
                matrix[dotsAscY[0]++][j] = "*";
            }
        }
    }
    //prints filled matrix on the screen
    for(y = 0; y < createDots.paperHeight; y++){
        for(x = 0; x < createDots.paperWidth; x++){
            process.stdout.write(matrix[y][x]);
    }
    process.stdout.write('\n');
}
    

}, 3000);

function giveMeDotsAscending(a, b){
    if(a < b){
        return [a, b];
    }
    else{
        return [b, a];
    }
}
