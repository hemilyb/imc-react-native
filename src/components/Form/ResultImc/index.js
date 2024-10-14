import React from "react";
import { Text, View, Share, TouchableOpacity } from "react-native";
import { style } from "./style";

export default function ResultImc({ resultImc, messageResultImc }) {

  const onShare = async () => {
    await Share.share({
      message: `Meu imc hoje é: ${resultImc}`
    })
  }

  return (
    <View style={style.resultImc}>
      <View style={style.boxShare}>
        <Text style={style.info}>{messageResultImc}</Text>
        <Text style={style.number}>{resultImc}</Text>
        <TouchableOpacity
          onPress={onShare}
          style={style.shared}>
          <Text style={style.sharedText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}