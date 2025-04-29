import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "tic-tac-toe";
//const dummyData = [];

export async function loadData() {
    try {
        const str = await AsyncStorage.getItem(key);
        return str != null ? JSON.parse(str) : [];;

    } catch (e) {
        console.log ("Error in loadData: ", e);
    }
}

export async function saveData (data) {
    try {
        const str = JSON.stringify(data);
        await AsyncStorage.setItem(key, str);
    } catch (e) {
        console.log("Error in saveData: ", e);
    }
}