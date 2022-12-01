import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Bind } from './InlineVsBindFunctions';
import { ComponentLifeCycle } from './LifeCycleMethods'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Santosh! </Text>
      <StatusBar style="auto" />
      {/* <Bind></Bind> */}
      <ComponentLifeCycle></ComponentLifeCycle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                                                
    backgroundColor: '#fffaaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// // export default class App extends React.Component {
// //   constructor() {
// //     super()
// //     // EC5 function
// //     this.updatedState = this.updatedState.bind(this)
// //   }
// //   state = {
// //     myState: 'Lorem ipsum dolor sit amet, consetetur adipisicing elit, used do eiusmotempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.'
// //   }

// //   /*** EC5 function declaration
// //    * other way defining class that can be used to bind.
// //    */

// //   updatedState () {
// //     this.state.myState = "EC5 updated state";
// //   }
// //   //Updating state // arrow function
// //   //updatedState = () => this.setState({ myState : 'this is updated state'})
// //   render() {
// //     return (
// //       <View style = {styles.container}>
// //         <Text onPress = {this.updatedState()}>{this.state.myState}</Text>
// //       </View>
// //     )
// //   }
// // }


// /*** Arrow functions.
//  * name = () => class.method({prop: val})
//  * defined in the lexical scope.
// */


// /*** Container
//  * This has a single responsibility of passing data or state to it's children.
//  * parent element of other componets.
//  * 
//  */

// /*** Component
//  * Dependent and reusable bits of code.
//  * serve the purpose as JS functions.
//  * they work in isolation and return HTML.
//  * 2 types: 1. Class components and 2. Functon component.
//     * Life Cycle:
//       * used to monitor ans maniplate during three faces : Mounting, Updating and Unmounting. 
//  * Components should get all the date by passing props.
//  * 
//  */

// export default class App extends React.Component {
  
//   state = {
//     myState : "Lorem ipsum ajfbafa afjafbaf fhaf faf  afaf afaf"

//   }

//   updateState = () => {
//     this.setState({myState: 'updated state'})
//   }

//   render() {
//     return (
//       <view>
//         <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState} /> 
//       </view>
//       // passing myState and updateState props
//     );
//   }
// }










// /*** Hooks
//  * Let you use state and other React feature without defining a class.
//  * 
//  */

// // function Example () {
// //   // Declare a new state variablw 
// //   const [count, setCount] = useState(0); // state Hook
// //   return (
// //     <div>
// //       <p>You clicked {count} times</p>
// //       <button onClick={() => setCount(count + 1)}> Click me</button>
// //     </div>
// //   );
// // }

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import PresentationalComponent from './PresentationalComponent'

// export default class App extends React.Component {
//    state = {
//       myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmo'
//    }
//    updateState = () => {
//       this.setState({ myState: 'The state is updated' })
//    }
//    render() {
//       return (
//          <View>
//             <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
//          </View>
//       );
//    }
// }

/** React props 
 * React props are function arguments in JavaScript and arguments in HTML
 * 
 * const myElement = <car brand = 'Ferari'/>
 * 
 * the compoent in receives the argument as prop object ()
 * 
 * function car (props) {
 *    return <h2> Car brand is {props.brand} </h2>
 * }
 */

/** Inline vs normal functions in react 
 * Since two different function instances are never equal, inline functions will cause the shallow equality comparison to fail, 
 * and thus will always trigger a re-render. 
 * As a result, many React developers encourage you to never use inline functions in render.
*/