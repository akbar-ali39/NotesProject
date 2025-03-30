import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomBtn = ({title,onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn;

const styles=StyleSheet.create({
    btn:{
        width:'80%',
        height:48,
        backgroundColor:'#4b2659',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        marginTop:30,
        alignSelf:'center',
        borderRadius:10,
    },
    btnText:{
        fontSize:20,
        color:'#fff',
        fontWeight:'600'
    }
});