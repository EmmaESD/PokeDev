import { useGetPokemonById } from "@/hook/useGetPokemonById";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function detailsPokemonId() {
  const pokemon = useGetPokemonById();

  if (!pokemon) {
    return (
      <View>
        <Text>load...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("@/assets/images/bg.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.content}>
            <Text style={styles.h2}>{pokemon.name}</Text>
            <Text style={styles.p}>#{pokemon.pokedexId}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
            <View style={styles.tag}>
              <Text style={styles.p}>génération {pokemon.apiGeneration}</Text>
            </View>
            <View style={styles.evolution}>
              <View>
                {pokemon.apiEvolutions.map((pokemonEvolution) => (
                  <Text
                    key={`evol-${pokemonEvolution.pokedexId}`}
                    style={styles.p}
                  >
                    Evolution : {pokemonEvolution.name}
                  </Text>
                ))}
              </View>
              <View>
                {pokemon.apiEvolutions.map((pokemonEvolution) => (
                  <Text
                    key={`evolId-${pokemonEvolution.pokedexId}`}
                    style={styles.p}
                  >
                    #{pokemonEvolution.pokedexId}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.row}>
                <View style={styles.statsContainer}>
                  <Text style={styles.h2}>Stats</Text>
                  <Text style={styles.p}>HP: {pokemon.stats.HP}</Text>
                  <Text style={styles.p}>attack: {pokemon.stats.attack}</Text>
                  <Text style={styles.p}>Défense: {pokemon.stats.defense}</Text>
                  <Text style={styles.p}>
                    Spécial Attack: {pokemon.stats.special_attack}
                  </Text>
                  <Text style={styles.p}>
                    Spécial defense: {pokemon.stats.special_defense}
                  </Text>
                  <Text style={styles.p}>Speed: {pokemon.stats.speed}</Text>
                </View>
                <View style={styles.typesContainer}>
                  <Text style={styles.h2}>Types</Text>
                  <View style={styles.typeContent}>
                    <View style={styles.type}>
                      {pokemon.apiTypes.map((type: any, index: number) => (
                        <Text key={`type-${index}`} style={styles.p}>
                          {type.name}
                        </Text>
                      ))}
                    </View>
                    <View style={styles.type}>
                      {pokemon.apiTypes.map((typeI: any, index: number) => (
                        <Image
                          key={`typeImage-${index}`}
                          style={styles.imageType}
                          src={typeI.image}
                        />
                      ))}
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.row}>
                <View>
                  <Text style={styles.h2}>Resistances</Text>
                  <View style={styles.rowDetails}>
                    <View style={styles.statsContainer}>
                      {pokemon.apiResistances.map((res: any, index: number) => (
                        <Text key={`res-${index}`} style={styles.p}>
                          {res.name}
                        </Text>
                      ))}
                    </View>
                    <View style={styles.statsContainer}>
                      {pokemon.apiResistances.map(
                        (resM: any, index: number) => (
                          <Text key={`resM-${index}`} style={styles.p}>
                            {resM.damage_multiplier}
                          </Text>
                        )
                      )}
                    </View>
                    <View style={styles.statsContainer}>
                      {pokemon.apiResistances.map(
                        (resd: any, index: number) => (
                          <Text key={`resd-${index}`} style={styles.p}>
                            {resd.damage_relation}
                          </Text>
                        )
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  evolution: { display: "flex", flexDirection: "row", gap: 5 },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 100,
    justifyContent: "center",
  },
  rowDetails: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  tag: {
    padding: 5,
    backgroundColor: "#E43D1D",
    borderRadius: 10,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 50,
  },
  background: {
    flex: 1,
  },
  imageType: {
    width: 20,
    height: 20,
  },
  typesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  typeContent: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  type: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  statsContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  h2: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 100,
    backgroundImage: "",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  content: {
    display: "flex",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  p: {
    color: "#fff",
    textAlign: "center",
  },
});
