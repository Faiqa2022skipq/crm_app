import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Button1 from '../../components/Button1'
import Button from '../../components/Button'
import Button2 from '../../components/Button2'
import { useSelector } from 'react-redux'
import { useUpdateFields } from '../hooks'
import { useNavigation } from "@react-navigation/native";

const Form = ({ disabled = false, onSubmit }) => {
    const {navigate} = useNavigation();
    const { fields, setFormField } = useUpdateFields()
const handleSubmit = () =>{
    onSubmit();
    navigate("Welcome")
}
    const {
        first_name,
        last_name,
        active,
        region,
    } = fields
    const regions = useSelector((s) => s.customer.list.regions);
    
    return (
        <View style={{ margin: '5%' }}>
            <View style={{ height: 25, width: '100%' }}></View>
            <Text style={styles1.text}>Enter First Name:</Text>

            <TextInput
                key={'first_name'}
                placeholder='First Name'
                value={first_name}
                style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
                onChangeText={setFormField('first_name')}
            />

            <View style={{ height: 15, width: '100%' }}></View>
            <Text style={styles1.text}>Enter Last Name:</Text>

            <TextInput
                key={'last_name'}
                placeholder='Last Name'
                value={last_name}
                style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
                onChangeText={setFormField('last_name')}
            />

            <View style={{ height: 25, width: '100%' }}></View>

            <Text style={styles1.text}>{'Active?'}</Text>

            <Button2
                key={'active'}
                text={'active'}
                reverse={active === true}
                onPress={() => setFormField('active')(true)}
            />

            <Button2
                key={'inactive'}
                text={'inActive'}
                reverse={active === false}
                onPress={() => setFormField('active')(false)}
            />

            <View style={{ height: 25, width: '100%' }}></View>

            <Text style={styles1.text}>{'Region:'}</Text>

            <View style={{ height: 15, width: '100%' }}></View>

            <Button1
                key={'South East'}
                text={'South East'}
                reverse={region === 'South East'}
                onPress={() => setFormField('region')('South East')}
            />

            <Button1
                key={'South West'}
                text={'South West'}
                reverse={region === 'South West'}
                onPress={() => setFormField('region')('South West')}
            />

            <Button1
                key={'Middle East'}
                text={'Middle East'}
                reverse={region === 'Middle East'}
                onPress={() => setFormField('region')('Middle East')}
            />

            <Button1
                key={'Middle West'}
                text={'Middle West'}
                reverse={region === 'Middle West'}
                onPress={() => setFormField('region')('Middle West')}
            />
           



            <View style={{ height: 25, width: '100%', borderBottomWidth: 1 }}></View>
            <View style={{ height: 25, width: '100%' }}></View>

            <Button
                text={'Save Customer'}
                onPress={handleSubmit}
            />
            
        </View>
    )
}

const styles1 = StyleSheet.create({

    text: {
        fontSize: 18,
        marginLeft: 5,
        marginTop: 5,
        alignContent: "center",
        color: "#009688",
    },
});
export default Form
