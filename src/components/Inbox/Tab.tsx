import { useApp } from "../../context/App";

export default function Tab(props: Tab) {
	const { activeTab, setActiveTab } = useApp();

	return (
		<div
			className={`lg:p-5 py-4 text-center hover:cursor-pointer text-white text-xs lg:text-base ${
				activeTab === props.id
					? `border-b-4 border-${props.color}-500 font-semibold bg-gradient-to-b from-slate-900	to-slate-700`
					: `hover:from-slate-900	hover:to-slate-600 hover:bg-gradient-to-b`
			}`}
			onClick={() => setActiveTab(props.id)}
		>
			{props.title}
		</div>
	);
}
