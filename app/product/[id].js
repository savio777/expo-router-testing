import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";

export default function Page({ route }) {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Produto: {route.params.id}</Text>

        <TouchableOpacity onPress={goBack}>
          <Text>voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
});
