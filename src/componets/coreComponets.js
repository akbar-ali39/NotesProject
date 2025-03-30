import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  SectionList,
} from 'react-native';
import React from 'react';
import './global.css';

const App = () => {
  return (
    <ScrollView>
      <Text>App</Text>
      <Image
        source={{
          uri: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
        }}
        resizeMode="stretch"
        className="h-96 w-96"
      />
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={({item, index}) => {
          return (
            <View className="m-3 p-4 bg-slate-300 justify-center items-center w-50 h-50 border-cyan-700 border">
              <Text>{'Item ' + item}</Text>
            </View>
          );
        }}
      />
      <SectionList
        sections={[
          {data: [1, 1, 1, 1, 1], title: 'clothes'},
          {data: [2, 2, 2, 2, 2], title: 'mobile'},
          {data: [3, 3, 3, 3, 3], title: 'laptop'},
        ]}
        renderItem={({item, index}) => {
          return (
            <View className="m-3 p-4 bg-slate-700 justify-center items-center w-50 h-50 border-cyan-900 border text-white">
              <Text>{'Item' + item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({section: {title}}) => {
          return (
            <View className='justify-center items-center m-4 w-50 h-50 border-gray-500 border p-4 text-white bg-gray-500'>
              <Text>
                {title}
              </Text>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

export default App;
