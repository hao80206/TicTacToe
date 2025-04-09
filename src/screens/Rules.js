import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Title from "../components/Title";
import TButton from "../components/Tbutton";
import Message from "../components/message";
const rules ='tic tac toe rules';

export default function Rules({ navigation }) {
  return (
    <View style={styles.container}>
        <ScrollView>
        <Title title={"Rules"} />
        <View style={styles.table}>
            <Message message={rules}/>
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
    backgroundColor: '#fff',
    //borderColor: "black",
    justifyContent: "center",
    //alignItems: "center",
  },

  table: {
    flex: 1,
    backgroundColor: '#ccc',
    margin: 10,
    justifyContent: "center",
    alignItems: 'center',
  },
  
});
