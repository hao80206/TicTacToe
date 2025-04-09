import {Pressable,Text, StyleSheet} from 'react-native'

export default function Cell ({play, onPress, isWin }) {
    return (
        <Pressable
            style={({pressed}) => 
            pressed ? [styles.cell, {opacity: 0.5}] :styles.cell} 
            onPress={play ? null: onPress}
        >
            <Text style={isWin ? [styles.text, {color: "red" }]:styles.text}>{play}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    cell: {
      width: 80,
      height: 80,
      backgroundColor: "green",
      borderWidth: 1,
      borderColor: "black",
      justifyContent: "center",
      alignItems: "center",
    },

    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },
});
