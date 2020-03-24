import React, { useEffect } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { Provider as AuthProvider }  from './src/context/AuthContext'
import { Provider as EmployeeProvider} from './src/context/EmployeeContext'
import firebase from 'firebase'
import LoginScreen from './src/screens/LoginScreen'
import EmployeeScreen from './src/screens/EmployeeScreen'
import EmployeeCreateScreen from './src/screens/EmployeeCreateScreen'
import { setNavigator } from './src/navigateRef'

const App = () => {

  useEffect(() => {
    console.log("effect loaded")
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDjajcr5mi31qsVCdChlvbjmOAweZHIqZs",
        authDomain: "manager-8173f.firebaseapp.com",
        databaseURL: "https://manager-8173f.firebaseio.com",
        projectId: "manager-8173f",
        storageBucket: "manager-8173f.appspot.com",
        messagingSenderId: "688239616444",
        appId: "1:688239616444:web:48030298a0bee226b58bb9",
        measurementId: "G-1P3XB97XQB"
      })
    }
  }, [])

  const switchNavigator = createSwitchNavigator(
    {
      loginFlow: createStackNavigator({
        Login: LoginScreen,
      }),
      mainFlow: createStackNavigator({
        Employee: EmployeeScreen,
        EmployeeCreate: EmployeeCreateScreen
      })
    }, {
      initialRouteName: 'loginFlow',
    })

  const App = createAppContainer(switchNavigator)
  return (
    <AuthProvider>
      <EmployeeProvider>
        <App ref={ (navigator) => { setNavigator(navigator) }} />
      </EmployeeProvider>
    </AuthProvider>
  )
}

export default App