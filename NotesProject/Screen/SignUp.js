import { View,Text,StyleSheet,TextInput,TouchableOpacity, Alert,} from 'react-native';
  import React, {useState} from 'react';
  import CustomBtn from '../Components/CustomBtn';
  import { useNavigation } from '@react-navigation/native';
  import axios from 'axios'
import { BASE_URL } from '../Apis/Api';
  
  const SignUp = () => {
    const [name,setName]=useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation=useNavigation()

    const RegisterUser=async()=>{
      if(!name || !email || !password){
        Alert.alert('Error',"please fill all data" )
        return 
      }

      const data={ name,email,password}

      try {
        const response=await axios.post(`${BASE_URL}/Users`,data)
      Alert.alert('Success','Account created Successfuly');
      navigation.navigate('Login');
      } catch (error) {
        Alert.alert("error",'Failed to Success')
      }
    }
  
    return (
          <View style={styles.Container}>
        <Text style={styles.title}> Create New Account</Text>
        <TextInput
          placeholder="Enter Name"
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
      <TextInput
          placeholder="Enter E-Mail"
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Enter Password"
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <CustomBtn title={'Create Account'} onPress={RegisterUser}/>
  
        <Text style={styles.signupText} onPress={()=>{
           navigation.navigate('Login')
        }}> Already have an Account
          <Text style={styles.signUp}> Login</Text></Text>
      </View>
    );
  };
  
  export default SignUp;
  
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor:'#fff'

    },
    title: {
      fontSize: 30,
      fontWeight: '600',
      alignSelf: 'center',
      marginTop: 100,
      marginBottom: 30,
      color:'black',

    },
    input: {
      width: '80%',
      alignSelf: 'center',
      height: 48,
      borderWidth: 1,
      paddingLeft: 20,
      borderRadius: 10,
      marginTop: 25,
      color:"black"
    },
    signupText:{
      alignSelf:'center',
      marginTop:20,
    },
    signUp:{
      textDecorationLine:'underline',
      fontSize:17,
      fontWeight:'600',
      color:'blue'
    }
  });
  