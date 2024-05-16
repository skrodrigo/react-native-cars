import React from 'react';
import { View, TextInput, Button } from 'react-native';

import { CarContext } from './CarContext';

export default function CarInputComponent() {
    const { setCars } = useContext(CarContext)
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')

    const addCar = () => {
        if (marca === '' || modelo === '') {
            alert('Preencha todos os campos')
            return
        }else{
            setCars((cars) => [...cars, {marca, modelo}])
            setMarca('')
            setModelo('')
        }

    }


  return (
    <View style={styles.container}>
        <TextInput value={marca} onChange={setMarca} placeholder='Marca de Carro'/>
        <TextInput value={modelo} onChange={setModelo} placeholder='modelo do Carro'/>
        <Button title='Adicionar Carro' onPress={addCar} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    button: {
        margin: 12,
    },
    });