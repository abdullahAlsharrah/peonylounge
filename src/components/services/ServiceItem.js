import { observer } from "mobx-react";
import React from "react";
import invoiceStore from "../../stores/invoiceStore";
import { ServiceItemName } from "../../styles";

const ServiceItem = ({ service, handleopen }) => {
  const newItem = {
    quantity: 1,
    serviceId: service.id,
    price: service.price,
    name: service.name,
    arabic: service.arabic,
  };
  const handleAdd = () => {
    invoiceStore.addItemToInvoice(newItem);
  };
  const handleRemove = () => {
    const foundItem = invoiceStore.items.find(
      (item) => item.serviceId === newItem.serviceId
    );
    if (foundItem) {
      return invoiceStore.removeItemFromInvoice(`s${foundItem.serviceId}`);
    } else return null;
  };
  const foundItem = invoiceStore.items.find(
    (item) => item.serviceId === service.id
  );
  // console.log("hello");

  return (
    <div

    // onLongPress={handleRemove}
    >
      <ServiceItemName
        foundItem={foundItem}
        onClick={handleAdd}
        onDoubleClick={handleRemove}
      >
        <p>
          {service.name} <br /> {service.arabic}
        </p>
      </ServiceItemName>
    </div>
  );
};

export default observer(ServiceItem);
// const styles = StyleSheet.create({
//   item: {
//     height: 100,
//     width: 159,
//     justifyContent: "center",
//     alignContent: "center",
//     alignItems: "center",
//     margin: 2,
//     // marginBottom: 50,
//     shadowColor: "black",
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowOpacity: 0.8,
//     shadowRadius: 1.25,

//     elevation: 5,
//     backgroundColor: "#c39e81",
//   },
// });
