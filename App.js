import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import Titulo from './src/components/Titulo/Titulo';
import Formulario from './src/components/Formulario/Formulario';
import Button from './src/components/Button/Button';
import Botao from './src/components/Button/Button';
import React, { useEffect, useState } from 'react';

export default function App() {

  const [valor, setValor] = React.useState(null)
  const [meses, setMeses] = React.useState(null)
  const [resultado, setResultado] = useState(null)
  const [erro, seterro] = useState("")

  const calcularJurus = () => {
      let valorInicial = parseFloat(valor)
      let numeroDeMeses = parseInt(meses)

      if(!isNaN(valorInicial) && !isNaN(numeroDeMeses)){

        let aray = []
        let jurus = valorInicial

        for(let i = 0; i < numeroDeMeses; i++){
            jurus += jurus*0.5
            aray.push(jurus.toFixed(2))
        }
        console.log(jurus)
        setResultado(jurus)
        console.log(resultado)
      }else{
        seterro("valores invalidos")
        console.log(erro)
      }

  }

  const propsValor = {
    valor: valor,
    setValor: setValor,
    meses:meses,
    setMeses: setMeses
  }

  useEffect(() => {
      console.log(valor)
      console.log(meses)
  })
  return (
      resultado == null ?
      <View style={styles.container}>
      <View style = {styles.titulo}>
          <Titulo/>
      </View>
      <View style = {styles.containerFormulario}> 
        <View style = {styles.formulario} >
            <Formulario {...propsValor} />
        </View>
        <View style = {styles.button} >
           <Button texto = "Calcular" clicado = {() => {
              calcularJurus()
           }} />
        </View>
      </View>
    </View>:       
      <View style = {styles.resultadoContainer} >
          <View >
            <Text style = {styles.textResult} > O Jurus e de  {resultado} </Text>
          </View> 
          <View style = {styles.buttonResult}> 
               <Button  texto = {resultado?"calcular Novamente":"Calcular"} clicado = {() => {
                  setResultado(null)
               }} />
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  titulo:{
    height:150,
    justifyContent: "center",
    alignItems: "center",
  },
  containerFormulario:{
    flex: 1,
    backgroundColor: "#fff",
    borderRadius:25
  },
  formulario:{
    margin: 25,
    marginTop:30,
    marginBottom:5
  }, 
  button: {
    margin:25,
    color:"#fff"
  },
  resultadoContainer: {
    flex:1,
    justifyContent: "center",
    alignItems:"center",
  },
  textResult:{
    fontSize:30,
    fontWeight:"bold",
    color:"green"
  },
  buttonResult: {
    margin:15,
    color:"#fff",
    width:"90%"
  },

});
