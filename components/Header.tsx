import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

const Header = ({ pois_count, onPress }: any) => {
  
  return (
    <GestureHandlerRootView style={{ height: "15%" }}>
      <View style={styles.containerFooter}>
        <View style={styles.rowContainerLeft}>
          <Image source={require("@/assets/drawable-mdpi/back.png")} />
          <Text style={{ color: "white" }}>MADRID</Text>
        </View>
        <View style={styles.rowContainerRight}>
          <Image
            source={require("@/assets/drawable-mdpi/navigation_copy_2.png")}
          />
          <Image source={require("@/assets/drawable-mdpi/navigation.png")} />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={{ color: "white" }}>LATINA - OPERA</Text>
        <View style={styles.rowElement}>
          <Text style={{ color: "white" }}>{pois_count}</Text>
          <View style={styles.itemRow}>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={require("@/assets/drawable-mdpi/navigation_copy_3.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#676767",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 3,
  },
  containerFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#cccccc",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  rowContainerLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
  },
  rowContainerRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "30%",
  },
  rowElement: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "20%",
  },
  itemRow: {},
});
export default Header;