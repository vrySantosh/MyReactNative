/** Async storage 
 * Persistant, asynchronuos, unencrypted key value storage system 
 * Global to the app
 * It should be used instead of LocalStorage 
 * Recomemded to use abstraction of AsyncStorage 
 * Clear JS API and provide clear error objects 
 */

import { AsyncStorage } from "react-storage";

// Persisting data

_storeData = async () => {
    try {
        await AsyncStorage.setItem(
            '@MySuperStore:key',
            'I like to save it.'
        );
    } catch (error) {
        //error saving data

    }
};

// Fetching data

_retriveData = async () => {
    try {
        const value = await AsyncStorage.getItem('TASKS');
        if (value !== null) {
            // We have data!!
            console.log(value);
        }
    } catch(error) {
        // error defining code 
    }
};

/** Methods
 * getItem()
 * setItem()
 * removeItem()
 * mergeItem()
 * clear() ; erease item for all clients and listener s 
 * getAllKeys();
 * flushGetRequest() ; flushes pending requests.
 * multiGet() //allows to batch fetch all the array given with key input
 * multiSet()
 * multiremoeve()
 * multiMerge()
 * 
 */