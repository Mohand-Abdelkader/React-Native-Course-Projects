import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const handleInputChange = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const handelPress = () => {
    props.handleButtonPress(enteredGoalText);
    setEnteredGoalText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.goalInputContainer}>
        <Image
          source={require("../assets/images/goal-icon.png")}
          style={styles.imageStyle}
        />
        <TextInput
          onChangeText={handleInputChange}
          style={styles.textInputStyle}
          placeholder="Your Goal"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View>
            <Button title="Add Goal" onPress={handelPress} />
          </View>
          <View>
            <Button
              title="Cancel"
              color="#f31282"
              onPress={props.handleCloseModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  goalInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 16,
    flex: 1,
    backgroundColor: "#311b6b",
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
