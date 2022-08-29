import { useApp } from "../../context/App";

export default function Tab(props: Tab) {
	const { activeTab, setActiveTab } = useApp();

	return (
		<div
			className={`p-5 text-center ${
				activeTab === props.id
					? `border-b-2 border-${props.color}-500`
					: `hover:bg-gray-100`
			}`}
			onClick={() => setActiveTab(props.id)}
		>
			{props.title}
		</div>
	);
}
