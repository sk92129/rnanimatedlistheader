import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AnimatedHeader from 'react-native-animated-header';


getListItems = count => {
  const items = [];
  let i = 0;

  while (i < count) {
    i++;
    items.push(
      <View key={i} style={{ backgroundColor: i % 2 === 0 ? '#eee5ff' : '#ceebfd', height: 64 }}>
        <Text style={{ color: '#999' }}>{`List Item ${i}`}</Text>
      </View>
    );
  }

  return items;
};

export default class App extends Component {

  render() {
    return (
      <AnimatedHeader
      style={{flex: 1 }}
      backText='Back'
      title='Happy coding'
      renderLeft={() => (<Icon name='close' style={{ marginLeft: 20 }} />)}
      renderRight={() => (<Icon name='apple' style={{ marginRight: 20 }} />)}
      backStyle={{ marginLeft: 10 }}
      backTextStyle={{fontSize: 14, color: '#000'}}
      titleStyle={{ fontSize: 22, left: 20, bottom: 20, color: '#000' }}
      headerMaxHeight={200}
      toolbarColor='#FFF'
      disabled={false}
      >

        <ScrollView>
          {getListItems(100)}
        </ScrollView>

      </AnimatedHeader>
    );
  }
  }

