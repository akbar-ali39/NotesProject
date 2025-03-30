import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
Icon.loadFont();
import {Formik} from 'formik';
import * as Yup from 'yup';

const From = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [education, setEducation] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'School', value: 'School'},
    {label: 'Graduate', value: 'Graduate'},
    {label: 'Post Graduate', value: 'Post_Graduate'},
    ]);
  const [isStudent, setIsStudent] = useState(false);
  const [age, setAge] = useState('');
  const [term, setTerm] = useState(false);

  const submit = () => {
    const fromData = {
      name,
      email,
      password,
      education : education || 'Not Selected',
      isStudent,
      age,
      term,
    };
    console.log('Sign Up Data', fromData);
  };

  return (
    <SafeAreaView style={styles.container}>
    <Formik initialValues={
      {
        name:'',
        email:'',
        password:'',
        education:'',
        isStudent:false,
        ageGroup:'',
        term:false
      }
    } validationSchema={Yup.object({
      name:Yup.string().min(3,"Name is to short").required("Name is required"),
        email:Yup.string().email("Enter valid Email").required("Email is required"),
        password:Yup.string().min(3,"password is to short").max(8,"password is to long").required("Password is required"),
        education:Yup.string().required("education is required"),
        ageGroup:Yup.string().required("Age Group is required"),
        term:Yup.boolean().oneOf([true],"Term should be checked")
    })} onSubmit={(values)=>{
      Alert.alert('Values',JSON.stringify(values));
    }}>
      {
        ({values,setFieldValue,handleSubmit,errors,dirty,isValid,resetForm})=>{
          return(
            <ScrollView>
        <View>
          <Text style={styles.text}>Simple From Validation</Text>

          {/* Input Text */}
          <TextInput
            style={styles.inputName}
            placeholder="Name"
            value={values.name}
            onChangeText={(txt)=>setFieldValue('name',txt)}
          />
          {errors.name && <Text style={{color:'red',marginLeft:22}}>{errors.name}</Text>}
          <TextInput
            style={styles.inputName}
            placeholder="E-Mail"
            value={values.email}
            onChangeText={(txt)=>setFieldValue('email',txt)}
            keyboardType='email-address'
          />
          {errors.email && <Text style={{color:'red',marginLeft:22}}>{errors.email}</Text>}
          <TextInput
            style={styles.inputName}
            placeholder="Password"
            value={values.password}
            onChangeText={(txt)=>setFieldValue('password',txt)}
            secureTextEntry
          />
          {errors.password && <Text style={{color:'red',marginLeft:22}}>{errors.password}</Text>}

            {/* DropDrwn */}

          <View style={{width: '90%', alignSelf: 'center', marginTop: 14}}>
          <DropDownPicker 
          value={values.education}
          open={open}
          items={items}
          setOpen={setOpen}
          setValue={(callback)=>setFieldValue('education',callback(values.education))}
          setItems={setItems}
          placeholder='Select Education level'
          style={styles.dropdown}
          />
          {errors.education && <Text style={{color:'red',marginLeft:22}}>{errors.education}</Text>}
          </View>

          {/* Switch */}

          <View style={styles.switch}>
            <Text style={styles.students}>
              Are You a Student?
              <Switch
                style={{
                  transform: [{scaleX: 1.2}, {scaleY: 1.2}],
                  paddingLeft: 140,
                }}
                thumbColor={isStudent ? '#f5dd4b' : '#f4f3f4'}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                value={values.isStudent}
                onValueChange={value=>setFieldValue('isStudent',value)}
              />
            </Text>
          </View>

          {/* Age Group */}

            <View style={styles.agecontainer}>
                <Text style={styles.label}>Select Age Group</Text>
                {['16-25','26-35','35+'].map((ageGroup)=>(
                    <TouchableOpacity key={ageGroup} style={styles.ageOption} onPress={()=>setFieldValue("ageGroup",ageGroup)}>
                       <Icon 
                       name={values.ageGroup === ageGroup ? 'dot-circle-o' : 'circle-o'}
                       size={25}
                       color="#0d5cdb"
                       />     
                       <Text style={styles.ageText}>{ageGroup}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            {errors.ageGroup && <Text style={{color:'red',marginLeft:22}}>{errors.ageGroup}</Text>}

            {/* Trem & Condition */}

            <TouchableOpacity onPress={()=>setFieldValue("term",!term)} style={styles.termsContainer}>
                <Icon name={values.term?'check-square':'square-o'} size={20} color='blue' />
                <Text style={styles.termsText}>I accept a Term & Condition</Text>
            </TouchableOpacity>
            {errors.term && <Text style={{color:'red',marginLeft:22}}>{errors.term}</Text>}

            {/* Submit  Button */}

            <TouchableOpacity disabled={!dirty || !isValid} style={[styles.btn,{backgroundColor: !dirty || !isValid? 'gray' : 'green'}]} onPress={handleSubmit}>
                <Text style={styles.btntext}>SignUp</Text>
            </TouchableOpacity>

            {/* Reset Button */}

            <TouchableOpacity style={styles.btn2} onPress={resetForm}>
                <Text style={styles.btntext}>Reset</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
          )
        }
      }
      </Formik>
    </SafeAreaView>
  );
};

export default From;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    marginTop: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputName: {
    borderWidth: 1,
    marginTop: 14,
    height: 45,
    width: '90%',
    alignSelf: 'center',
    paddingLeft: 15,
    fontSize: 18,
    borderRadius: 7,
  },
  students: {
    fontWeight: '400',
    marginTop: 10,
    marginLeft: 30,
    fontSize: 18,
  },
  btn:{
    height:45,
    width:'90%',
    backgroundColor:'green',
    borderRadius:7,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  btntext:{
    fontSize:20,
    color:'#fff',
  },
  btn2:{
    height:45,
    width:'90%',
    backgroundColor:'red',
    borderRadius:7,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  agecontainer:{
    marginTop: 20,
    marginLeft: 30,
  },
  ageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '400',
    marginRight: 10,
  },
  ageText: {
    fontSize: 18,
    marginLeft: 10,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 30,
  },
  termsText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  dropdown:{
    dropdown: {
      backgroundColor: '#fff',  // Background color of the dropdown
      borderColor: '#ccc',  // Border color
      borderWidth: 1,
      borderRadius: 7,
      paddingHorizontal: 10,
      width: '90%',
      alignSelf: 'center',
    },
  }
})
