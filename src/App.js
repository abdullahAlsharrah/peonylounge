import logo from "./logo.svg";
import "./App.css";
import RecieptList from "./components/invoices/RecieptList";
import Categories from "./components/services/Categories";
import { RecieptStyle, MainConrainer, ServicesStyle } from "./styles";

function App() {
  return (
    <MainConrainer>
      <RecieptStyle>
        <RecieptList />
      </RecieptStyle>
      <ServicesStyle>
        <Categories />
      </ServicesStyle>
    </MainConrainer>
  );
}

export default App;
