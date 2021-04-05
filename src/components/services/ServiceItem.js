import { observer } from "mobx-react";
import React from "react";
import invoiceStore from "../../stores/invoiceStore";
import { ServiceItemName } from "../../styles";

const ServiceItem = ({ service, handleopen }) => {
  const [quantity, setQuantity] = React.useState(1);
  const newItem = {
    quantity: quantity,
    serviceId: service.id,
    price: quantity * service.price,
    name: service.name,
  };
  const handleAdd = () => {
    invoiceStore.addItemToInvoice(newItem);
    // console.log("hello");
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

  const handlePackage = () => {
    handleopen(service.id, service.price);
  };
  return (
    <div

    // onLongPress={handleRemove}
    >
      <ServiceItemName onClick={handleAdd}>
        <p>{service.name}</p>
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
