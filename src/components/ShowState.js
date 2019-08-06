import React from 'react'
import $ from 'jquery'
import SWApi from '../constants/Apis'

// HOC test
//async function test

// callback hells 
// handles with async functions and shows that all
async function hello(){
    return 'this is a promise'
}
const h = hello();
// $.get(SWApi).then(res =>console.log('SWAPI people:'+res))

const promise = async ()=>{
    const step1 = $.get(SWApi);
    const Luke = await step1;
    console.log(Luke);
}
const luke  = promise();
// console.log(promise())

export default function ShowState() {

    return (
        <div>
          <p>Item in this page </p>
        </div>
    )
}
