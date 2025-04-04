import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Transferir() {
  return (
      <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>Transferir</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    cabecalho:{
      backgroundColor: '#7500cb',
      width: '100%',
      height: 150,
      paddingHorizontal: 20,
      paddingTop: 30,
    },
    icone:{
      width: 20,
      height: 20,
    },
    iconeAcao:{
      width: 30,
      height: 30,
    },
    circulo:{
      width: 40,
      height: 40,
      backgroundColor: '#7c22c2',
      justifyContent: 'center',
      borderRadius: 20,
      alignItems: 'center',
    },
    boxIconesCabecalho: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itensIcones:{
      flexDirection:'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      gap: 15,
    },
    boxTextUsuario:{
      paddingTop: 20,
    },
    textUsuario:{
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
      paddingBottom: 40,
    },
    saldoContainer: {
      marginTop: 20,
      alignItems: 'flex-start',
      width: '90%',
    },
    saldoBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    saldoTitulo: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    saldoValor: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 5,
    },
    seta: {
      width: 15,
      height: 15,
      marginLeft: 'auto',
    },
    acoesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '90%',
      marginTop: 20,
    },
    acao: {
      alignItems: 'center',
    },
    botao: {
      backgroundColor: '#edeef3',
      width: 70,
      height: 70,
      borderRadius: 35,
      justifyContent: 'center',
      alignItems: 'center',
    },
    botaoTexto: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 12,
      marginTop: 5,
    }
  });
  