import { observer } from "mobx-react";
import React from "react";
import offerStore from "../../../stores/offerStore";
import { FlexContainer, OfferTitle } from "../../../styles";
import OfferItem from "./OfferItem";

const OfferList = () => {
  //   const d = new Date();
  const offersList = offerStore.offers.map((offer) => (
    <OfferItem offer={offer} key={`O${offer.id}`} />
  ));
  //   const totalInvoicesPrice = () => {
  //     let total = 0;
  //     list.map(
  //       (offer) =>
  //         offer.services.forEach((service) => {
  //           total += service.price;
  //         }) & offer.products.forEach((product) => (total += product.price))
  //     );

  //     return total;
  //   };

  return (
    <div>
      <FlexContainer back={offerStore}>
        <OfferTitle>Offer</OfferTitle>
        <OfferTitle>Services</OfferTitle>

        <OfferTitle> Price KD</OfferTitle>
      </FlexContainer>
      {offersList}
    </div>
  );
};
export default observer(OfferList);
