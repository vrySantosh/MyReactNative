/** Redux in React native
 * It is a light weight state management component container
 * used to manage state in complex UI 
 * the state is predictaable 
 * used to write components that behaves consistantly across client, server and environments.
 * easy to test
 * it has one appication global state and used to intaract with the other component state.
 * easy to scale up the pplication.
 
    Action in Redux:
    * these are plain JS objects sent using native dispatch() method.
    * these should have type property to indicate the type of actiion to be carried out.
    * these are the only source of information for the store.
    * this means if any state change is nesssasary then the chcage is dispatched through the actions.
    
    Reducer in React native:
    * These are pure JS functions to specify how the app state changes in response to the action.
    * They take action with payload as an arguemnt and return new state.
    * they do not change the data in the object which is passed to them or perform any side effects.
    * Give the same object they should always return the same result.
     
    Store:
    * Holds the entire state of the application as a plain JS object.
    * Store is created with help of reducers
    * It is highly recomended to use one store in a redux app.
    
    Advantages of using redux:
    * Easy Debugging
    * Server-side rendering 
    * Predicatable state 
    * Maintanable 
    
    Conclusion:
    * alternatives for redux - contexts or mobx
    * consider if the app state is updated frequently, the logic to update the state is complex.
    * the app has the large or medium size codebase and being worked on many people. 
    
 */
    //Actions creator 

    const setUser = (user) => {
        return {
            type: "LOGIN",
            payload: {
                username: user.name,
                password: user.password
            }
        }
    }

    // Reducer 
    
    const initialState = {
        username : '',
        password: ''

    };

    const loggedUser = (state = initialState, action) => {
        switch(action.type) {
            case "LOGIN": 
                return {
                    username: action.payload.username,
                    password: action.payload.password
                };
            default:
                return state
        }
    };

    // Store

    const store = createStore(loggedUser)

    //2022-11-21-11-37-03.png


    //get the date from redux

    const count = useSlector ((store) => store.count.count);