import React from "react";

type AppContext = {
	activeTab: string,
	setActiveTab: (tab: string) => void,
	children?: any,
	openComposer?: boolean,
	setOpenComposer: (state: boolean) => void,
  minimizeComposer: boolean,
  setMinimizeComposer: (state: boolean) => void,
};

const Context = React.createContext<AppContext>({
	activeTab: "",
	setActiveTab: () => {},
	openComposer: false,
	setOpenComposer: () => {},
  minimizeComposer: false,
  setMinimizeComposer: () => {},
});

const AppProvider = ({ children }: any) => {
	const [activeTab, setActiveTab] = React.useState<string>("principal");
	const [openComposer, setOpenComposer] = React.useState<boolean>(false);
  const [minimizeComposer, setMinimizeComposer] = React.useState<boolean>(false);
  const values = {
		activeTab,
		setActiveTab,
		openComposer,
		setOpenComposer,
		minimizeComposer,
		setMinimizeComposer,
	};

	return (
		<Context.Provider
			value={values}
		>
			{children}
		</Context.Provider>
	);
};

const useApp = () => React.useContext(Context);

export { AppProvider, useApp };
