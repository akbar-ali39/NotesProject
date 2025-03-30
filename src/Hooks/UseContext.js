import { View, Text, SafeAreaView } from 'react-native'
import ComA from '../componets/ComA'
import { createContext } from 'react'
export  const userData=createContext();

const UseContext = () => {
  return (
   <userData.Provider value={{
    name:'sabir',
    email:'sabir@gmail.com'
    }}>
    <SafeAreaView>
    <ComA user={{
        name:'akbar',
        email:'akbar@gmail.com'
      }}/>
   </SafeAreaView>
   </userData.Provider>
  )
}

export default UseContext