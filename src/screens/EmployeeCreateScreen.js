import React, { useState, useContext } from 'react'
import { Card, CardSection, Button } from '../components/common'
import { Context } from '../context/EmployeeContext'
import EmployeeForm from '../components/EmployeeForm'

const EmployeeCreateScreen = ({ navigation }) => {

    return (
        <Card>
            <EmployeeForm  employee={navigation.state.params} />
           
       </Card>
    )
}


export default EmployeeCreateScreen