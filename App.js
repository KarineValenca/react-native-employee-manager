import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Provider as AuthProvider }  from './src/Context/AuthContext'
import firebase from 'firebase'

const App = () => {

  /*useEffect(() => {
    if (!firebase.apps.length) {
      var firebaseConfig = {
        apiKey: "AIzaSyDjajcr5mi31qsVCdChlvbjmOAweZHIqZs",
        authDomain: "manager-8173f.firebaseapp.com",
        databaseURL: "https://manager-8173f.firebaseio.com",
        projectId: "manager-8173f",
        storageBucket: "manager-8173f.appspot.com",
        messagingSenderId: "688239616444",
        appId: "1:688239616444:web:48030298a0bee226b58bb9",
        measurementId: "G-1P3XB97XQB"
      }
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }, [])*/

  return (
   <AuthProvider>
      <View>
        <Text>New App</Text>
      </View>
   </AuthProvider>
  )
}

export default App