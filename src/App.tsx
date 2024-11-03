import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import '../global.css';
import CurrencyButton from './components/CurrencyButton';
import { FlatList } from 'react-native';
import DATA from './data/data'

const App = () => {
  const [input, setinput] = useState('');
  const [result, setresult] = useState<any>('')
  const [currency, setCurrency] = useState({
    name: '',
    value: 0,
    flag: '',
    symbol: '',
  })

  const handleOnPress = (currency:any) => {

    if(!input || isNaN(parseFloat(input))) {
      setinput('')
      setresult('')
      return ;
    }
    setCurrency(currency)
    const value = parseFloat(input) * currency.value;
    setresult(value);


  }
  return (
    <View>
      <View className="flex flex-row items-center justify-center mt-16">
        <Text className="text-white text-3xl mr-5">₹</Text>
        <TextInput
          value={input}
          cursorColor={'black'}
          onChange={event => setinput(event.nativeEvent.text)}
          keyboardType='number-pad'
          className="w-[40%] bg-gray-300 rounded-xl text-black px-4"
        />
      </View>
      {result &&
        <View className="flex flex-row items-center justify-center mt-16">
          <Text className="text-white text-3xl mr-5">Result: {currency.symbol} {result}</Text>
        </View>}
        <FlatList
          numColumns={3}
          data={DATA}
          className='mt-10'
          renderItem={({ item }) => <TouchableOpacity onPress={()=>handleOnPress(item)} className=' bg-gray-500 rounded-xl flex justify-center h-32 w-[25%]  m-5 '>
            <CurrencyButton currency={item} />
          </TouchableOpacity>}
          keyExtractor={item => item.name}
          contentContainerStyle={{ paddingBottom: 200 }}
        />

    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
