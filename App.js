import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert
} from 'react-native';

const App = () => {

  const [value, onChangeText] = useState();
  const [secondValue, onChangeSecondText] = useState();
  const [result, setResult] = useState();

  const toplama = () => {
    const firstValue = parseInt(value);
    const secondValue1 = parseInt(secondValue);
    const sonuc = firstValue + secondValue1;
    setResult(sonuc);
  }

  const cikarma = () => {
    const firstValue = parseInt(value);
    const secondValue1 = parseInt(secondValue);
    const sonuc = firstValue - secondValue1;
    setResult(sonuc);
  }

  const carpma = () => {
    const firstValue = parseInt(value);
    const secondValue1 = parseInt(secondValue);
    const sonuc = firstValue * secondValue1;
    setResult(sonuc);
  }

  const bolme = () => {
    const firstValue = parseInt(value);
    const secondValue1 = parseInt(secondValue);
    const sonuc = firstValue / secondValue1;
    setResult(sonuc);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ alignSelf: 'center' }}>
            Hesap Makinesi
          </Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 8, padding: 8 }}
            placeholder="Lütfen ilk sayınızı giriniz"
            onChangeText={text => onChangeText(text)}
            value={value} />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 8, padding: 8 }}
            placeholder="Lütfen ilk sayınızı giriniz"
            onChangeText={text => onChangeSecondText(text)}
            value={secondValue} />

          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Button
              title="+"
              onPress={() => toplama()}
            />
            <Button
              title="-"
              onPress={() => cikarma()}
            />
            <Button
              title="*"
              onPress={() => carpma()}
            />
            <Button
              title="/"
              onPress={() => bolme()}
            />
          </View>
          <Text style={{ alignSelf: 'flex-start', margin: 8 }}>
            Sonuç =  {result}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circleButton: {
    backgroundColor: 'orange',
  },
});

export default App;
