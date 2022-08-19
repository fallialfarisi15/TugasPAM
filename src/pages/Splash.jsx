import { StyleSheet, Text, View, Image, StatusBar} from 'react-native'
import React, {useEffect} from 'react'
import { logo } from '../../assets'

const Splash = ({navigation}) => {
    useEffect(() => {
       setTimeout(() => {
         navigation.replace('MainApp');
       }, 3000);
     }, [navigation]);

  return (
    <View style={{flex:1}}>
    <View style={styles.container}>
        <StatusBar hidden={true}/>
      <Image style={styles.logo} source={logo}/>
      </View>
      <View style={styles.versi}>
        <Text style={styles.text1}>Version 1.0</Text>
      </View>
    
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    logo: {
        width: 106,
        height: 112,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFEFE',
    },
    versi: {
        justifyContent:'flex-end',
        alignItems: 'center',
        paddingBottom: 13,
        backgroundColor: '#FEFEFE',

    },
    text1: {
        fontWeight:'200',
        fontSize: 13,
    }
})