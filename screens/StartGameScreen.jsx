import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Colors from "../constants/color";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = ({}) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [chosenNumber, setChosenNumber] = useState(null);

  const valueChangeHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetValueHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmValueHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Not a number!", "The number should between 1 and 99!", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetValueHandler,
        },
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setChosenNumber(chosenNumber);
    // the above 3 set updates will batch together,
    // so enteredValue is still accessiable,
    // order does not matter
  };

  let outputText = null;
  if (confirmed) {
    outputText = (
      <Card style={styles.summaryContainer}>
        <Text>You Seleced</Text>
        <NumberContainer>{chosenNumber}</NumberContainer>
        <Button title="START GAME" />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={valueChangeHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="RESET"
                onPress={resetValueHandler}
                color={Colors.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="CONFIRM"
                onPress={confirmValueHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {outputText}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  button: {
    width: "45%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
