'https://github.com/KjellConnelly/react-native-shared-group-preferences'

/** Data sharing b/w apps in the iOS and Android 
        Used to store the data in centralized location for multiple apps
        eg: a game where the coins are shared b/w the multiple games.

        To Know:
            Doesn't work with expo
            iOS & Android only
            Xcode shared preferences -> iOS
            Public external storage -> Android
            Configuration required after npm install to access group container
            All methods returs promise, make sure your functions are async

            Format of saving the file:
                $storage/$appGroupIdentifier/data.json
*/

import SharedGroupPreferences from 'react-native-shared-group-preferences'

const appGroupIdentifier = "group.com.mytest"
const userData = {
  name: "Vin Diesel",
  age: 34,
  friends: [
    "Lara Croft",
    "Mike Meyers"
  ]
}

export default class app extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: undefined
    }

    // Not the most professional way to ask for permissions: Just ask when the app loads.
    // But for brevity, we do this here.
    if (Platform.OS == 'android') {
      this.dealWithPermissions()
    } else {
      this.saveUserDataToSharedStorage(userData)
    }
  }

  async dealWithPermissions() {
    try {
      const grantedStatus = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      ])
      const writeGranted = grantedStatus["android.permission.WRITE_EXTERNAL_STORAGE"] === PermissionsAndroid.RESULTS.GRANTED
      const readGranted = grantedStatus["android.permission.READ_EXTERNAL_STORAGE"] === PermissionsAndroid.RESULTS.GRANTED
      if (writeGranted && readGranted) {
        this.saveUserDataToSharedStorage(userData)
      } else {
        // You can either limit the user in access to the app's content,
        // or do a workaround where the user's data is saved using only
        // within the user's local app storage using something like AsyncStorage
        // instead. This is only an android issue since it uses read/write external storage.
      }
    } catch (err) {
      console.warn(err)
    }
  }

  async saveUserDataToSharedStorage(data) {
    try {
      await SharedGroupPreferences.setItem("savedData", data, appGroupIdentifier)
      this.loadUsernameFromSharedStorage()
    } catch(errorCode) {
      // errorCode 0 = There is no suite with that name
      console.log(errorCode)
    }
  }

  async loadUsernameFromSharedStorage() {
    try {
      const loadedData = await SharedGroupPreferences.getItem("savedData", appGroupIdentifier)
      this.setState({username:loadedData.name})
    } catch(errorCode) {
      // errorCode 0 = no group name exists. You probably need to setup your Xcode Project properly.
      // errorCode 1 = there is no value for that key
      console.log(errorCode)
    }
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.username ? "Loading..." : "Welcome back " + this.state.username}
        </Text>
      </View>
    )
  }
}

/** Prep work
        iOS - XCode
            Capabilities > App Groups > Add app group preexisting identifier.
        Android - Public External Storage / Shared preferences
            Public external storage:
                Any app can access and modify.
                You need permisison to access -> from PermissionAndroid module 
                From API 23+:
                <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
                <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

                1. Open ../android/app/src/main/AndroidManifest.xml and add android:requestLegacyExternalStorage="true"

                <!-- example -->
                <manifest ...>
                <application
                    ...
                android:requestLegacyExternalStorage="true">

                2. Open ../android/build.gradle and make sure targetSdkVersion is 29 or below. If you target 30+, 
                the added android:requestLegacyExternalStorage="true" will be ignored. 
                So public external storage will only work for 28 and below. But if you target 29, 
                public external storage will work for all devices.
                    buildscript {
                        ext {
                            ...
                            targetSdkVersion = 29
                        }
            Share Preferences:
                Benifit of not having to add permission prep work.
                Prefereable for extensions.
                For settings also
 */
            //Shared preferences - Android.
                try {
                    const loadedData = await SharedGroupPreferences.getItem("savedData", appGroupIdentifier, {useAndroidSharedPreferences:true})
                    this.setState({username:loadedData.name})
                  } catch(errorCode) {
                    console.log(errorCode)
                  }