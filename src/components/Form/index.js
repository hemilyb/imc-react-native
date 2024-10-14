import React, { useState } from "react";
import { Vibration, Pressable, Keyboard, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import ResultImc from "./ResultImc";
import { style } from "./style";

export default function Form() {

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura!");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);

  function imcCalculator() {
    let heightFormat = height.replace(",", ".")
    let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
    setImcList((arr) => [...arr, {
      id: new Date().getTime(),
      imc: totalImc
    }])
    setImc(totalImc)
  }

  function verificationImc() {
    if (imc === null) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório*");
    }
  }

  function validationImc() {
    if (weight !== null & height !== null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é:");
      setTextButton("Calcular Novamente");
      setErrorMessage(null);
    } else {
      verificationImc()
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha o peso e a altura");
    }
  }

  return (
    <View style={style.formContext}>
      {imc === null ?
        <Pressable onPress={Keyboard.dismiss}
          style={style.form}>
          <Text style={style.formLabel}>Altura</Text>
          <TextInput
            style={style.formInput}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
          />
          <Text style={style.errorMessage}>{errorMessage}</Text>

          <Text style={style.formLabel}>Peso</Text>
          <TextInput
            style={style.formInput}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 75.365kg"
            keyboardType="numeric"
          />
          <Text style={style.errorMessage}>{errorMessage}</Text>
          <TouchableOpacity onPress={() => validationImc()}
            style={style.button}>
            <Text style={style.textButton}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
        :
        <View style={style.resultImc}>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />
          <TouchableOpacity onPress={() => validationImc()}
            style={style.button}>
            <Text style={style.textButton}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      }
      <FlatList
        showsVerticalScrollIndicator={false}
        style={style.imcList}
        data={imcList.reverse()}
        renderItem={({ item }) => (
          <Text style={style.itemImc}>
            <Text style={style.resultImcText}>Resultado IMC = </Text>
            {item.imc}
          </Text>
        )}
        keyExtractor={(item) => { item.id }}
      >
      </FlatList>
    </View>
  )
}