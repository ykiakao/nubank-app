import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const iconMap = {
  Fatura: require('./assets/cartao.png'),
  Boleto: require('./assets/pagar.png'),
  Pix: require('./assets/pix.png'),
};

const sectionIcons = {
  Assistente: require('./assets/assistente.png'),
  Boletos: require('./assets/boleto.png'),
  Debito: require('./assets/debito.png'),
};

export default function Pagar() {
  return (
    <View style={styles.container}>
      {/* Botão "X" para voltar */}
      <Link href="./App" asChild>
        <TouchableOpacity style={styles.botaoVoltar}>
          <Text style={styles.textoVoltar}>X</Text>
        </TouchableOpacity>
      </Link>

      {/* Título */}
      <Text style={styles.titulo}>Opções de pagamento</Text>

      {/* Botões de pagamento */}
      <View style={styles.pagamentosContainer}>
        {['Fatura', 'Boleto', 'Pix'].map((item) => (
          <TouchableOpacity key={item} style={styles.botao}>
            <View style={styles.iconeContainer}>
              <Image style={styles.icone} source={iconMap[item]} />
            </View>
            <Text style={styles.botaoTexto}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Nova View para separar as seções informativas */}
      <View style={styles.secoesContainer}>
        <View style={styles.secao}>
          <Image source={sectionIcons.Assistente} style={styles.iconeSecao} />
          <View>
            <Text style={styles.secaoTitulo}>Assistente de Pagamentos</Text>
            <Text style={styles.secaoTexto}>Receba sugestões para manter suas contas em dia.</Text>
          </View>
        </View>

        <View style={styles.secao}>
          <Image source={sectionIcons.Boletos} style={styles.iconeSecao} />
          <View>
            <Text style={styles.secaoTitulo}>Buscador de Boletos</Text>
            <Text style={styles.secaoTexto}>Encontre boletos registrados em seu CPF.</Text>
          </View>
        </View>

        <View style={styles.secao}>
          <Image source={sectionIcons.Debito} style={styles.iconeSecao} />
          <View>
            <Text style={styles.secaoTitulo}>Débito Automático</Text>
            <Text style={styles.secaoTexto}>Cadastre suas contas para pagamento automático.</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 20, // Adiciona espaço nas laterais
      },
      
  botaoVoltar: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoVoltar: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20, // Espaço para deixar o "X" acima do título
    width: '85%',
    textAlign: 'left',
  },
  pagamentosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
    marginTop: 30,
    paddingHorizontal: 10, // Evita que os botões fiquem colados nas laterais
  },
  
  botao: {
    backgroundColor: '#edeef3',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconeContainer: {
    marginBottom: 5,
  },
  icone: {
    width: 20,
    height: 20,
  },
  botaoTexto: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 5,
  },
  secoesContainer: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
    marginTop: 40, // Adiciona espaço entre os botões e as seções
  },
  secao: {
    width: '90%',
    backgroundColor: '#edeef3',
    padding: 15,
    borderRadius: 15, 
    height: 90,     
    marginTop: 10, 
    marginBottom: 15, 
    flexDirection: 'row', // Alinha ícone + texto
    alignItems: 'center', 
  },
  iconeSecao: {
    width: 20,
    height: 20,
    marginRight: 30, // Espaço entre ícone e texto
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  secaoTexto: {
    fontSize: 14, 
    color: '#666', 
    marginTop: 5, 
  },
});
