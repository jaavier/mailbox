import Layout from "./layout";
import Container from "./layout/Container";
import Sidebar from "./layout/Sidebar";
import { AppProvider } from "./context/App";
import Inbox from "./components/Inbox";
import Composer from "./components/Composer";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Sent from "./components/Sent";
import Mail from "./components/Mail";
import Search from "./components/Search";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Sidebar />
          <Container>
            <Search />
            <Routes>
              <Route path="/sent" element={<Sent />} />
              <Route path="/category/:category" element={<Inbox />} />
              <Route path="/read/:mailId" element={<Mail />} />
            </Routes>
          </Container>
          <Composer />
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
