import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImagePickerExample from '../component/Imagepicker'
const Uploadfoto = () => {
  return (
    
    <View style={{flex:1}}>

      <ImagePickerExample/>
      <TouchableOpacity style={{width: 120, height:40, borderRadius: 10, marginBottom: 21, backgroundColor: 'skyblue', alignSelf: 'center', alignItems:'center', justifyContent:'center',}}>
        <Text style={{fontWeight:'bold', color: '#ffff'}}>UPLOAD</Text>
      </TouchableOpacity>
    
    </View>
    
  )
}

export default Uploadfoto

const styles = StyleSheet.create({})