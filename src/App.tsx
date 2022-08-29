import React from "react";
import Layout from "./layout";
import Container from "./layout/Container";
import Sidebar from "./layout/Sidebar";
import { AppProvider } from "./context/App";
import Inbox from "./components/Inbox";
import Composer from "./components/Composer";

function App() {

  return (
		<AppProvider>
			<Layout>
				<Sidebar />
				<Container>
					<Inbox />
				</Container>
			</Layout>
			<Composer />
		</AppProvider>
	);
}

export default App;
