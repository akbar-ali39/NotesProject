import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

const UseCallBaack = () => {
    const [count,setCount]=useState(0);

    const fetchData=useCallback(()=>{
        console.log('Featching Data...');
    },[]);
    useEffect(()=>{
        fetchData();

    },[fetchData]);
  return (
    <View style={styles.container}>
      <Text>UseCallBaack</Text>
      <Text>count:{count}</Text>
      <Button onPress={()=>setCount(count+1)} title='Incraese'/>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
    }
})

export default UseCallBaack