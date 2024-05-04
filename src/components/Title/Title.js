import React from "react";
import { Text, View } from "react-native";
import style from "./style";

function Title() {
  return (
    <View style={style.boxTitle}>
      <Text style={style.textTitle}>BMI Calculator</Text>
    </View>
  );
}

export default Title;
