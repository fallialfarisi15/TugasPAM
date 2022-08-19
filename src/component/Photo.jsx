import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native'
import React from 'react'

const Photo = (props) => {
  return (
    <View style={styles.container}>     
        <Image style={styles.image} source={{uri: props.imageUri}}/>
    </View>
          
  
  )
}

export default Photo

const styles = StyleSheet.create({
  container: {
    margin: 5,
  
  },
  image: {
    height: 231,
    resizeMode: 'cover',
    borderRadius: 10,
    
  }
})