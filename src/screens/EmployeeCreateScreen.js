import React, { useState, useContext } from 'react'
import { Card, CardSection, Input, Button } from '../components/common'
import { Picker, Text, StyleSheet } from 'react-native'
import { Context } from '../context/EmployeeContext'

const EmployeeCreateScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [shift, setShift] = useState('Monday')
    const { state, createEmployee } = useContext(Context)

    console.log(navigation.state.params)

    return (
        <Card>
           <CardSection> 
               <Input 
                label="Name"
                placeholder="Jane"
                onChangeText={name => setName(name)}
               />
           </CardSection>
                
           <CardSection> 
                <Input 
                label="Phone"
                placeholder="555-555-555"
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
               <Button onPress={() => createEmployee(name, phone, shift)}>
                   Create
               </Button>
           </CardSection>
       </Card>
    )
}

const styles = StyleSheet.create({
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
})
export default EmployeeCreateScreen