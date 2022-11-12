/** Platform specific code
 * 1. Using "Platform module"
 * 2. Using "platform-specifi file extensions" 
 */

// ----------------Using Platform module ---------
// Detecting Platform
import { Platform, StyleSheet } from "react-native";

const styles1 = StyleSheet.create(
    {
        height: Platform.OS === 'ios' ? 200 : 100
    }
);

const styles2 = StyleSheet.create(
    {
        container : {
            flex:1,
            ...Platform.select( {
                ios: {
                    backgroundColor: 'cyan'
                },
                android: {
                    backgroundColor : 'grey'
                },
                default: {
                    backgroundColor: 'magenta'
                }
            })
        }
    }
);

// Detecting platform versions

// Android
if (Platform.Version === '25') { // version is set to android API.
    console.log('Running on nougat!')
}

// iOS

const majoriOSVersion = parseInt(Platform.Version, 100)
console.log('iOS Version' + majoriOSVersion)


/**  Platform specific extensions
 * When the platform specific code is much complex, consider spliting the code into
    two separate files. and name them accordingly react native detects it.

    eg: BigButton.android.js
        BigButton.ios.js

        then you can import the component as one component.

        import BigButton from './BigButton';

* Native-specific extension
    
    eg: Container.js // Picked by Webpack, rollup or any other Web builder.
        Container.native.js // Picked up by the React native bundle for both iOS and Android
    
        import Container from './Container';
        * configure web buldler to ignore .native.js to avaid unused code in the bundle 
        
 */
