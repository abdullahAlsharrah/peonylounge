import { observer } from "mobx-react";
import React from "react";
// import invoiceStore from "../../stores/invoiceStore";
import { InvoiceStyleView } from "../../styles";

const InvoiceItem = ({ invoice, navigation }) => {
  // const totalInvoicePrice = () => {
  //   let total = 0;
  //   invoice.services.forEach((service) => {
  //     total += service.price;
  //   });
  //   invoice.products.forEach((product) => {
  //     total += product.price;
  //   });

  //   return total;
  // };
  return (
    <InvoiceStyleView

    // onClick={() => navigation.navigate("Reciept", { invoice: invoice })}
    >
      <p>{invoice.id}</p>

      <p>{invoice.phoneNumber ? invoice.phoneNumber : "no number"}</p>

      <p>
        {invoice.services.length} : {invoice.products.length}
      </p>

      <p>{invoice.price} KD</p>
    </InvoiceStyleView>
  );
};

export default observer(InvoiceItem);
