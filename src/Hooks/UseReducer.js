import { View, Text, TextInput, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useReducer, useState } from 'react'

const UseReducer = () => {
    const [todo,dispatch]=useReducer(todoReducer,[]);
    const [task,setTask]=useState('');

    const todoReducer=(state,action)=>{
        switch(action.type){
            case "Add_Todo":
                return [...state,{id:Date.now().toString(),text:action.payload}]
                case "Remove_Todo":
                    return state.filter(todo.id !== action.payload);
                    default:
                        return state
        }
    }
        // const addTodo=()=>{
        //     if(task.trim === '')
        //         return;
        //     setTodo([...todo,{id:Date.now().toString(),text:task}]);
        //     setTask('');
        // }

        // const removeTask= id =>{
        //     setTodo(todo.filter(todo.id !== 1));
        // }
  return (
    <View>
      <Text style={styles.container}>To-do List</Text>
      <TextInput 
      placeholder='Add Task'
      value={task}
      onChangeText={setTask}
      style={StyleSheet.input}
      />
      <Button title='Add' onPress={()=>{
        dispatch({type:"Add_Todo",payload:task});
        setTask('')
      }}/>
      <FlatList 
      data={todo}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <View>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={()=>{
                dispatch({type:'Remove_Todo',payload:item.id})
            }}>
                <Text>Remove</Text>
            </TouchableOpacity>
        </View>
      )}
      />
    </View>
  )
}

const styles=StyleSheet.create({
    input:{
        borderWidth:2,
       borderColor:'green'
    },
    container:{
        marginTop:20,
        fontSize:30,
        fontWeight:'bold'
    },
})

export default UseReducer