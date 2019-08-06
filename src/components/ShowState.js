import React from 'react'
import $ from 'jquery'
import { request } from 'https';

// HOC test
//async function test

// callback hells 
// handles with async functions and shows that all
async function hello(){
    return 'this is a promise'
}
const h = hello();

h.then(res =>console.log(res))

export default function ShowState() {

    return (
        <div>
          <p>Item in this page </p>
        </div>
    )
}
