/** Testing in React Native
 
    Testing and fixing bug that don't you don't want to them happen.
    One of the best way to fix a bug.
    Can be served as documentation to your project for newbie.
    Release when the test are success.
    More automated test -> less time spent on QA.
    Improves the quality of the code.

    Static Analysis:
        - Linters : Formatting : 
        - Type checkinh : Avoids mismatching of types (avoid str instead of Int type etc)

        Default out of the box:
        ESLint - Linting 
        Flow - typeChecking, TypeScript is an alternative. which compiles to JS.

    Wrinting Teestable Code:
        To write more testable code, separate view part of the app.
            - you react componetns from businesslogic and app state.
        
        Move all the logic and data fetching out of your components.
    
    Writing Tests:
        After writing testable code, move to sriting tests
        Jest testing framework, that ships with default react native framework
        
        Structuring tests:
            Your tests should be short and ideally test only one thing.
*/
        it('given a date in the past, colorForDueDate() returns red', () => {
            expect(colorForDueDate('2000-10-20')).toBe('red');
        });
/**
         * Test is described by the stirng it passes to it function
          
         * Given - some precondition
         * When - some action executed by the function that you are testing 
         * Then - the expected outcome 

            - also know as AAA (Arrange, Act, Assert)

            Jest offers describe function.
            - Use describe to group all the tests that belong to one function 
            - Describes can be nested
            
            other Functions:
                - beforeEach:
                - beforeAll:
                
            Rules to comply:
                if the test has many steps or many expectations -> slipt into mulltiple smaller ones.
                sencond test should not use the output of the first test.
                each one executable on it's own

    Unit Tests:
        Covers smallest part of the code, like indi funcs ot classes
        Mocks are needed when there are dependencies 
        Quick to write and run
        Jest has watch-mode to run test continuosly while you are editing.

        Mocking:
            - Required when there is an external dependency.
            Eg: when JS test relies on the native code wriiten in Obj-C/Swift or JAVA/Kotlin
            - External API:
                It could make tests slow
                Dynamic/Unstable data from service 
                Third party ervices go offline if you run tests bcuz of redenecy            
                
    Integration tests:
        For larst software the individual pieces needs to interact with each other 

        Integration test, the real individual units are combined to test thier cooperation works as axpected.
        Less mocking compared to unit testing 

        - Combines several modules of your app.
        - Uses external system.
        - Makes network call to other app
        - Does any kinda of file or database I/O.
    
    Component tests:
        Components are responsible for rendering the app.
        Users are direcly interact with their output.
        Witout component test you still deliver broken UI
        Could fall into both unit and integration testing 

        For Testing React Components:
            - Interaction: to ensure correct user interaction (user presses button)
            - Rendering : to ensure component rendered output used by react is correct (button color, placement)
        
            Libraries for component testing:
                Test Renderer: tests on native env with react-DOM dependency
                React Native Testing Library: adds fire events, query
        
        Testing User Interaction:
            Aside from rendering some UI, 
        
     */
        // Testing user interaction

            function GroceryShoppingList() {
                const [groceryItem, setGroceryItem] = useState('');
                const [items, setItems] = useState([]);
              
                const addNewItemToShoppingList = useCallback(() => {
                  setItems([groceryItem, ...items]);
                  setGroceryItem('');
                }, [groceryItem, items]);
              
                return (
                  <>
                    <TextInput
                      value={groceryItem}
                      placeholder="Enter grocery item"
                      onChangeText={(text) => setGroceryItem(text)}
                    />
                    <Button
                      title="Add the item to list"
                      onPress={addNewItemToShoppingList}
                    />
                    {items.map((item) => (
                      <Text key={item}>{item}</Text>
                    ))}
                  </>
                );
              }

              test('given empty GroceryShoppingList, user can add an item to it', () => {
                const { getByPlaceholder, getByText, getAllByText } = render(
                  <GroceryShoppingList />
                );
              
                fireEvent.changeText(
                  getByPlaceholder('Enter grocery item'),
                  'banana'
                );
                fireEvent.press(getByText('Add the item to list'));
              
                const bananaElements = getAllByText('banana');
                expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
              });
            
            /** Testing rendered output:
                    Snapshot Testing is ADV kind of testing enabled by Jest.
            */
    /** End-to-End Tests:
            Teting on the device.
            Building the app in release config and running tests against it.
            E2E testing libraries allow you to find and control elements in the screen of your app.
              eg: taping buttons and inserting input into text inputs 
            Gives highest possible confidence
              trade-offs:
                writing them is more time consuming 
                slower to run
                more prone to flakiness(randomly passes and fails without any change in the code)
            Cover only vital parts of the app
              eg: core functionality, auth, payments etc

            Detox: Is most popular framework
            Appium: comes next for iOS and Android.
              
     */

    // Detox:
    describe('Login flow', () => {
        it('should login successfully', async () => {
          await device.reloadReactNative();
      
          await element(by.id('email')).typeText('john@example.com');
          await element(by.id('password')).typeText('123456');
          await element(by.text('Login')).tap();
      
          await expect(element(by.text('Welcome'))).toBeVisible();
          await expect(element(by.id('email'))).toNotExist();
        });
      });