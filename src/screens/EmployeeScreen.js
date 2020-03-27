import _ from 'lodash'
import React, { useContext, useEffect } from 'react'
import { FlatList, View, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { navigate } from '../navigateRef'
import { Context } from '../context/EmployeeContext'
import ListItem from '../components/ListItem'

const EmployeeScreen = ({ navigation }) => {
    const { state, fetchEmployees } = useContext(Context)

    useEffect(() => {
        fetchEmployees()
    }, [])


    const mapStateToObject = state => {
        const employees = _.map(state, (val, uid) => {
            return { ...val, uid}
        })
        return { employees } 
    }

    const employees = mapStateToObject(state)
    return (
        <View>
           <FlatList
                data={employees.employees}
                keyExtractor={employee => employee.uid}

                renderItem={({ item }) => {
                    return(
                        <ListItem employee={item} />
                    )
                }}
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