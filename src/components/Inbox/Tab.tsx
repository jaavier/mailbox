import { useApp } from "../../context/App";

export default function Tab(props: Tab) {
	const { activeTab, setActiveTab } = useApp();

	return (
		<div
			className={`p-5 text-center hover:cursor-pointer text-white ${
				activeTab === props.id
					? `border-b-4 border-${props.color}-500 font-semibold bg-gradient-to-b from-slate-900	to-slate-600`
					: `hover:from-slate-900	hover:to-slate-600 hover:bg-gradient-to-b`
			}`}
			onClick={() => setActiveTab(props.id)}
		>
			{props.title}
		</div>
	);
}
