import React, { useContext, useEffect } from 'react'
import { FlatList, View, Text, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { navigate } from '../navigateRef'
import { Context } from '../context/EmployeeContext'

const EmployeeScreen = ({ navigation }) => {
    const { state, fetchEmployees } = useContext(Context)

    useEffect(() => {
        console.log("CARREGANDO LISTA")
        fetchEmployees()
        console.log(state)
    }, [])

    return (
        <View>
           <FlatList
				data={state}
				renderItem={({ item }) => {
                    return(
                        <Text>Hello</Text>
                    )
                }}
				keyExtractor={(employee, index) => index.toString()}
			/>
        </View>
    )
}

EmployeeScreen.navigationOptions = {
    headerTitle: 'Employees',
    headerRight: () => (
        <Button
          onPress={() => navigate('EmployeeCreate')}
          title="Add"
          color="#007aff"
        />
    )
}

export default EmployeeScreen