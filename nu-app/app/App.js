import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const iconMap = {
  FazerPix: require("./assets/pix.png"),
  Pagar: require("./assets/pagar.png"),
  Transferir: require("./assets/transferir.png"),
  Depositar: require("./assets/depositar.png"),
  Cartao: require("./assets/cartao.png"),
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* cabecalho */}
      <View style={styles.cabecalho}>
        <View style={styles.cabecalhoIcone}>
          <View style={styles.circulo}>
            <Image source={require("./assets/user.png")} style={styles.icon} />
          </View>
          <View style={styles.itemsIcons}>
            <Image source={require("./assets/olho.png")} style={styles.icon} />
            <Image source={require("./assets/ajuda.png")} style={styles.icon} />
            <Image source={require("./assets/email.png")} style={styles.icon} />
          </View>
        </View>
        <View style={styles.boxTextUser}>
          <Text style={styles.textUser}>Olá, Kaiky</Text>
        </View>
      </View>

      {/* saldo */}
      <View style={styles.saldoContainer}>
        <View style={styles.saldoBox}>
          <Text style={styles.saldoTitulo}>Conta</Text>
          <Image style={styles.seta} source={require("./assets/seta.png")} />
        </View>
        <Text style={styles.saldoValor}>R$ 1.542.255</Text>
      </View>

      {/* Ações */}
      <View style={styles.acoesContainer}>
        {['FazerPix', 'Pagar', 'Transferir', 'Depositar'].map((acao) => (
          <View key={acao} style={styles.acao}>
            <Link href={`/${acao}`} style={styles.botao}>
              <View style={styles.iconeContainer}>
                <Image style={styles.iconeAcao} source={iconMap[acao]} />
              </View>
            </Link>
            <Text style={styles.botaoTexto}>{acao}</Text>
          </View>
        ))}
      </View>

      {/* Seção Meus Cartões */}
      <View style={styles.meusCartoesContainer}>
        <View style={styles.cartaoContainer}>
          <Image style={styles.cartaoIcon} source={iconMap.Cartao} />
          <Text style={styles.tituloCartoes}>Meus Cartões</Text>
        </View>
      </View>

      {/* Card de Empréstimo */}
      <View style={styles.cardContainer}>
        <Text style={styles.cardTexto}>Você tem R$ 7.000 disponíveis para <Text style={styles.cardDestaque}>empréstimo.</Text></Text>
      </View>

      {/* Seção Fatura Atual */}
      <View style={styles.faturaContainer}>
        <Image style={styles.faturaIcon} source={iconMap.Cartao} /> 
        <View style={styles.boxFatura}>
        <Text style={styles.tituloFatura}>Cartão de Crédito</Text>
        <Image style={styles.seta} source={require('./img/seta.png')} />
        </View>
        <Text style={styles.faturaTexto}>Fatura atual</Text>
        <Text style={styles.faturaValor}>R$ 5201,00</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 0,
  },
  cabecalho: {
    backgroundColor: "#7500cb",
    width: "100%",
    height: 130,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  icon: {
    width: 24,
    height: 24,
  },
  itemsIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
  },
  boxTextUser: {
    marginTop: 10,
  },
  textUser: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cabecalhoIcone: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circulo: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#6600cb",
    justifyContent: "center",
    alignItems: "center",
  },
  saldoContainer: {
    marginTop: 20,
    alignItems: "flex-start",
    width: "90%",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  saldoBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  saldoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  saldoValor: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },
  seta: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 0,
    marginRight: -40,
  },  
  acoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  acao: {
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    backgroundColor: "#f0f0f0",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  iconeContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  iconeAcao: {
    width: 30,
    height: 30,
  },
  botaoTexto: {
    marginTop: 5,
    fontSize: 12,
    color: "#000",
  },
  meusCartoesContainer: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    width: "90%",
  },
  cartaoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#edeef3",
    width: "100%",
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
  },
  tituloCartoes: {
    fontSize: 14,
    marginLeft: 10,
  },
  cartaoIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#edeef3",
    width: "90%",
    height: 60,
    borderRadius: 15,
    justifyContent: "e",
  },
  cardTexto: {
    fontSize: 16,
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 40,
  },
  cardDestaque: {
    color: '#7c22c2',
  },
  faturaContainer: {
    marginTop: 30,
    padding: 15,
    width: '90%',
    alignItems: 'flex-start',
  },
  boxFatura: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  tituloFatura: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  faturaTexto: {
    fontSize: 16,
    marginBottom: 10,
    color: '#808080',
  },
  faturaIcon: {
    width: 20,
    height: 20,
    marginBottom: 10,
  },
  faturaValor: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
