import { StyleSheet, Alert, View } from 'react-native';
import {useState, useEffect} from "react"; 

import Board from "../components/Board";
import Title from "../components/Title";
import TButton from "../components/Tbutton";

import { playMove, buildBoard, getHint } from "../gameLogic/game";
import { saveGame, loadGame } from "../gameLogic/model";

export default function Home ( {navigation, route}) {
   const [board,setBoard] = useState(Array(9).fill(""));
   const [steps, setSteps] = useState([]);
   const [lastP, setLastP] = useState(0);
   const { gameId } = route?.params || {};

   const [hint, gameFinished, winCells = []] = getHint(board) || [];

   useEffect(() => {
      if(gameId) {
         const game = loadGame(gameId);
         if(game) {
            const newSteps = game.steps || [];
            setSteps(newSteps)
            setLastP(newSteps.length);
            const newBoard = buildBoard(newSteps, newSteps.length);
            setBoard(newBoard);
         }
      }
   }, [gameId]);

   const play = (idx) => {
      const newSteps = playMove(idx, steps, lastP);
      setSteps(newSteps)
      setLastP(newSteps.length);
      const newBoard = buildBoard(newSteps, newSteps.length);
      setBoard (newBoard);
   }
   const goPre = () => {
      const newLastP = lastP -1;
      setLastP(newLastP);
      const newBoard = buildBoard(steps, newLastP);
      setBoard(newBoard);
   }
   const goNext = () => {
      const newLastP = lastP +1;
      setLastP(newLastP);
      const newBoard = buildBoard(steps, newLastP);
      setBoard(newBoard);
   }

   const newGame = () => {
      setSteps([]);
      setLastP(0);
      setBoard(Array(9).fill(""))

   }

   const saveData = () => {
      Alert.alert (
         "Save Game",
         "Are you sure to save the game and start a new game?",
         [
            {
               text: 'Save',
               onPress: () => {
                  saveGame(steps, hint);
                  newGame();
               },
            },
            {
               text: "Cancel",
               style: "cancel"
            },
         ]
      );
   };

    return (
        <View style={styles.container}>
        {/* Header */}
            <Title title={"Tic Tac Toe"} />
         <View style={styles.table}>
            
            <View style={styles.buttonContainer}>
               <TButton label="<" fun={(goPre)} width ={40} enabled={lastP >0}/>
               <TButton
                  label="New Game" 
                  fun={newGame}
                  width ={140}
                  enabled={steps.length > 0}
               />
               <TButton label=">" fun={goNext} width ={40} enabled={lastP < steps.length}/>
             </View>
                
            <Title title ={hint} fontSize={20} height={50} backgroundColor="#666" />
            <Board plays={board} onPress={play} winCells={winCells}/>
             <View style={styles.buttonContainer}>
                  <TButton label="Load" fun={()=>navigation.navigate('LoadGame')}/>
                  <TButton label="Save" fun={saveData} enabled = {gameFinished}/>
                  <TButton label="Rules" fun={()=>navigation.navigate('Rules')}/>
                  <TButton label="Credits" fun={()=>navigation.navigate('Credits')}/>
             </View>
           </View>

        </View>
    );
}

const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: 'white',
      // alignItems: 'center',
      justifyContent: 'center',
    },

    table: {
      flex: 1,
      backgroundColor: '#ccc',
      margin: 10,
      justifyContent: "center",
      alignItems: 'center',
      padding: 20,
    },

    buttonContainer: {
       flexDirection: "row",
       //justifyContent: "center",
       marginBottom: 40,
       color: "blue",
       justifyContent: "space-around",
       marginHorizontal: 10,
       width: "100%",
    },


});