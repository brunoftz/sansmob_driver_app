import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { defaultStyle } from "../../constants/defaultStyles";
import { TopButton } from "../../components/TopButton";
import { CardOption } from "../../components/CardOption";
import Colors from "../../constants/colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Title } from "../../components/Title";
import { LanguageAPI } from "../../mock/languageData";

export default function LanguagesScreen({ navigation }: { navigation: any }) {
  const [portuguese, setPortuguese] = useState(false);
  const [english, setEnglish] = useState(false);
  const [spanish, setSpanish] = useState(false);

  // Carrega idiomas salvos ao abrir a tela
  useEffect(() => {
    const loadLanguages = async () => {
      const data = await LanguageAPI.getLanguages();
      setPortuguese(data.languages.includes("Português"));
      setEnglish(data.languages.includes("Inglês"));
      setSpanish(data.languages.includes("Espanhol"));
    };
    loadLanguages();
  }, []);

  const handleBack = async () => {
    const selectedLanguages: string[] = [];

    if (portuguese) selectedLanguages.push("Português");
    if (english) selectedLanguages.push("Inglês");
    if (spanish) selectedLanguages.push("Espanhol");

    await LanguageAPI.updateLanguages(selectedLanguages);

    navigation.goBack();
  };

  return (
    <View style={defaultStyle.container}>
      <TopButton iconName="chevron-left" style={styles.topButton} onPress={handleBack} />

      <Title style={styles.title}>Quais idiomas você domina?</Title>

      <CardOption
        onPress={() => setPortuguese(prev => !prev)}
        label="Português"
        iconComponent={MaterialCommunityIcons}
        iconColor="white"
        iconPosition="left"
        style={styles.cardEdit}
        cornerIcon={portuguese ? 'radiobox-marked' : 'radiobox-blank'}
        cornerIconColor="white"
      />

      <CardOption
        onPress={() => setEnglish(prev => !prev)}
        label="Inglês"
        iconComponent={MaterialCommunityIcons}
        iconColor="white"
        iconPosition="left"
        style={styles.cardEdit}
        cornerIcon={english ? 'radiobox-marked' : 'radiobox-blank'}
        cornerIconColor="white"
      />

      <CardOption
        onPress={() => setSpanish(prev => !prev)}
        label="Espanhol"
        iconComponent={MaterialCommunityIcons}
        iconColor="white"
        iconPosition="left"
        style={styles.cardEdit}
        cornerIcon={spanish ? 'radiobox-marked' : 'radiobox-blank'}
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
  title: {
    marginTop: 80,
    fontSize: 40,
    marginBottom: 30,
  },
  cardEdit: {
    paddingVertical: 25,
    paddingLeft: 20,
    justifyContent: 'flex-start',
  },
});
