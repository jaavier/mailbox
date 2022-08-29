import { useApp } from "../../context/App";
import mails from "../../mocks/mails";
import Tabs from "./Tabs";
import PreviewMail from "./PreviewMail";

export default function Inbox(props: any) {
	const { activeTab } = useApp();
	const filterMail = mails.filter(
		({ category }: Mail) => category === activeTab
	);

	return (
		<>
			<Tabs />
			<div>
				{filterMail.map((mail: Mail, index: number) => (
					<PreviewMail {...mail} key={index} />
				))}
			</div>
			{filterMail.length === 0 && (
				<div className={`p-3 bg-slate-400 text-gray-800 text-center text-sm`}>
					0 emails in this category
				</div>
			)}
		</>
	);
}
