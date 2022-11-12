/** Inline functions  vs bind functions
 * 
 Inline functions:
 * define where they are invoked
 * ideal for one liners like setState, simple and concise
 * saves space and easy to write, no need worry about the context.
 
 Drawbacks:
 * A new function is defines every time the component re-renders.
 * It result in frequent garbage collection, hence performance loss.
 * there is ESlint advises against it.
 * when an inline functions passed to child component in react, it reference checks it hence it will redendered again and again. 
   in that case the prop values does not match the original value. 
 
 Functions:
 * When using bind and multiple methods, the initialisation time increases.
 * Render prop state sharing concern. usually render props used to share state among the components.
  
 Conclusion:
 * Pre-optimisations should be avoided
 * Inline functoins' Performance impact should be catogarised under micro-optimisations.
 * Optimisations must be tought out on case-by-case basis.
 
*/



import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


export class Bind extends React.Component {
   constructor() {
     super()
     this.state = { count: 0 }
     this.counter = this.counter.bind(this)
   }
 
   counter = () => {
     this.setState({ count: this.state.count + 1 })
   } 
   render() {
     return (
       <View>
           <Button onPress={ this.counter} title = 'Counter'>
           </Button>
           <Text> {this.state.count} </Text>
         </View>
     )
   }
 }