import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React</Text>
      <Text style={styles.eventDate}>Quarta feira, 11/09/2024 02:16</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Rodrigo" />
      <Participant name="Diego" />
      <Participant name="Vini" />
      <Participant name="Biro" />
    </View>
  );
}
