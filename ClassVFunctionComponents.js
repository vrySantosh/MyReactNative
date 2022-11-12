/** Functional components 
 * Just JavaScript functions 
 * Does not extend the React components 
 * 
 */


 export class Bind extends React.Component {
    constructor() {
      super()
      // EC5 function
      this.updatedState = this.updatedState.bind(this)
    }
    state = {
      myState: 'Lorem ipsum dolor sit amet, consetetur adipisicing elit, used do eiusmotempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.'
    }
  
    /*** EC5 function declaration
     * other way defining class that can be used to bind.
     */
  
    updatedState =  () => {
      
        this.setState({myState: 'Updated state'})

        )
    }
    //Updating state // arrow function
    //updatedState = () => this.setState({ myState : 'this is updated state'})
    render() {
      return (
        <View style = {styles.container}>
          <Text onPress = {this.updatedState()}>{this.state.myState}</Text>
        </View>
      )
    }
  }