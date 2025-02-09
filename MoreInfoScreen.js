import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function MoreInfoScreen() {
  return (
    <ImageBackground
      source={require('./assets/ebru3.jpg')} // Kendi arka plan resminizi ekleyin
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Discover More!</Text>
        <Text style={styles.description}>
          Explore fascinating features that enhance your experience.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Learn More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.indicators}>
              <View style={styles.indicator} />
              <View style={styles.indicator} />
              <View style={styles.indicatorActive} />
            </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Yarı saydam arka plan için
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF6F61', // Dikkat çekici ana renk
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    color: '#FFD700', // Altın rengi
    textDecorationLine: 'underline', // Altı çizili
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