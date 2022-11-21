/** React HOOKS
 * They let you use state and other React features without writing a class.
 * 1. State HOOK
 * 2. Effect Hook
 

 * Rules of hooks:
    * Only call hooks at top level.(Don't call inside loop, conditions, nested functions.)
    * Only call hooks from react functions.(call inside function components, call from custom components)
  * ES-Lint Plugin enforces the above 2 rules 
  
 */



//state HOOK  : let you use the state without definigthe classes 

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

//The Effect Hook lets you perform side effects in function components:

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


const { useEffect } = require("react");

useEffect(function persistFrom() {
    // we are not breaking the first rule anymore.
    if (name !== ''){
        localStorage.setItem('formData', name)
    }

});


// Hook defined wheather the friend is offline or online.

import React, { useState, useEffect } from 'react';

function FriendListItem(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}

//Custom hoook start with 'use'

import { useState, useEffect } from 'react';

//defining the custom hook
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });
  return isOnline;
}


//Using custom Hook

function FriendStatus(props) {
    //Ussing custom hook
    const isOnline = useFriendStatus(props.friend.id);
  
    if (isOnline === null) {
      return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
  }

  function FriendListItem(props) {
    const isOnline = useFriendStatus(props.friend.id);
  
    return (
      <li style={{ color: isOnline ? 'green' : 'black' }}>
        {props.friend.name}
      </li>
    );
  }


  //In a custom hooks the states are fully isolated 
  // Custom hooks are share the logic that wasn't possible before 
  //Applications such are animations subscriptions and timers 