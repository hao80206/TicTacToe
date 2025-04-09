import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Title from "../components/Title";
import TButton from "../components/Tbutton";
import Message from "../components/message";
const credits ='tic tac toe credits';

export default function Credits({ navigation }) {
  return (
    <View style={styles.container}>
        <ScrollView>
        <Title title={"Credits"} />
          <View style={styles.table}>
            
            <Message message={credits} />
            <TButton label="Back" fun={() => navigation.goBack()} />
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    //width: '100%',
    borderWidth: 3,
    backgroundColor: '#fff',
    //borderColor: "black",
    justifyContent: "center",
    //alignItems: "center",
    //paddingVertical: 20, 
  },

  table: {
    flex: 1,
    backgroundColor: '#ccc',
    margin: 10,
    justifyContent: "center",
    alignItems: 'center',
  },
  
});
