import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import AsycnStortage from '@react-native-async-storage/async-storage'
// let name=[];
// let data1=  {name:'akbar',age:'23'}
// let data2=  {name:'sajid',gender:'male'}
// let name=['name','akbar']
// let surname=['surname','bhoraniya']
const Asycn = () => {
    // const [data,setData]=useState('')

const saveData = async () => {
    try {
      // name.push(data1)
        //  await AsycnStortage.setItem('Data',JSON.stringify(data1));
        // await AsycnStortage.setItem('Data',JSON.stringify(data2));
        await AsycnStortage.setItem('name','akbar');

        console.log('Saved')
    } catch (error) {
        //Save error
    }
}

const getData = async () => {
  try {
      const get =await AsycnStortage.getItem('name');
      console.log('name:'+get)
  } catch (error) {
      //Save error
  }
}

const deleteData = async () => {
  try {
      await AsycnStortage.removeItem('name');
  } catch (error) {
      //Save error
  }
}
const clearAll = async () => {
  try {
      await AsycnStortage.clear();
  } catch (error) {
      //Save error
  }
}

  return (
    <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        {/* <TextInput placeholder='Enter Data'
         style={{width:'80%',height:40,borderWidth:1, marginBottom:20,paddingLeft:15}}
         value={data}
         onChangeText={setData}
        /> */}
      <TouchableOpacity style={{width:'80%',height:40,backgroundColor:'green',justifyContent:'center',alignItems:'center'}} onPress={()=>{
        saveData();
      }}>
        <Text style={{color:'#fff'}}>Save Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:'80%',height:40,backgroundColor:'green',justifyContent:'center',alignItems:'center',marginTop:30}}onPress={()=>{
        getData();
      }}>
        <Text style={{color:'#fff'}}>Get Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:'80%',height:40,backgroundColor:'green',justifyContent:'center',alignItems:'center',marginTop:30}}onPress={()=>{
        deleteData()
      }}>
        <Text style={{color:'#fff'}}>Delete Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:'80%',height:40,backgroundColor:'green',justifyContent:'center',alignItems:'center',marginTop:30}}onPress={()=>{
        clearAll()
      }}>
        <Text style={{color:'#fff'}}>Clear Data</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Asycn