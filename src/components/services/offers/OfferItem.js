import { observer } from "mobx-react";
import React from "react";
import invoiceStore from "../../../stores/invoiceStore";
import { FlexContainer, OfferTitle } from "../../../styles";

const OfferItem = ({ offer }) => {
  const newItem = {
    quantity: 1,
    offerId: offer.id,
    price: offer.price,
    name: offer.name,
  };

  const handleAdd = () => {
    const foundItem = invoiceStore.items.find(
      (item) => item.offerId === newItem.offerId
    );
    if (foundItem) {
      return invoiceStore.removeItemFromInvoice(`o${foundItem.offerId}`);
    } else return invoiceStore.addItemToInvoice(newItem);
  };

  const foundItem = invoiceStore.items.find(
    (item) => item.offerId === offer.id
  );

  return (
    <>
      <FlexContainer foundItem={foundItem} onClick={handleAdd}>
        <OfferTitle item={newItem}>{offer.name}</OfferTitle>
        <OfferTitle item={newItem}>
          {offer.services.map((service) => (
            <p>
              {service.name}
              {" ,  "}
            </p>
          ))}
        </OfferTitle>
        <OfferTitle item={newItem}>{offer.price} KD</OfferTitle>
      </FlexContainer>
      ______________________________________________________________________________________________________
    </>
  );
};

export default observer(OfferItem);
