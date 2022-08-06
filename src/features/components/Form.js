import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Button from '../../components/Button'
// import { useNewCustomer, useUpdateFields } from '../../hooks'
// import styles from './styles'

const Form = ({ disabled, onSubmit }) => {
    // const { fields, setFormField } = useUpdateFields()

    // const {
    //     first_name,
    //     last_name,
    //     active,
    //     region,
    // } = fields

    return (
        <View style={{ margin: '5%' }}>
            <View style={{ height: 25, width: '100%' }}></View>

            <TextInput
                key={'first_name'}
                placeholder='First Name'
              //  value={first_name}
                style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
              //  onChangeText={setFormField('first_name')}
            />

            <View style={{ height: 15, width: '100%' }}></View>

            <TextInput
                key={'last_name'}
                placeholder='Last Name'
              //  value={last_name}
                style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
              //  onChangeText={setFormField('last_name')}
            />

            <View style={{ height: 25, width: '100%' }}></View>

            <Text>{'Active?'}</Text>

            <Button
                key={'active'}
                text={'active'}
                // reverse={active === true}
                // onPress={() => setFormField('active')(true)}
            />

            <Button
                key={'in-active'}
                text={'in-active'}
                // reverse={active === false}
                // onPress={() => setFormField('active')(false)}
            />

            <View style={{ height: 25, width: '100%' }}></View>

            <Text>{'Region:'}</Text>

            <View style={{ height: 15, width: '100%' }}></View>

            <Button
                key={'South West'}
                text={'South West'}
                // reverse={region === 'South West'}
                // onPress={() => setFormField('region')('South West')}
            />

            <Button
                key={'South East'}
                text={'South East'}
                // reverse={region === 'North West'}
                // onPress={() => setFormField('region')('North West')}
            />

            <Button
                key={'Middle East'}
                text={'Middle East'}
                // reverse={region === 'North East'}
                // onPress={() => setFormField('region')('North East')}
            />

            <Button
                key={'Middle West'}
                text={'Middle West'}
                // reverse={region === 'South East'}
                // onPress={() => setFormField('region')('South East')}
            />

            

            <View style={{ height: 25, width: '100%', borderBottomWidth: 1 }}></View>
            <View style={{ height: 25, width: '100%' }}></View>

            <Button
                text={'Save Customer'}
                onPress={onSubmit}
            />
        </View>
    )
}

export default Form
