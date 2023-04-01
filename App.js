import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Empreinte() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Empreinte!</Text>
    </View>
  );
}

function Tickets() {
  return (
    

    
    
    <View 
    style={{borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 200,
      borderBottomLeftRadius: 200,
      position: 'absolute',
      height:150,
      width:400,
      backgroundColor:'#2f987d',
    }}>
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  
    }}>
      <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
      <Image style={{height:100, width:100, backgroundColor: 'transparent'}} source={require('./assets/Aaron.jpg')} />
      <Text>{'\n'}{'\n'}</Text>
     <Text style={{textAlign:'center'}}>Présentez votre QR code a la caisse{'\n'}
           Pour votre ticket. 
    </Text>
    <Text style={{ fontFamily: 'acmeIcon' }}>{'\u{e902}'}</Text>
    </View>

    
      
    </View>

  );
}

function Offres() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Offres!</Text>
    </View>
  );
}

function Profil() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profil!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Empreinte" component={Empreinte} />
        <Tab.Screen name="Tickets" component={Tickets} />
        <Tab.Screen name="Offres" component={Offres} />
        <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

