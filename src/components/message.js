import {View,Text,StyleSheet,ScrollView} from 'react-native';

export default function Message ({message}) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>{message}</Text>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      width: "90%",
      height: "70%",
      borderWidth: 1,
      borderColor: "black",
      backgroundColor: "white",
      //alignItems: "center",
      borderRadius: 10,
      padding: 50,
    },

    text: {
        fontSize: 10,
        color: "black",
    },
});
