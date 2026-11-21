let isOver;
let counter = 1;
 
do {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
} while (!isOver);
