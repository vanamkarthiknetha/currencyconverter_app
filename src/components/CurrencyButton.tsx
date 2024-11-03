import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const CurrencyButton = ({currency}:any) => {
  return (
    <View className=' flex justify-center'>
      <Text className='text-center text-xl font-bold'>{currency.flag}</Text>
      <Text className='text-white text-center text-base font-bold'>{currency.name}</Text>
    </View>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({})