import _ from 'lodash'
import React, { useState, useContext, useEffect } from 'react'
import { View, Text, Picker, StyleSheet  } from 'react-native'
import { CardSection, Input, Button } from './common'
import { Context } from '../context/EmployeeContext'

const EmployeeForm = ({employee}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [shift, setShift] = useState('Monday')
    const [uid, setUid] = useState('')
    const { state, createEmployee, editEmployee } = useContext(Context)

    useEffect(() => {
        
        if (employee) {
            setName(employee.name) 
            setPhone(employee.phone)
            setShift(employee.shift)
            setUid(employee.uid)
        }
    }, [])

    return (
        <View>
            <CardSection> 
                <Input 
                    label="Name"
                    placeholder="Jane"
                    value={name}
                    onChangeText={name => setName(name)}
                />
            </CardSection>
                    
            <CardSection> 
                    <Input 
                    label="Phone"
                    placeholder="555-555-555"
                    value={phone}
                    onChangeText={phone => setPhone(phone)}
                    />
            </CardSection>

            <CardSection style={{ flexDirection: 'column' }}> 
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                <Picker
                style={{ flex: 1 }}
                selectedValue={shift}
                onValueChange={itemValue => setShift(itemValue)}
                >
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Saturday" value="Saturday" />
                    <Picker.Item label="Sunday" value="Sunday" />
                </Picker>
           </CardSection>

           <CardSection>
                
            { 
                !employee
                ?<Button onPress={() => {createEmployee(name, phone, shift)}}>
                    Create
                </Button>
                : <Button onPress={() => {editEmployee(name, phone, shift, uid)}}>
                    Save Changes
                </Button>
            }
                    
                
            </CardSection>
        </View>

    )
}

const styles = StyleSheet.create({
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
})
export default EmployeeForm