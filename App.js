import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default function App() {

  const [peso, setPeso] = React.useState(0);
  const [altura, setAltura] = React.useState(0);
  const [imc, setImc] = React.useState(null);
  const [feedback, setFeedback] = React.useState('');

  function calcular() {
    if (altura > 100) {
      setAltura(altura / 100);
    }
    if (peso > 0 && altura > 0) {
      const imc = peso / (altura * altura);
      setImc(imc.toFixed(2));
      if (imc < 18.5) {
        setFeedback('Abaixo do peso');
      } else if (imc < 25) {
        setFeedback('Peso ideal');
      } else if (imc < 30) {
        setFeedback('Sobrepeso');
      } else if (imc < 35) {
        setFeedback('Obesidade grau I');
      } else if (imc < 40) {
        setFeedback('Obesidade grau II');
      } else if (imc >= 40) {
        setFeedback('Obesidade grau III');
      }
    } else {
      setFeedback('Preencha todos os campos');
    }
  }

  return (
    <View style={styles.container} keyboardShouldPersistTaps='always' >
      <View style={styles.entradas}>
        <StatusBar style="auto" />
        <TextInput
          placeholder='Peso'
          keyboardType='numeric'
          onChangeText={(peso) => setPeso(peso)}
          style={styles.input}
        />
        <TextInput
          placeholder='Altura'
          keyboardType='numeric'
          onChangeText={(altura) => setAltura(altura)}
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        onPress={calcular}
        style={styles.button}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {
        imc > 0 ? (
          <View style={styles.resultado}>
            <Text style={styles.resultado}> {imc} </Text>
            <Text style={styles.resultado}>
              {feedback}
            </Text>
          </View>
        )
          : null
      }


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  entradas: {
    flexDirection: 'row',
  },
  input: {
    height: 80,
    width: '50%',
    fontSize: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0066cc',
  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado: {
    alignself: 'center',
    color: 'lightgray',
    fontSize: 35,
    padding: 20,
  }
});
