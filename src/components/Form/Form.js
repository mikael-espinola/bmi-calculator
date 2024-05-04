import React, { useState } from "react";

import {
  FlatList,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import ResultBmi from "./resultBmi/ResultBmi";
import style from "./style";

function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageBmi, setMessageBmi] = useState("Set your Height and Weight");
  const [bmi, setBmi] = useState(null);
  const [textButton, setTextButton] = useState("Calculate");
  const [errorMessage, setErrorMessage] = useState(null);
  const [bmiList, setBmiList] = useState([]);

  const BmiCalculate = () => {
    let heightFormat = height.replace(",", ".");
    let weightFormat = weight.replace(",", ".");
    let totalBmi = (weightFormat / (heightFormat * heightFormat)).toFixed(2);
    setBmiList((arr) => [...arr, { id: new Date().getTime(), bmi: totalBmi }]);
    setBmi(totalBmi);
  };

  const verificationBmi = () => {
    if (bmi === null) {
      Vibration.vibrate();
      setErrorMessage("Required Field*");
    }
  };

  const getDate = (value) => {
    const date = new Date(value);
    const year = date.getFullYear();
    const day = date.getDay();
    const mounth = date.getMonth();
    return `${day}/${mounth}/${year}`;
  };

  const validationBmi = () => {
    if (weight !== null && height !== null) {
      BmiCalculate();
      setHeight(null);
      setWeight(null);
      setMessageBmi("Your BMI is:");
      setTextButton("Calculate again");
      setErrorMessage(null);
      return;
    }
    verificationBmi();
    setBmi(null);
    setTextButton("Calculate");
    setMessageBmi("Set your Height and Weight ");
  };

  return (
    <View style={style.formContent}>
      {bmi === null ? (
        <Pressable onPress={Keyboard.dismiss} style={style.form}>
          <Text style={style.formLabel}>Height</Text>
          <Text style={style.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={style.input}
            onChangeText={setHeight}
            placeholder="Ex.: 1.75"
            keyboardType="numeric"
          ></TextInput>
          <Text style={style.formLabel}>Weight</Text>
          <Text style={style.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={style.input}
            onChangeText={setWeight}
            placeholder="Ex.: 76.5"
            keyboardType="numeric"
          ></TextInput>
          <TouchableOpacity
            style={style.buttomCalculator}
            onPress={() => validationBmi()}
          >
            <Text style={style.textButtomCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={style.exhibitionResultBmi}>
          <ResultBmi messageResultBmi={messageBmi} resultBmi={bmi} />
          <TouchableOpacity
            style={style.buttomCalculator}
            onPress={() => validationBmi()}
          >
            <Text style={style.textButtomCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={style.listBmi}
        data={bmiList.slice().reverse()}
        renderItem={({ item }) => {
          return (
            <>
              <Text style={style.resultBmiItem}>
                BMI result ={" "}
                <Text style={style.textResultItemList}>{item.bmi}</Text>
              </Text>
              <Text>{`${getDate(item.id)}`}</Text>
            </>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Form;
