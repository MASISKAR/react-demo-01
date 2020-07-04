 import React from 'react';
 
 export function idGen(){
    return Math.random().toString(32);
}

 export const Hello =()=> {
     return (
         <div>Hello World!</div>
     );
}

export function getThis(){
    console.log('this', this);
}
getThis();

// export {idGen, hello};

const greeting = "HELLO WORLD";

export default greeting;



// export {idGen,  hello};

// const greeting = "HELLO WORLD";

// export default greeting;