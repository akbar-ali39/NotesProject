import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);

    useEffect(()=>{
        console.warn("Every time");
    },);
    useEffect(()=>{
        console.warn("one time");
    },[]);
    useEffect(()=>{
        console.warn("conditonal time");
    },[count1]);
  return (
    <View className='justify-center flex-1 items-center'>
       <View>
       <Text>Count 1 :{count1} </Text>
      <Button  title='Increment' onPress={()=>setCount1(count1+1)}/>
      <Button title='Decrement' onPress={()=>setCount1(count1-1)}/>
       </View>
      <View>
      <Text >Count 2 : {count2}</Text>
      <Button title='Increment'  onPress={()=>setCount2(count2+1)}/>
      <Button title='Decrement'  onPress={()=>setCount2(count2-1)}/>
      </View>
    </View>
  )
}

export default UseEffect