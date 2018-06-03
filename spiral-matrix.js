// 1-2-3-4-5
// 16-17-18-19-6
// 15-24-25-20-7
// 14-23-22-21-8
// 13-12-11-10-9

function printGrid(grid) {
    for (var i=0; i < grid.length; i++) {
        console.log(grid[i].join(' '));
    }
}

// 2d array 

function create2DGrid(size) {
    let i = size;
    const grid = [];
    while (i--) {
        grid.push(new Array(size));
    }
    return grid;
}

function createSpiral(n) {
    const spiral = create2DGrid(n);
    let currentNumber = 1;
    let i = 0;
    let j = 0;
    let di = 0;
    let dj = 1;

    while (currentNumber <= n * n) {
        spiral[i][j] = currentNumber++; // putting one in top left corner 

        if (j + dj === n || // check if far right corner 
            i + di === n || // check if out of bounds on bottom 
            j + dj === -1 ||  // check if out of bounds on left side 
            spiral[i+di][j+dj] ) { // have we seen a value in a space yet?
            
        const tempDi = di; // temporary i direction 
        di = dj ;  // update di to dj 
        dj = -tempDi;  // update dj 
       }
     i += di ; // increment i 
     j += dj ; // increment j
   }
 return spiral
}

printGrid(createSpiral(10));

// this prints any size grid 

