/** Garbage collection in React 
 * JS memory leak: memory that is not required the application anymore, for some reason it is not returned to the OS or the pool of memory.
 * momory leak problems: slowdown, crash, high-latency, other problems 
 * In JS the memory leak is managed automatically by (Garbage Collector). this is a backgorund process that periodically trnasverse pices of
   allocated objects and their references.
   - if it happens to be the part of the graph is not being refereced directly or indirectly from the root document
     it should be deallocated to inorder to free up the memory. (eg. variable on the stack or global object like window/navigator)
   - if you declare the variable out side of the scopeof the class those objects will be rettained.
   - keep the scope to main object such as root.
   
   ----- Most common mistakes-----
    * Closure scoope leakes:
        -   mesans, the object containing all the variables outside the closure the being references from within the closure.
        -  

        

    * Memory leaks due to unreleased timers/listeners added in the componentDidMount method.

    ----- Monitorig the memory leaks ---------
    * conside a list add or remove as move between the state or screens, observe the memory changes in the instrucments.
    - Instruments in iOS.
    - Android studio profiles tab
        -> Both tools show the memory allocated by the by the JS as well as the momory allocated by native modules and views.

    - Web : take moemory snapshots using safari we inspector (JS Context).

    
 * 
 * 
*/

//Due to Closure scope leakes 

componentDidUpdate (prevProps) {

    const clockPropsHasChanged = [‘hours’, ‘mins’, ‘sec’, ‘countdown’].some(
  
      prop => this.props[prop] !== prevProps[prop]
  
    );
  
    if (clockPropsHasChanged) {
  
      clearInterval(this._interval);
  
      let { countdown, hours, mins, sec } = this.props;
  
      if (countdown) {
  
        this._interval = setInterval(() => {
  
          sec -= 1;
  
          if (sec < 0) {
  
            sec = 59;
  
            mins -= 1;
  
          }
  
          if (mins < 0) {
            
            mins = 59;
  
            hours -= 1;
  
          }
  
          if (hours < 0) {
  
            clearInterval(this._interval);
  
          } else {
  
            this.setState({ hours, mins, sec });
  
          }
  
        }, 1000);
  
      }
  
    }
  
  }


// Due to unreleased listeners and timer. 


  class Composer extends Component {

    state = { showAccessory: false }

    componentDidMount() {

      Keyboard.addListener(‘keyboardDidShow’, () => this.setState({ showAccessory: true }));

      Keyboard.addListener(‘keyboardDidHide’, () => this.setState({ showAccessory: false }));

    }

    render() {

      return (

        <View>

          <EditTextComponent />

          {this.state.showAccessory && <AccessoryView />}

        </View>

      );

    }

  }