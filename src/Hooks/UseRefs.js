import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import './global.css';


const App = () => {
  const [count,setCount]=useState(0);
  const [timer,setTimer]=useState(0);
  const previousRef=useRef(0);
  const focused=useRef(null);
  const stop=useRef(null);
  useEffect(()=>{
    previousRef.current=count
  },[count]);
  useEffect(()=>{
    stop.current=setInterval(()=>{
      setTimer((priv)=>priv+1)
    },1000);
    return()=>clearInterval(stop.current);
  },[]);
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='font-semibold  text-3xl'>{`previous Count: ${count}`}</Text>
      <Text className='font-semibold  text-3xl'>{`Current Count: ${previousRef.current}`}</Text>
      <Text onPress={()=>setCount(count+1)} className='font-semibold  text-3xl'>Increase Count</Text>
      <TextInput style={style.conatiner} placeholder='Enter Opt' ref={focused}/>
      <Button title='Focused' onPress={()=>{
        focused.current.focus()
      }}/>
      <Text className='font-semibold  text-3xl'>{` timer: ${timer}`}</Text>
      <Button title='stop' onPress={()=>{
        clearInterval(stop.current)
      }}/>
    </View>
  )
}

const style=StyleSheet.create({
  conatiner:{
    borderWidth:1,
    borderColor:'blue',
    width:'90%',
    marginTop:20,
    height:50,
    fontSize:20,
    marginBottom:20
  }
})
export default App