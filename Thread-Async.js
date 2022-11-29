/** Threads
        Threading model: in latest achitechture 
            the render uses 3 different threads
            1. UI thread (main): only thread that can manipulate views
            2. Javascript Thread: this is where the react render phase is executed
            3. BackGround thread: dedicated to layout.
        threading is part of architecture:
    Async functions:
        arrow functions, express the intent to run a function by sequetial and run the code concurently.
 */

//Async 
import React from 'react';

async function fetchJSONAsync(url) {
    let response = await fetch(url);
    let body = await response.json();
    return body;
  }

    /** Async 
        Declares the function is asynchronous 
        It automatically return the promises
        Returns the promisses or uncought errors
   */

    /** Await
        Tells the program temporarly exit the function and resume when the given task is completes.
        The program can run the other code like gesture and rendering methods.
        You can await any promise, it is common to await the return value of the async menthods.
    */

    // Enabling Async-Await via babel modern day react native compiler 

    async function showAppleStockPriceAsync() {
        let url = 'http://dev.markitondemand.com/Api/v2/Quote/json?symbol=AAPL';
        let response = await fetch(url);
        let body = await response.json();
        let { AlertIOS } = require('react-native');
        AlertIOS.alert(body.Symbol, '$' + body.LastPrice);
      }
      showAppleStockPriceAsync();