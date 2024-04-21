// Consulta.js
import React from 'react';
import { View, Button } from 'react-native';

function Consulta({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Ir para o cadastro" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}


const UserScreen = () => {



  const [users, setUsers] = useState([
    { id: 1, name: 'João', photo: require('./assets/joao.jpg') },
    { id: 2, name: 'Maria', photo: require('./assets/maria.jpg') },
    { id: 3, name: 'José', photo: require('./assets/jose.jpg') },
    { id: 4, name: 'Júlia', photo: require('./assets/julia.jpg') },
    { id: 5, name: 'Ana', photo: require('./assets/ana.jpg') },
    { id: 6, name: 'Enzo', photo: require('./assets/enzo.jpg') },
    { id: 7, name: 'Fabio', photo: require('./assets/fabio.jpg') },
    { id: 8, name: 'Lilia', photo: require('./assets/lilia.jpg') },
    { id: 9, name: 'Bruce', photo: require('./assets/bruce.jpg') },
    { id: 10, name: 'Aline', photo: require('./assets/aline.jpg') },
    { id: 11, name: 'Caio', photo: require('./assets/caio.jpg') },
    { id: 12, name: 'Beto', photo: require('./assets/beto.jpg') },
    // Adicione mais usuários conforme necessário
  ]);

  const handleUserPress = (userId) => {
    // Implementar a lógica para quando um usuário for pressionado
    console.log(`Usuário ${userId} pressionado`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {users.map((user) => (
        <TouchableOpacity key={user.id} onPress={() => handleUserPress(user.id)}>
          <View style={styles.userContainer}>
            <Image source={user.photo} style={styles.userPhoto} />
            <Text style={styles.userName}>{user.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    marginTop:100,
    flexGrow: 1,
    justifyContent: 'center',

  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  userPhoto: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
  },
});



export default Consulta;