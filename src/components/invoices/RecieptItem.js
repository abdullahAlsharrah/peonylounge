import { observer } from "mobx-react";
import React from "react";
import offerStore from "../../stores/offerStore";
import {
  RecieptItemContainer,
  RecieptItemName,
  RecieptItemPrice,
} from "../../styles";

const RecieptItem = ({ item, route }) => {
  const offer = item.OrderOfferItem
    ? offerStore.offers.find(
        (offer) => offer.id === item.OrderOfferItem.offerId
      )
    : null;
  return (
    <>
      <RecieptItemContainer>
        <RecieptItemName>
          {item.quantity}x {item.name}
        </RecieptItemName>
        <RecieptItemPrice>{item.price} KD</RecieptItemPrice>
      </RecieptItemContainer>
      {item.OrderOfferItem
        ? offer.services.map((service) => <p>- {service.name}</p>)
        : null}
    </>
  );
};

export default observer(RecieptItem);
// const styles = StyleSheet.create({
//   item: {
//     fontSize: 15,
//     textAlign: "left",
//     fontWeight: "600",
//     width: "60%",
//   },
//   item1: {
//     // borderWidth: 2,
//     fontSize: 15,
//     textAlign: "right",
//     fontWeight: "600",
//     width: "30%",
//   },
//   box: {
//     flexDirection: "row",
//     marginHorizontal: 20,
//     marginBottom: 4,
//     marginLeft: -0,
//   },
// });
