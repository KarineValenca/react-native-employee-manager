import React from 'react'
import { Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import {CardSection} from './common'
import { navigate } from '../navigateRef'

const ListItem = ({ employee }) => {
    const onRowPress = () => {
        navigate('EmployeeCreate', employee)
    }
    return (
        <TouchableWithoutFeedback onPress={() => onRowPress()}>
            <View>
                <CardSection>
                    <Text style={styles.titleStyle}>{employee.name}</Text>
                </CardSection>
                </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})

export default ListItem