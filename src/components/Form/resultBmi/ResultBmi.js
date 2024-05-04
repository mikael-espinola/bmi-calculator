import React from "react";
import { Share, Text, TouchableOpacity, View } from "react-native";
import style from "./style";

function ResultBmi(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: `My BMI today is: ${props.resultBmi}`,
    });
  };
  return (
    <View style={style.contextBmi}>
      <View style={style.boxShareButton}>
        <Text style={style.information}>{props.messageResultBmi}</Text>
        <Text style={style.resultBmi}>{props.resultBmi}</Text>
        <TouchableOpacity onPress={onShare} style={style.shared}>
          <Text style={style.shraredText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ResultBmi;
