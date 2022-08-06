import React from 'react'
import { View, Text, TextInput ,StyleSheet} from 'react-native'
import Button1 from '../../components/Button1'
import Button from '../../components/Button'
import Button2 from '../../components/Button2'


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
            <Text style={styles1.text}>Enter First Name:</Text>

            <TextInput
                key={'first_name'}
                placeholder='First Name'
              //  value={first_name}
                style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
              //  onChangeText={setFormField('first_name')}
            />

            <View style={{ height: 15, width: '100%' }}></View>
            <Text style={styles1.text}>Enter Last Name:</Text>

            <TextInput
                key={'last_name'}
                placeholder='Last Name'
              //  value={last_name}
                style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
              //  onChangeText={setFormField('last_name')}
            />

            <View style={{ height: 25, width: '100%' }}></View>

            <Text style={styles1.text}>{'Active?'}</Text>

            <Button2
                key={'active'}
                text={'active'}
                // reverse={active === true}
                // onPress={() => setFormField('active')(true)}
            />

            <Button2
                key={'inactive'}
                text={'inActive'}
                // reverse={active === false}
                // onPress={() => setFormField('active')(false)}
            />

            <View style={{ height: 25, width: '100%' }}></View>

            <Text style={styles1.text}>{'Region:'}</Text>

            <View style={{ height: 15, width: '100%' }}></View>

            <Button1           
              key={'South West'}
                text={'South West'}
                // reverse={region === 'South West'}
                // onPress={() => setFormField('region')('South West')}
            />

            <Button1
                key={'South East'}
                text={'South East'}
                // reverse={region === 'North West'}
                // onPress={() => setFormField('region')('North West')}
            />

            <Button1
                key={'Middle East'}
                text={'Middle East'}
                // reverse={region === 'North East'}
                // onPress={() => setFormField('region')('North East')}
            />

            <Button1
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
