import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { navigate } from '../navigateRef'

const EmployeeScreen = ({ navigation }) => {

    return (
        <View>
            <Text>EmployeeScreen</Text>
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