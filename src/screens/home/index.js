import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import carro from '@images/carro.png'

const Home = () => {
  return (
    <View style={{flex:1, alignItems:"center"}}>
      <Image style ={{width:"100%", height:"50%", alignContent:"center"}} source={carro}/>
      <Text style={{color:"white", fontSize:30}}>Configuracion alias pahts para React Native</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})