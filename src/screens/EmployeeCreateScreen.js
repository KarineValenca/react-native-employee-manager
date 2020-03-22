import React, {useState} from 'react'
import { Card, CardSection, Input, Button } from '../components/common'
import { Picker, Text, StyleSheet } from 'react-native'

const EmployeeCreateScreen = () => {
    const [day, setDay] = useState('Monday')
    
    return (
        <Card>
           <CardSection> 
               <Input 
                label="Name"
                placeholder="Jane"
               />
           </CardSection>
                
           <CardSection> 
                <Input 
                label="Phone"
                placeholder="555-555-555"
                />
           </CardSection>

           <CardSection style={{ flexDirection: 'column' }}> 
                <Text style={styles.pickerTextStyle}>Shift</Text>
               <Picker
               style={{ flex: 1 }}
               selectedValue={day}
               onValueChange={itemValue => setDay(itemValue)}
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
               <Button>
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