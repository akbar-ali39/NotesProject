import { View, Text, Alert, StyleSheet, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { UserCotext } from '../Main'
import axios from 'axios';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { BASE_URL } from '../../Apis/Api';

const Home = () => {
  const [notes,setNotes]=useState([]);
  const userData=useContext(UserCotext);
  const isFocused=useIsFocused()
  const navigation=useNavigation()
  useEffect(()=>{
    getNotes()
  },[isFocused])

  const getNotes=async()=>{

    try {
      const response=await axios.get(`${BASE_URL}/Notes`,{
        headers:{
          Authorization:`Bearer ${userData.token}`,
        }
      })
      
    setNotes(response.data)
    } catch (error) {
      Alert.alert("error",'Failed to Get Data')
    }
  }

  const deleteNotes=async(id)=>{
    const response=await axios.delete(`${BASE_URL}/Notes/${id}`,{
      headers:{
        Authorization:`Bearer ${userData.token}`,
      }
    })
    Alert.alert('Respose',JSON.stringify(response))
  }

  return (
    <View style={styles.container}>
      <FlatList data={notes} renderItem={({item,index})=>{
        return(
          <View style={styles.notes}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
              <Text style={styles.edit} onPress={()=>{
                navigation.navigate("EditNote",{data:item})
              }}>Edit</Text>
              <Text style={styles.delete} onPress={()=>deleteNotes(item.id)}>Delete</Text>
            </View>
        )
      }}/>
    </View>
  )
}

export default Home

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  notes:{
    width:'90%',
    borderWidth:1,
    backgroundColor:'#ccc',
    alignSelf:'center',
    marginTop:10,
    borderRadius:10,
  },
  title:{
    fontSize:30,
    margin:5,
    paddingLeft:10
  },
  content:{
    fontSize:16,
    margin:5,
    paddingLeft:10,
    marginBottom:10
  },
  edit:{
    borderWidth:1,
    margin:10,
    padding:10,
    color:'blue',
    borderColor:'blue',
    textAlign:'center'
  },
  delete:{
    borderWidth:1,
    margin:10,
    padding:10,
    color:'red',
    borderColor:'red',
    textAlign:'center'
  }
 
})