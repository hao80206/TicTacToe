import {View,Text, StyleSheet} from 'react-native'
//import colors from '../constants/color'

export default function Title ({
    title,
    fontSize = 30,
    height = 60,
    backgroundColor = "green",
    }) {
    return (
        <View style={[styles.container, {backgroundColor, height }]}>
            <Text style={[styles.text, {fontSize} ]}>{title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 80,
      backgroundColor: "green",
      borderWidth: 1,
      borderColor: "black",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 50,
    },

    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
});
