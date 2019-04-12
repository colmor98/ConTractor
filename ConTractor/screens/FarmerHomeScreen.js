import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        TextInput,
        ImageBackground,
        Image,
        TouchableOpacity, //Works as a button
        StatusBar,
        ScrollView
} from 'react-native';

import { createStackNavigator, 
         createAppContainer 
} from 'react-navigation';

class FarmerHomeScreen extends Component {
    static navigationOptions = {
      title: 'John Doe',
      //headerRight: <View/>,
      headerLeft: null
      //headerTintColor: '#ccc' 
    }
  
    render() {
      return (
        <ScrollView>
        <View 
        //style={{flex:1, justifyContent:'center', alignItems: 'center' }}
        >
  
          <View 
          //style={{padding:10,justifyContent:'center', alignItems: 'center' }}
          >
            
            <TouchableOpacity>
              <Image 
                resizeMode='contain'
                source={require('./images/edit.png')}
                style={styles.menuItem}
                />
            </TouchableOpacity>
            
            <TouchableOpacity>
            <Image 
                resizeMode='contain'
                source={require('./images/delete.png')}
                style={styles.menuItem}
                />
            </TouchableOpacity>
          </View>
  
        </View>
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    menuItem:{
        width: 100,
        height: 100,
        backgroundColor: '#3f90fc',
        //borderRadius: 3
      }
});