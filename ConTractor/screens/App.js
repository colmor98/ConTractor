
import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        TextInput,
        ImageBackground,
        Image,
        TouchableOpacity, 
        StatusBar,
        ScrollView,
        Dimensions,
        Picker
} from 'react-native';

import { createStackNavigator, 
         createAppContainer 
} from 'react-navigation';

import {
  Calendar,
  CalendarList,
  Agenda
} from 'react-native-calendars';

import MapView from 'react-native-maps';

//import firebase from 'react-native-firebase';

//import MapView from 'react-native-maps';

//Initialize firebase
var firebase = require("firebase");
import firebase from "firebase";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyAedxRQe91tD_jubTYyZwYqzSWsH2jd4xI",
  authDomain: "contractor5.firebaseapp.com",
  databaseURL: "https://contractor5.firebaseio.com",
  storageBucket: "contractor5.appspot.com",
};
firebase.initializeApp(config);

var width = Dimensions.get('window').width

class SplashScreen extends Component {

  render() {
    return (
      <ImageBackground source={require('./images/background.jpg')} style={styles.container}>
        <Image style={styles.logo} source={require('./images/logo.png')}></Image>
      </ImageBackground>
    );
  }
}

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }
/*
  this.state = ({
    vatNumber: '',
    password:''
  })

  loginUser(vatNumber, password) => {
    try{
      firebase.auth().signInWithVATAndPassword(vatNumber,password)
    }
    catch(error){
      console.log(error.toString())
    }
  }
*/
  render() {
    return (
      <ImageBackground source={require('./images/background.jpg')} style={styles.container}>
      <StatusBar
        barStyle= "dark-content"
      />
        <Text style={styles.title}>ConTractor</Text>
        <Text style={styles.subheader}>Login to Begin Work</Text>
        <Image style={styles.logo} source={require('./images/logo.png')}></Image>
        <TextInput
            style={styles.input}
            placeholder="VAT number"
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry //Secure text as password
        />
        
        <View style={styles.btnContainer}>
            <TouchableOpacity
                    style={styles.userBtn}
                    onPress={() => this.props.navigation.navigate("FarmerHomeScreen")}
            >
                    <Text style={styles.btnText}>Farmer Login</Text>
                    <Image 
                      style={styles.btnIcon}
                      source={require('./images/contractorIcon.png')}
                    >
                    </Image>
            </TouchableOpacity>
            <TouchableOpacity
                    style={styles.userBtn}
                    onPress={() => this.props.navigation.navigate("ContractorHomeScreen")}
            >
                    <Text style={styles.btnText}>Contractor Login</Text>
            </TouchableOpacity>
            
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'#fff'}}>No Account? </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Signup")}>
          <Text style={{color:'#fff'}}>Sign Up Here</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

class FarmerHomeScreen extends Component {
  static navigationOptions = {
    title: 'John Doe',
    //headerRight: <View/>,
    headerLeft: null
  }

  render() {
    return (
      //first will display a calendar on top
      <ImageBackground source={require('./images/background.jpg')} style={styles.container}>
      
      <ScrollView>
        <View style={styles.menuDiv}>
        
        <View style={styles.menuItem} //Calendar Button
        >
          <TouchableOpacity 
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          onPress={() => this.props.navigation.navigate("FarmerCalendarScreen")}
          >
            <Image source={require('./images/calendar.png')} style={styles.menuImage}>
            </Image>
            
          </TouchableOpacity>
          <Text style={{color:'#fff', textAlign: 'center'}}>Calendar</Text>
        </View>

        <View style={styles.menuItem} //Job Button
        >
          <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./images/jobList.png')} style={styles.menuImage}>
              
            </Image>
          </TouchableOpacity>
          <Text style={{color:'#fff', textAlign: 'center'}}>Job List</Text>
        </View>
        
        <View style={styles.menuItem} //Map Button
        >
          <TouchableOpacity 
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          onPress={() => this.props.navigation.navigate("FarmerMapScreen")}
          >
            <Image source={require('./images/map.png')} style={styles.menuImage}>
            </Image>
          </TouchableOpacity>
          <Text style={{color:'#fff', textAlign: 'center'}}>My Farm</Text>
        </View>

        <View style={styles.menuItem} //Profile Button
        >
          <TouchableOpacity 
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          onPress={() => this.props.navigation.navigate("")}
          >
            <Image source={require('./images/farmerIcon.png')} style={styles.menuImage}>
            </Image>
          </TouchableOpacity>
          <Text style={{color:'#fff', textAlign: 'center'}}>My Profile</Text>
        </View>

        <View style={styles.menuItem} //Field Button
        >
          <TouchableOpacity 
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          onPress={() => this.props.navigation.navigate("")}
          >
            <Image source={require('./images/field.png')} style={styles.menuImage}>
            </Image>
          </TouchableOpacity>
          <Text style={{color:'#fff', textAlign: 'center'}}>Field List</Text>
        </View>


      </View>

      </ScrollView>
      </ImageBackground>
    );
  }
}

class FarmerJobScreen extends Component {
  static navigationOptions = {
    title: 'John Doe',
    //headerRight: <View/>,
    headerLeft: null
    //headerTintColor: '#ccc' 
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.menuDiv}>
        
          <View style={styles.menuItem} //Edit Button
          >
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('./images/edit.png')} style={styles.menuImage}>
                
              </Image>
            </TouchableOpacity>
            <Text style={{color:'#fff', textAlign: 'center'}}>Edit Job</Text>
          </View>
          <View style={styles.menuItem} //Delete Button
          >
          <TouchableOpacity >
              <Image source={require('./images/delete.png')} style={styles.menuImage}>
                
              </Image>
            </TouchableOpacity>
            <Text style={{color:'#fff', textAlign: 'center'}}>Delete Job</Text>
          </View>
          <View style={styles.menuItem} // Job Quote
          >
          <TouchableOpacity >
              <Image source={require('./images/quote.png')} style={styles.menuImage}>
                
              </Image>
            </TouchableOpacity>
            <Text style={{color:'#fff', textAlign: 'center'}}>Job Quote</Text>
          </View>
          <View style={styles.menuItem} //Job Status
          >
          <TouchableOpacity >
              <Image source={require('./images/status.png')} style={styles.menuImage}>
                
              </Image>
            </TouchableOpacity>
            <Text style={{color:'#fff', textAlign: 'center'}}>Job Status</Text>
          </View>
          <View style={styles.menuItem} //Invoice
          >
          <TouchableOpacity >
              <Image source={require('./images/invoice.png')} style={styles.menuImage}>
                
              </Image>
            </TouchableOpacity>
            <Text style={{color:'#fff', textAlign: 'center'}}>Job Invoice</Text>
          </View>
          <View style={styles.menuItem} //Calendar
          >
          <TouchableOpacity >
              <Image source={require('./images/calendar.png')} style={styles.menuImage}>
                
              </Image>
            </TouchableOpacity>
            <Text style={{color:'#fff', textAlign: 'center'}}>Calendar</Text>
          </View>
          <View style={styles.menuItem} //Contact
          >
          <TouchableOpacity >
              <Image source={require('./images/contact.png')} style={styles.menuImage}>
                
              </Image>
            </TouchableOpacity>
            <Text style={{color:'#fff', textAlign: 'center'}}>Job Contact</Text>
          </View>
          <View style={styles.menuItem} //Address
          >
          <TouchableOpacity >
              <Image source={require('./images/address.png')} style={styles.menuImage}>
                
              </Image>
            </TouchableOpacity>
            <Text style={{color:'#fff', textAlign: 'center'}}>Job Address</Text>
          </View>
          <View style={styles.menuItem} //Instructions
          >
          <TouchableOpacity >
              <Image source={require('./images/checklist.png')} style={styles.menuImage}>
                
              </Image>
            </TouchableOpacity>
            <Text style={{color:'#fff', textAlign: 'center'}}>Job Checklist</Text>
          </View>
          <View style={styles.menuItem} //Required
          >
          <TouchableOpacity >
              <Image source={require('./images/required.png')} style={styles.menuImage}>
                
              </Image>
            </TouchableOpacity>
            <Text style={{color:'#fff', textAlign: 'center'}}>Job Requirements</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}


class ContractorHomeScreen extends Component {
  static navigationOptions = {
    title: 'Padraig McNulty',
    //headerRight: <View/>,
    headerLeft: null
  }

  render() {
    return (
      <ImageBackground source={require('./images/background.jpg')} style={styles.container}>
      <ScrollView>
      <View style={styles.menuDiv}>
        
          <View style={styles.menuItem} //Edit Button
          >
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('./images/contractorIcon.png')} style={styles.menuImage}>
              </Image>
              
            </TouchableOpacity>
            <Text style={{color:'#fff', textAlign: 'center'}}>Profile</Text>
          </View>

          <View style={styles.menuItem} //Edit Button
          >
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('./images/checklist.png')} style={styles.menuImage}>
                
              </Image>
            </TouchableOpacity>
            <Text style={{color:'#fff', textAlign: 'center'}}>Diary</Text>
          </View>
          
          <View style={styles.menuItem} //Edit Button
          >
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('./images/farmerIcon.png')} style={styles.menuImage}>
              </Image>
            </TouchableOpacity>
            <Text style={{color:'#fff', textAlign: 'center'}}>My Job List</Text>
          </View>
        </View>

        <Text style={{color:'#fff', textAlign: 'center'}}>More Jobs:</Text>
        </ScrollView>      
        </ImageBackground>  
    );
  }
}

class SignupScreen extends Component {
  static navigationOptions = {
    //title: 'Sign Up',
    //headerRight: <View/>
    header: null
  }
  constructor(props){
    super(props)
    this.state={
      accountType:0
    }
  }
/*
  this.state = ({
    email: '',
    password:''
  })

  signUpUser(email,password) => {
    try{
      if(this.state.password.length < 6){
        alert("Please create a password greater than 6 characters")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email,password)
    }
    catch(error){
      console.log(error.toString())
    }
  }


validate = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  if(reg.test(text) === false)
  {
  console.log("Email is Not Correct");
  this.setState({email:text})
  return false;
    }
  else {
    this.setState({email:text})
    console.log("Email is Correct");
  }
  }

    <TextInput
      placeholder="Email ID"
      onChangeText={(text) => this.validate(text)}
      value={this.state.email}
    />

const validationSchema = validationSchemacheck.object().shape({
  password: validationSchemacheck
  .string()
  .label('Password')
  .required()
  .min(6, 'Must be at least 6 characters')
  .max(15, 'Try a shorter password')
  confirmPassword: validationSchemacheck
  .string()
  .required()
  .label('Confirm Password')
  .test('passwords-match','Passwords must match', function(value{
    return this.parent.password ===value;
  }))
})
*/
  render() {
    return (
      <ImageBackground source={require('./images/background.jpg')} style={styles.container}>
      <StatusBar
        barStyle= "light-content"
      />
      <ScrollView>
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.title}>ConTractor</Text>

          <Text style={{color:'#fff'}}>Account Type:</Text>
          <Picker
            style={{ flex: 1, alignItems: 'center', width:"90%", height:25, backgroundColor:'#fff'}}
            selectedValue={this.state.accountType}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({accountType: itemValue})}>
            <Picker.Item value="F" label="Farmer"/>
            <Picker.Item value="C" label="Contractor"/>
          </Picker>
          <Text style={{color:'#fff'}}>First Name:</Text>
          <TextInput
              style={styles.input}
              placeholder="John"
          />
          <Text style={{color:'#fff'}}>Surname:</Text>
          <TextInput
              style={styles.input}
              placeholder="Doe"
          />
          <Text style={{color:'#fff'}}>Email Address:</Text>
          <TextInput
              style={styles.input}
              placeholder="johndoe123@email.com"
          />
          <Text style={{color:'#fff'}}>VAT Number:</Text>
          <TextInput
              style={styles.input}
              placeholder="1234567FA"
          />
          <Text style={{color:'#fff'}}>Mobile Number:</Text>
          <TextInput
              style={styles.input}
              placeholder="087 123 4567"
          />
          <Text style={{color:'#fff'}}>Password:</Text>
          <TextInput
              style={styles.input}
              placeholder="Password123"
          />
          <Text style={{color:'#fff'}}>Confirm Password:</Text>
          <TextInput
              style={styles.input}
              placeholder="Password123"
          />

          <TouchableOpacity
                      style={styles.userBtn}
                      onPress={() => alert("Account Created")}
                     
                      onPress={() => this.props.navigation.navigate("Home")}
              >
                      <Text style={styles.btnText}>Sign Up</Text>
              </TouchableOpacity>
          
        </View>
      </ScrollView>
      </ImageBackground>
    );
  }
}

class FarmerCalendarScreen extends Component {
  static navigationOptions = {
    //headerRight: <View/>,
    headerLeft: null
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar
        barStyle= "light-content"
      />

        <CalendarList
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}

          onDayPress={(day) => {console.log('selected day', day)}}
        />
      </View>
    );
  }
}

class FarmerMapScreen extends Component {
  static navigationOptions = {
    title: 'My Farm',
    //headerRight: <View/>,
    headerLeft: null
  }

  render() {
    return (
      <ImageBackground source={require('./images/background.jpg')} style={styles.container}>
      
      </ImageBackground>
    );
  }
}

const RootStack = createStackNavigator(
  {
    SplashScreen: {screen: SplashScreen},
    Home: {screen: HomeScreen},
    FarmerHomeScreen: {screen: FarmerHomeScreen},
    FarmerJobScreen: {screen: FarmerJobScreen},
    FarmerCalendarScreen: {screen: FarmerCalendarScreen},
    FarmerMapScreen: {screen: FarmerMapScreen},
    ContractorHomeScreen: {screen: ContractorHomeScreen},
    Signup: {screen: SignupScreen}
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#045dea'
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        textAlign: "center",
        flex: 1
      }
    }
  }
  
);



const AppContainer = createAppContainer(RootStack);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#575a5e'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
    color: '#FFFFFF',
    //textAlignVertical: 'top',
    textDecorationLine: 'underline',
    //textDecorationColor: '#045dea', //only works on iOS
  },
  subheader: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 20,
    borderRadius: 12,
    textAlign: "center"
  },
  btnContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    width: "90%"
  },
  userBtn: {
    backgroundColor: '#045dea',
    padding: 15,
    width: "45%",
    borderRadius: 12
  },
  btnText:{
    fontSize: 18,
    textAlign: "center",
    color: '#fff',
  },
  logo: {
    flex: 1,
    width: 285,
    height: 305,
    resizeMode: 'contain'
  },
  btnIcon:{
    flex: 1,
    width: "10%",
    height: "100%",
    resizeMode: 'contain'
  },
  menuDiv:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuItem:{
    width: width/3-15,
    height: 120,
    backgroundColor: '#3f90fc',
    margin: 7,
    borderRadius: 25,
    resizeMode: 'contain'
  },
  menuImage:{
    width: '90%',
    height: '90%',
    margin: 5
  },
 imgBtn:{
   width: '100%',
   height: 300,
   borderRadius: 10,
   marginTop: 10,
   alignItems: 'center'
 },
 map: {
  ...StyleSheet.absoluteFillObject,
  height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
  
});
