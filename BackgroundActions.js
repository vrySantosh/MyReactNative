'https://www.npmjs.com/package/react-native-background-actions'
/** Background actions is react native
        Running bg actions forever.
        Scheduled bg JS service on foreground or background

        Android: HeadlessJS
        
        iOS: UIApplication beginBackgroundTaskWithName / React-native-track-player

    Deep Linking:
        Android only: To handle the incoming link when clinked in the noticfication came from outside.
        first you need to modify your android/app/src/main/AndroidManifest.xml

            <manifest ... >
              ...
              <application ... >
                  <activity
                      ...
                      android:launchMode="singleTask"> // Add this if not present
                          ...
                          <intent-filter android:label="filter_react_native">
                              <action android:name="android.intent.action.VIEW" />
                              <category android:name="android.intent.category.DEFAULT" />
                              <category android:name="android.intent.category.BROWSABLE" />
                              <data android:scheme="yourSchemeHere" />
                          </intent-filter>
              </application>
            </manifest>

        You must provide a linkingURI in the BackgroundService's options 
        that matches the scheme you just added to android/app/src/main/AndroidManifest.xml

            const options = {
                taskName: 'Example',
                taskTitle: 'ExampleTask title',
                taskDesc: 'ExampleTask description',
                taskIcon: {
                    name: 'ic_launcher',
                    type: 'mipmap',
                },
                color: '#ff00ff',
                linkingURI: 'yourSchemeHere://chat/jane', // Add this
                parameters: {
                    delay: 1000,
                },
            };
            await BackgroundService.start(veryIntensiveTask, options);                
 */

    //Eg: DeepLink: React native provide a linking class to get notified of incoming links. you JS code must 
    // then listen to the url using Reactnative Linking class:
    
        import { Linking } from 'react-native';

        Linking.addEventListener('url', handleOpenURL);

        function handleOpenURL(evt) {
            // Will be called when the notification is pressed
            console.log(evt.url);
            // do something
        }
    
    /** Events: 'expiration'
            iOS only: Listener for ios only expiration handler 
            that allow to cleanup shortly before app background time reaches 0.
    */
            //Eg: Events:

                BackgroundService.on('expiration', () => {
                    console.log('I am being closed :(');
                });

                await BackgroundService.start(veryIntensiveTask, options);