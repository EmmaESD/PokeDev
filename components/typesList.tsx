import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native-gesture-handler";

export const TypeList = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    (async () => {
      const typesJson = await fetch("https://pokebuildapi.fr/api/v1/types");
      const types = await typesJson.json();
      setTypes(types);
    })();
  }, []);
  return (
    <View>
      <Text style={styles.h2}>Types List</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={types}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image src={item.image} style={styles.image} />
            <Text style={styles.p}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pressableButton1: {
    backgroundColor: "#72C84D",
    padding: 20,
    borderRadius: 10,
  },
  pressableButton2: {
    backgroundColor: "#3899C3",
    padding: 20,
    borderRadius: 10,
  },
  pressableContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  background: {
    flex: 1,
  },

  h2: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
  },
  cardContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#fff",
    display: "flex",
    flexDirection: "column",
    marginVertical: 20,
    marginHorizontal: 30,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-between",
  },

  mainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
    backgroundImage: "",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
  p: {
    color: "#fff",
  },
});
