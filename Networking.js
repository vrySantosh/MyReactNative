/** Networking in React Native
    
    Fetch API
    * custom HTTP request method 
    * custom headers
 */

// fetch 

fetch('https://google.com/link')

// fetch with custom methods and requests

fetch('https://google.com/link/', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        firstParam: 'first',
        secondParam: 'second'
    })
});


/** Handling responses 
 * fetch method will return a promise(response) that you have to handle 
 */

const getMoviesFromApi = () => {
    return fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => {
            return json.movies;
        })
        .catch((error)=> {
            console.error(error)
        });
};

// You can use Async - Await in react native 

const getMoviesFromApiAsync = async () => {
    try{
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = response.json();
        return json.movies;
    } catch(error) {
        console.error(error)
    }
};

/** Other networking libraries - third party
 * XMLHttpRequestAPI is built into react native so you can use other libries which built on it or ass it is.
 * - Frisbee
 * - axios
 */


var request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
        return;
    }
    if (request.readyState === 200) {
        console.log('success', request.responseText);
    } else {
        console.warn('error');
    }
}

request.open('GET', 'https://myweb.com/endpoint/');
request.send();

/** Web socket support
 * This is a protocol which is used in full-duplex communication channels over a single TCP connections.
 * 
 */

var ws = new WebSocket('ws://host.com/path');

ws.onopen = () => {
    //connection open
    ws.send('message'); //send a message 
};

ws.onmessage = (e) => {
    //message was received 
    console.log(e.data)
};

ws.onerror = (e) => {
    console.error(e.message);
}

ws.onclose = (e) => {
    //connection closed 
    console.log(e.code, e.reason);
}


/** Know issues with fetch and cookie based authentication
 * redirectonal: manual
 * credential:omit


*/
/** Configuring NSURLSEssions on iOS  
 *  Customised NSURLSessionaconfiguration is set for user agen and removing underlaying or existing unterminated sessions .
 
#import <React/RCTHTTPRequestHandler.h>

 -(void)application:(__unused UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

  // set RCTSetCustomNSURLSessionConfigurationProvider
  RCTSetCustomNSURLSessionConfigurationProvider(^NSURLSessionConfiguration *{
     NSURLSessionConfiguration *configuration = [NSURLSessionConfiguration defaultSessionConfiguration];
     // configure the session
     return configuration;
  });

  // set up React
  _bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
}

*/