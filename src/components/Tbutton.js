import {View, StyleSheet, Text, Pressable} from "react-native";

export default function TButton({ label, fun = ()=> {}, width=90, enabled = true}){
    return (
        <Pressable
            style={({ pressed }) => !enabled 
            ? [styles.container, {width, backgroundColor: "#ccc"}] :
                pressed 
                    ? [styles.container, {opacity: 0.5}, {width}] :
                    [styles.container, {width, backgroundColor: enabled? "blue" : '#ccc'}]
            
        }       
        onPress={enabled?fun:null}
        >
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 90,
        height: 40,
        backgroundColor: "blue",
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
    },
})