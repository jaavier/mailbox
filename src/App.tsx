import React from "react";
import Layout from "./layout";
import Container from "./layout/Container";
import Sidebar from "./layout/Sidebar";
import { AppProvider } from "./context/App";
import Inbox from "./components/Inbox";
import Composer from "./components/Composer";
import Search from "./components/Search";

function App() {

  return (
		<AppProvider>
			<div className="bg-gradient-to-b from-slate-900	to-slate-700 h-screen">
				<Layout>
					<Sidebar />
					<Container>
						<Search />
            <div className="px-2 lg:px-0">
  						<Inbox />
            </div>
					</Container>
				</Layout>
				<Composer />
			</div>
		</AppProvider>
	);
}

export default App;
