import React from 'react'
import { Text, StyleSheet } from 'react-native'
import {CardSection} from './common'

const ListItem = ({ employee }) => {
    return (
        <CardSection>
            <Text style={styles.titleStyle}>{employee.name}</Text>
        </CardSection>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})

export default ListItem