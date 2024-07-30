import { TextInput, View, Text, Pressable, Button } from "react-native"
import styles from "./estiloFormulario"
import React, { useEffect } from "react"
import App from "../../../App"

export default function Formulario(props){


    return(
        <View>
            <Text style = {styles.text}> Montante </Text>
            <TextInput value={props.valor} onChangeText={props.setValor} style = {styles.input} placeholder="digite o valor" keyboardType="numeric"></TextInput>
            <Text style = {styles.text} > Montante </Text>
            <TextInput value = {props.meses} onChangeText={props.setMeses} style = {styles.input} placeholder="digite o numero de meses" keyboardType="numeric"></TextInput>
        </View>
    )
}


  
