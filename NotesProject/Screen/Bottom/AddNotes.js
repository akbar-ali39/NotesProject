import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomBtn from '../../Components/CustomBtn'
import { BASE_URL } from '../../Apis/Api';
import axios from 'axios';
import { UserCotext } from '../Main';

const AddNotes = () => {
  const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const userData=useContext(UserCotext);

  const postNotes=async()=>{

    const data={ title,content}

    try {
      const response=await axios.post(`${BASE_URL}/Notes`,data,{
        headers:{
          Authorization:'Bearer'+userData.token,
        }
      })
      setContent('')
      setTitle('');
    Alert.alert('Success','Add Notes Successfuly');
    } catch (error) {
      Alert.alert("error",'Failed to Add Notes')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Note From</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} placeholder='Enter Note Title'/>
      <TextInput value={content} onChangeText={setContent} style={styles.input} placeholder='Enter Note Cotent'/>
      <CustomBtn onPress={postNotes} title={"Add Note"}/>
    </View>
  )
}

export default AddNotes

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  heading:{
    fontSize:30,
    alignSelf:'center',
    marginTop:30,
    fontWeight:'bold'
  },
  input:{
    borderWidth:1,
    height:48,
    width:'90%',
    alignSelf:'center',
    marginTop:20,
    borderRadius:10,
    paddingLeft:20
  }
})