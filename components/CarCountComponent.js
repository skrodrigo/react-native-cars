import { View, Text, StyleSheet } from 'react-native';
import { CarContext } from './CarContext';
import { useEffect } from 'react';

const CarCountComponent = () => {

    const { cars } = useContext(CarContext)
    const [carCount, setCarCount] = useState(0)

    useEffect(() => {
        setCarCount(cars.length)
    }, [cars])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quantidade de Carros: { carCount } </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
    },
    });

export default CarCountComponent
