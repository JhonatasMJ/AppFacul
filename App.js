import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imgContainer}>
        <Image source={require('./assets/logo.png')} style={styles.logo} >

        </Image>
      </View>
      <View style={styles.containerInputs}>

        <Text style={styles.titulo}>Entre na sua conta:</Text>
        <View>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.inputs} placeholder='Digite seu Email'></TextInput>

        </View>
        <View>
          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.inputs} placeholder='Digite seu Email'></TextInput>

        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTexto}>
            Fazer Login
          </Text>
        </TouchableOpacity>
      <View style={styles.registroContainer}>
        <Text>Não tem uma conta?</Text>
        <TouchableOpacity style={styles.registro}>
          <Text style={styles.registroTexto}>
            Criar conta
          </Text>
        </TouchableOpacity>

      </View>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',


  },
  logo: {
    width: 240,
    height: 240,
  },
  imgContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,

  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  inputs: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  containerInputs: {
    gap: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 124,
  },
  formulario: {
    justifyContent: 'center'
  },
  btn: {
    padding: 10,
    backgroundColor: '#008B8B',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnTexto: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffff',
  },
  registro: {
    padding: 10
  },
  registroTexto: {
    color: '#008B8B'
  },
  registroContainer: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
