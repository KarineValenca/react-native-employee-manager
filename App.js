import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Provider as AuthProvider }  from './src/context/AuthContext'
import firebase from 'firebase'
import LoginForm from './src/components/LoginForm'

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

  return (
    <AuthProvider>
      <View>
        <LoginForm />
      </View>
    </AuthProvider>
  )
}

export default App