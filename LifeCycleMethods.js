/** Life cycle methods of React native appplication component
 * 1. Mounting 
 * 2. Updating 
 * 3. Unmounting 
 * 4. Error Handling 
 */

import React, {Component} from 'react'
import { View } from 'react-native'
import { Bind } from './InlineVsBindFunctions';

export class ComponentLifeCycle extends Component {
    
/** 1. Mounting methods
 * constructor()
 * componentWillMount() // Depreciated after RN 0.60
 * render()
 * componentDidMount()
 */

    /** constructor()
     * called when we open a screen
     * used to create states
     */
    constructor() {
        super();
        console.log('Constructor called')
    }

    /** componentWillMount() // depreciated 
     * called right after constructor()
     * used to call asynchronous call or network calls
    */
//    componentWillMount() {
//         console.log('componetn will mount called');
//    }

   /** render()
    * used to render UI or main view of the application/screen
    */
   render() {
    return (
        <View style={{flex:1, justifyContent: 'center'}}>
            <Bind></Bind>
        </View>
    );
   }

   /** componentDidMount()
    * called after the render() method
    * used for network calls
    */
   componentDidMount() {
        console.log('componentDidMount called');
   }

/** 2. Updating methods
    * used to update the value of the props or state.
    * these methods are called automatically when the component re-renders
 
 Methods:
    * componentWillReceiveProps() // Depreciated after RN 0.60
    * shouldComponentUpdate()
    * componentWillUpdate() // Depreciated after RN 0.60
    * componentDidUpdate()
    */

   /** componetWillReceiveProps() // depreciated 
    * this will be called when the component does anything with new props
    * we send the next prop as argument inside it.
    */
//    componentWillReceiveProps(nextProp) {
//         console.log('componentWillReceiveProps called');
//    }

   /** shouldComponentUpdate()
    * called before the screen or the parent compnent re-renders
    * we can stop the re-redering by returing false
    */
   shouldComponentUpdate(nextProp, nextState) {
        console.log('shouldComponentUpdate method callled');
        return true;
   }

   /** componentWillUpdate() // depreciated 
    * called before rendering when the state and props recieved for updating
    * does not allow to use setState() method here
    */
// componentWillUpdate(nextProp, nextState) {
//     console.log('componentWillUpdate');
// }

    /** componentDidUpdate()
     * called after renering 
     * used to interact with updated values and execute the post-rendering events 
     */
    componentDidUpdate(prevProp, prevState) {
        console.log('compponentDidUpdate method callled')
    }


/** 3. Unmounting methods 
 
    * componentWillUnmount()
     * callled when the component is removed from DOM
     * user can run timers, stop networking requests and clean previously stored values in this method
*/
    componentWillUnmount() {
    console.log('componetWilunmount method called')
    }


/** 4. Error handling methods
 
    * componentDidCatch() 
    * used find the erros in the JS code and handle by passing correct orguments 
      and messages.
 */
    componentDidCatch(error, info) {
        console.log('componentDidCatch method called')
    }

}