import _ from 'lodash'
import React, { useState, useContext, useEffect } from 'react'
import { View, Text, Picker, StyleSheet  } from 'react-native'
import Communications from 'react-native-communications'
import { CardSection, Input, Button, Confirm } from './common'
import { Context } from '../context/EmployeeContext'

const EmployeeForm = ({employee}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [shift, setShift] = useState('Monday')
    const [uid, setUid] = useState('')
    const [showModal, setShowModal] = useState(false)
    const { state, createEmployee, editEmployee } = useContext(Context)

    useEffect(() => {
        
        if (employee) {
            setName(employee.name) 
            setPhone(employee.phone)
            setShift(employee.shift)
            setUid(employee.uid)
        }
    }, [])


    const onTextPress = (phone, shift) => {
        Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }

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

           
                
            { 
                !employee
                ?<CardSection>
                    <Button onPress={() => {createEmployee(name, phone, shift)}}>
                        Create
                    </Button>
                </CardSection>
                :<View>
                    <CardSection>
                        <Button onPress={() => {editEmployee(name, phone, shift, uid)}}>
                            Save Changes
                        </Button>
                    </CardSection>

                    <CardSection>
                        <Button onPress={() => onTextPress(phone, shift)}>
                            Text Schedule
                        </Button>
                    </CardSection>

                    <CardSection>
                        <Button onPress={() => setShowModal(!showModal)}>
                            Fire Employee
                        </Button>
                    </CardSection>

                    <Confirm
                        visible={showModal}
                    >
                        Are you sure you want to delete this?
                    </Confirm>
                </View>
            }
                    
                
            
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