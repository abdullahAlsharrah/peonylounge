import logo from "./logo.svg";
import "./App.css";
import RecieptList from "./components/invoices/RecieptList";
import Service from "./components/services/Service";
import { RecieptStyle, MainConrainer, ServicesStyle } from "./styles";

function App() {
  return (
    <MainConrainer>
      <RecieptStyle>
        <RecieptList />
      </RecieptStyle>
      <ServicesStyle>
        <Service />
      </ServicesStyle>
    </MainConrainer>
  );
}

export default App;
