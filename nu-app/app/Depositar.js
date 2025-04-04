import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";

const iconMap = {
  hora: require("./assets/pagar.png"),
  boleto: require("./assets/pagar.png"),
  dados: require("./assets/pagar.png"),
  salario: require("./assets/pagar.png"),
};

export default function Depositar() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Como você quer depositar na sua conta?</Text>
      <View style={styles.cardsContainer}>
        <Link href="/hora" style={styles.card}>
          <Image source={iconMap.hora} style={styles.icone} />
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Receber na hora, sem custo</Text>
            <Text style={styles.cardDescription}>Gere um código Pix para copiar e colar no seu banco.</Text>
          </View>
        </Link>
        <Link href="/boleto" style={styles.card}>
          <Image source={iconMap.boleto} style={styles.icone} />
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Receber em até 3 dias, sem custo</Text>
            <Text style={styles.cardDescription}>Gere um boleto de depósito.</Text>
          </View>
        </Link>
        <Link href="/dados" style={styles.card}>
          <Image source={iconMap.dados} style={styles.icone} />
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Copiar dados da conta</Text>
            <Text style={styles.cardDescription}>Use os dados da sua conta para transferir usando Pix, TED e DOC.</Text>
          </View>
        </Link>
        <Link href="/salario" style={styles.card}>
          <Image source={iconMap.salario} style={styles.icone} />
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Receber salário, sem custo</Text>
            <Text style={styles.cardDescription}>O salário cai no mesmo dia em que é depositado onde você tem conta.</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  cardsContainer: {
    gap: 15,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f0f0f5",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  icone: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});