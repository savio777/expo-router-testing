import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link, useLink } from "expo-router";

export default function Page() {
  const link = useLink();

  const goToProfile = () => {
    link.push("/profile");
  };

  const goToProduct = () => {
    link.push("/product/085944a5-ea0f-4bd6-ad96-b315309da39c");
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>

        <Link href="/profile">
          <Text>navegar para perfil</Text>
        </Link>
        <TouchableOpacity onPress={goToProfile}>
          <Text>navegar para perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToProduct}>
          <Text>navegar para produto</Text>
        </TouchableOpacity>
        <Link href="/product/085944a5-ea0f-4bd6-ad96-b315309da39c">
          <Text>navegar para produto</Text>
        </Link>
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
