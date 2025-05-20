// src/screens/profile/UserProfile.tsx

import { StyleSheet, Text, View, Image } from "react-native";
import { defaultStyle } from "../../constants/defaultStyles";
import { TopButton } from "../../components/TopButton";
import { CardOption } from "../../components/CardOption";
import Colors from "../../constants/colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LanguageAPI } from "../../mock/languageData";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native"; // 👈 Para detectar quando voltar do "Languages"

export default function UserProfileScreen({ navigation }) {
  const [languages, setLanguages] = useState<string[]>([]);
  const isFocused = useIsFocused(); // 👈 detecta quando a tela fica visível novamente

  useEffect(() => {
    const fetchLanguages = async () => {
      const data = await LanguageAPI.getLanguages();
      setLanguages(data.languages);
    };

    if (isFocused) {
      fetchLanguages(); // 👈 recarrega quando a tela for focada
    }
  }, [isFocused]);

  const generateLanguageText = () => {
    if (languages.length === 0) return "Nenhum idioma selecionado";
    if (languages.length === 1) return `Fala ${languages[0]}`;
    if (languages.length === 2) return `Fala ${languages[0]} e ${languages[1]}`;
    return `Fala ${languages.slice(0, -1).join(", ")} e ${languages[languages.length - 1]}`;
  };

  return (
    <View style={defaultStyle.container}>
      <TopButton iconName="chevron-left" style={styles.topButton} onPress={() => { navigation.goBack(); }} />

      <View style={styles.profileContainer}>
        <Image source={{ uri: 'URL_DA_IMAGEM_DO_PERFIL' }} style={styles.profileImage} />
        <Text style={styles.name}>Erick</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>1.090</Text>
            <Text style={styles.statLabel}>Viagens</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>10</Text>
            <Text style={styles.statLabel}>Meses</Text>
          </View>
        </View>
      </View>

      <CardOption
        label={generateLanguageText()}
        iconComponent={MaterialCommunityIcons}
        iconName="web"
        iconSize={40}
        iconColor="white"
        iconPosition="left"
        style={styles.cardEdit}
        cornerIcon="pencil-outline"
        cornerIconColor="white"
        onPress={() => navigation.navigate("Languages")} // 👈 deve estar registrado no navigator
      />

      <CardOption
        label="De Rio de Janeiro"
        iconComponent={MaterialCommunityIcons}
        iconName="map-marker"
        iconSize={40}
        iconColor="white"
        iconPosition="left"
        style={styles.cardEdit}
        cornerIcon="pencil-outline"
        cornerIconColor="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  topButton: {
    marginTop: 30,
    marginBottom: 0,
    marginLeft: -20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: Colors.primaryDark,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: Colors.white,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  stat: {
    alignItems: 'center',
    backgroundColor: Colors.primaryDark,
    marginHorizontal: 15,
    paddingVertical: 28,
    paddingHorizontal: 58,
    borderRadius: 15,
    marginBottom: 20,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
  },
  statLabel: {
    fontSize: 18,
    color: '#666',
  },
  cardEdit: {
    paddingVertical: 25,
    paddingLeft: 20,
    justifyContent: 'flex-start',
  },
});
