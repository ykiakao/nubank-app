import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";

const iconMap = {
  Transferir: require("./assets/transferir.png"),
  PixCopiaCola: require("./assets/copia.png"),
  LerQR: require("./assets/qr-code.png"),
  Cobrar: require("./assets/depositar.png"),
  Depositar: require("./assets/depositar.png"),
};

export default function FazerPix() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Área Pix</Text>
      <Text style={styles.descricao}>
        Envie e receba pagamentos a qualquer hora e dia da semana, sem pagar nada por isso.
      </Text>

      {/* Seção Enviar */}
      <Text style={styles.subtitulo}>Enviar</Text>
      <View style={styles.acoesContainer}>
        {["Transferir", "PixCopiaCola", "LerQR"].map((acao) => (
          <View key={acao} style={styles.acao}>
            <Link href={`/${acao}`} style={styles.botao}>
              <View style={styles.iconeContainer}>
                <Image style={styles.iconeAcao} source={iconMap[acao]} />
              </View>
            </Link>
            <Text style={styles.botaoTexto}>{acao.replace("PixCopiaCola", "Pix Copia e Cola")}</Text>
          </View>
        ))}
      </View>

      {/* Seção Receber */}
      <Text style={styles.subtitulo}>Receber</Text>
      <View style={styles.acoesContainer}>
        {["Cobrar", "Depositar"].map((acao) => (
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  descricao: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  acoesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 15,
  },
  acao: {
    alignItems: "center",
  },
  botao: {
    backgroundColor: "#edeef3",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  iconeContainer: {
    width: 60,
    height: 60,
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
});
