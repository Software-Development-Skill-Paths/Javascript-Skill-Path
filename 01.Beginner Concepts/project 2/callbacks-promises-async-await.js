import fetch from "node-fetch";
import fs from "fs";

//*********CALL BACK EXAMPLES********************

//setTimeOut
//setTimeOut() takes a callback function
//and executes it after a specified time(milliseconds)
//setTimeOut() is asynchronous because it performs some
//action in the future
// setTimeout(() => {
//     console.log('Waited 1 second');
// }, 1000);

//nested setTimeOut
// setTimeout(() => {
//     console.log('3');
//     setTimeout(() => {
//         console.log('2');
//         setTimeout(() => {
//             console.log('1');
//         });
//     }, 1000);
// }, 1000);

//another example of a callback function usage
//button event handler in browser javascript
// let btn;
// btn.addEventListener('click', () => {

// });

//error first callback
// fs.readFile('./test.txt', {encoding: 'utf-8'}, (err, data) => {
//     if (err) {
//         console.error('ERROR');
//         console.error(err);
//     } else {
//         console.log('GOT DATA');
//         console.log(data);
//     }
// });

//**********PROMISES**********

//Create a promise
//the resolve and reject are callback functions that
//are executed either on resolving the promise or on
//rejecting it
// const myPromise = new Promise((resolve, reject) => {
//     const rand = Math.floor(Math.random() * 2);
//     if (rand === 0) {
//         console.log(rand);
//         resolve();  
//     } else {
//         console.log(rand);
//         reject();
//     }
// });

//using our promise
//myPromise.then(() => console.log("Success")).catch(() => console.error("Something went wrong"));

//using promises that already exist
//Example: fs readFile has promises
//the asynch readFile function executes and if it is successful
//it resolves the promise otherwise it rejects the promise
//we then use the .then to proceed with how to handle the case
//were our promise has been resolved
//we can then use the .catch to proceed on how to handle the case
//were our promise was rejected or file wasn't read
// fs.promises.readFile('./test.txt', {encoding: 'utf-8'})
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

//Another example for using promises
//Example: using the fetch API to make XHR(XML HTTP REQUESTS)
//the fetch method returns a response so we get the json data 
//on that response which is returned as a promise as well that
//we then settle by logging out the json data to our console
//using the .then or .catch based on whether it was resolved or
//rejected
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));



//********** ASYNC/AWAIT ****************
//Examples of how to use Async/Await
//load file with async/await
// const loadFile = async () => {
//     try {
//         const data = await fs.promises.readFile('./test.txt', {
//             encoding: 'utf-8'
//         });
//         console.log(data);
//     } catch (error) {
//         console.error(error); 
//     }
    
// }
// loadFile();

//fetch pokemon with async/await
//the res is still a promise so we wrap it inside another await
const fetchPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
fetchPokemon(2);



