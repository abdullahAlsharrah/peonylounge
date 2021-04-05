import { observer } from "mobx-react";
import { ListItem } from "native-base";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import invoiceStore from "../../../stores/invoiceStore";
import apackageStore from "../../../stores/packageStore";
import serviceStore from "../../../stores/serviceStore";

const PackageItem = ({ apackage }) => {
  const handleSubmit = () => {
    const newItem =
      apackage.time === 5
        ? {
            apackageId: apackage.id,
            price: apackage.price,
            name: service.name,
            time: apackage.time,
          }
        : {
            apackageId: apackage.id,
            name: service.name,
            price: 0,
            nprice: apackage.price,
            time: apackage.time,
          };

    const foundItem = invoiceStore.items.find(
      (item) => item.apackageId === newItem.apackageId
    );
    if (foundItem) {
      invoiceStore.removeItemFromInvoice(`p${foundItem.apackageId}`);
      apackageStore.unUpdatePackage(foundItem.apackageId);
    } else if (apackage.time > 0) {
      invoiceStore.addItemToInvoice(newItem);
      apackageStore.updatePackage(newItem.apackageId);
    } else {
      Alert.alert(" Sorry This itme has finished");
    }
  };
  const foundItem = invoiceStore.items.find(
    (item) => item.apackageId === apackage.id
  );
  const service = serviceStore.services.find(
    (service) => service.id === apackage.serviceId
  );

  return (
    <ListItem
      style={{
        flexDirection: "row",
        backgroundColor: foundItem ? "tomato" : "white",
      }}
      onPress={handleSubmit}
    >
      <Text style={[styles.text, { color: foundItem ? "white" : "black" }]}>
        {service.name}
      </Text>
      <Text style={[styles.text, { color: foundItem ? "white" : "black" }]}>
        {apackage.name}
      </Text>

      <Text style={[styles.text, { color: foundItem ? "white" : "black" }]}>
        {apackage.phoneNumber}
      </Text>
      <Text style={[styles.text, { color: foundItem ? "white" : "black" }]}>
        {apackage.time}
      </Text>
    </ListItem>
  );
};

export default observer(PackageItem);
const styles = StyleSheet.create({
  item: {
    height: 50,
    width: 100,
    borderRadius: 8,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    margin: 10,
    marginBottom: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.25,

    elevation: 5,
  },
  text: { textAlign: "center", width: "25%" },
});
