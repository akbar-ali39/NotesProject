import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import axios from 'axios';
import { UserCotext } from './Main';
import { BASE_URL } from '../Apis/Api';
import CustomBtn from '../Components/CustomBtn';
import { useNavigation, useRoute } from '@react-navigation/native';


const EditNote = () => {
    const userData=useContext(UserCotext);
    const route=useRoute();
    const noteData=route.params?.data || {title:'',content:'',id:''};
    const [title,setTitle]=useState(noteData.title);
    const [content,setContent]=useState(noteData.content);
    const navigation=useNavigation();

  const postNotes=async()=>{

    const data={ title,content}

    try {
      const response=await axios.put(`${BASE_URL}/Notes/${route.params.data.id}`,data,{
        headers:{
          Authorization:`Bearer ${userData.token}`,
        }
      })
      setContent('')
      setTitle('');
      navigation.goBack();
    Alert.alert('Success','Add Notes Successfuly');
    } catch (error) {
      Alert.alert("error",'Failed to Add Notes')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Note From</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} placeholder='Enter Note Title'/>
      <TextInput value={content} onChangeText={setContent} style={styles.input} placeholder='Enter Note Content'/>
      <CustomBtn onPress={postNotes} title={"Update Note"}/>
    </View>
  )
}

export default EditNote;

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