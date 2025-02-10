import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useFonts } from 'expo-font'; // Font yüklemek için

export default function HomeScreen({ navigation }) {
  const [loaded] = useFonts({
    'Great-Vibes': require('./assets/fonts/great-vibes.ttf'),
    'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'), // Kendi font dosyanızı ekleyin
  });

  // Eğer font yüklenmemişse, ekranı boş döndür
  if (!loaded) {
    return null; // Veya bir yükleme ekranı ekleyebilirsiniz
  }

  return (
    <ImageBackground
      source={require("./assets/ebru12.jpg")} // Kendi arka plan resminizi kullanın
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Begin Your Journey</Text>
        <Text style={styles.subtitle}>
          Discover amazing features.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MoreInfo")}  
        >
          <Text style={styles.buttonText}>Explore More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.indicators}>
        <View style={styles.indicator} />
        <View style={styles.indicatorActive} />
        <View style={styles.indicator} />
      </View>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 55,
    
    color: "white",
    marginBottom: 10,
    fontFamily: 'Great-Vibes' // Özel yazı tipi
  },
  subtitle: {
    fontSize: 29,
    color: "white",
    textAlign: "center",
    marginBottom: 30,
    fontFamily: 'Lobster-Regular' // Özel yazı tipi
  },
  button: {
    backgroundColor: "#FF6F62",
    padding: 15,
    borderRadius: 10,
    width: "50%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 70,
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 4,
    backgroundColor: "white",
    margin: 4,
  },
  indicatorActive: {
    height: 10,
    width: 10,
    borderRadius: 4,
    backgroundColor: "#FF7979",
    margin: 4,
  },
});