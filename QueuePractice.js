/* eslint-disable no-undef */
const Queue = require('./Queue');

function main(){

    const starTrekQ = new Queue();

    starTrekQ.enqueue('Kirk');
    console.log(starTrekQ);
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    console.log(starTrekQ);
    peek(starTrekQ);
    const emptyQueue = new Queue();
    console.log(isEmpty(starTrekQ));
    console.log(isEmpty(emptyQueue));
    display(starTrekQ);
}

function peek(queue){
    if(!queue.first){
        return null;
    }
    console.log(queue.first.value);
    return;
}

function isEmpty(queue){
    if(queue.first === null){
        return true;
    }
    return false;
}

function display(queue){
    let currQueue = queue.first;
    if(currQueue === null){
        return ;
    }
    while(currQueue !== null){
        console.log(currQueue.value);
        currQueue = currQueue.next;
    }
}
main();