// // import {add,multiply} from './math.js';
// // let Add = add(3,7);
// // let Multiply = multiply(18,19);
// // console.log(`Addition: ${Add}\nMultiplication: ${Multiply}`);

// async function loadMath(){
//     const math = await import('./math.js');
//     const Add = math.add(3,7);
//     console.log(`Addition: ${Add}`);
// }

// loadMath()

const  data = new Promise((resolve, reject) => {
    setTimeout(() => {
        const name = 'John Doe';
        if(name){
            resolve(name);
        }else{
            reject('No name found');
        }
        
    }, 5000);
})
data.then((name) => {
    console.log(`Name: ${name}`);
}).catch((error) => {
    console.error(`Error: ${error.message}`);
}).finally(() => {
    console.log('Promise completed');
});