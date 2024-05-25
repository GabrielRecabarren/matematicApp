import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Button, ScrollView, SafeAreaView } from 'react-native';
import Grid from '@/components/GridProps';

export default function Desafio1() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [filledCells, setFilledCells] = useState(0);
  const [numerator, setNumerator] = useState('');
  const [denominator, setDenominator] = useState('');
  const [correctResult, setCorrectResult] = useState('');
  const [level, setLevel] = useState(0);

  const handleNumeratorChange = (value: string) => {
    setNumerator(value);
  };

  const handleDenominatorChange = (value: string) => {
    setDenominator(value);
  };

  useEffect(() => {
    const randomRows = Math.floor(Math.random() * 10) + 1;
    const randomCols = Math.floor(Math.random() * 10) + 1;
    const randomFilledCells = Math.floor(Math.random() * (randomRows * randomCols));

    setRows(randomRows);
    setCols(randomCols);
    setFilledCells(randomFilledCells);
    handleDenominatorChange(level > 3 ? '¿ ?' : (randomCols * randomRows).toString());
    setCorrectResult(randomFilledCells.toString());
  }, [level]);

  const isCorrect = () => {
    if (numerator === correctResult) {
      if (level > 3 && parseInt(denominator) === filledCells) {
        Alert.alert('Ojo, ahora también es con denominador. Intenta de nuevo.');
      } else {
        Alert.alert('Correcto');
        setLevel(level + 1);
      }
    } else {
      Alert.alert('Respuesta Incorrecta. Vuelve a intentarlo.');
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Desafío 1 : ¿Cuál es la fracción?</Text>
        <Text style={styles.textDescription}>
          Los cuadrados son originalmente azules. Según cuantos cuadrados estén pintados de verde, determina la fracción.
        </Text>
        <Text style={{ color: 'purple', fontSize: 20, textAlign:'center' }}>Nivel {level}</Text>
        <View style={{ flex: 1 }}>
          <Grid rows={rows} cols={cols} filledCells={filledCells} />
        </View>
        <View style={styles.fraccionContainer}>
          <TextInput
            style={styles.input}
            onChangeText={handleNumeratorChange}
            value={numerator}
            placeholder="¿ ?"
            keyboardType="numeric"
            accessibilityLabel="Cuantos verdes hay en relación al total de cuadrados?"
          />
          <Text style={styles.line}>_______</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleDenominatorChange}
            value={denominator}
            placeholder="Denominador"
            keyboardType="numeric"
          />
          <Button title="Enviar Respuesta" color="red" onPress={isCorrect} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop:20,
    
  },
  container: {
    flex: 1,
    margin: 10,
    
  },
  textDescription: {
    fontSize: 15,
    color: 'lightgreen',
    textAlign:'center'
  },
  line: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  fraccionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
    height: 40,
    width: 50,
    backgroundColor: 'pink',
    margin: 15,
  },
  text: {
    fontSize: 20,
    color: 'red',
    textAlign:'center'
  },
});
