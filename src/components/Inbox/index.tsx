import { useState } from "react";
import mails from "../../mocks/mails";
import tabs from "../../config/tabs";
import { useApp } from "../../context/App";
import Tab from "../Tab";

const commonMailProps = "p-3 flex items-center border-b border-gray-200 text-sm hover:cursor-pointer";
const mailHoverProps =
	"hover:shadow-md hover:border-gray-200 hover:shadow-inner";

export default function Inbox(props: any) {
	const { activeTab } = useApp();
  const [selected, setSelected] = useState<number[]>([]);
	const filterMail = mails.filter(
		({ category }: Mail, index: number) => category === activeTab
	);

	return (
		<>
			<div className="grid grid-cols-4">
				{tabs.map((tab: Tab, index: number) => (
					<Tab {...tab} key={index} />
				))}
			</div>
			<div>
				{filterMail.map((mail: Mail, index: number) => (
					<div
						key={index}
						className={`${commonMailProps} ${mailHoverProps} ${
							!mail.readed ? "font-semibold" : ""
						} ${
							selected.indexOf(mail.id) === -1 ? "bg-gray-50 " : "bg-blue-100"
						}`}
					>
						<div className="mr-5 h-4">
							<input
								type="checkbox"
								onChange={() => {
									if (selected.indexOf(mail.id) === -1)
										setSelected([...selected, mail.id]);
									else setSelected(selected.filter((i) => i !== mail.id));
								}}
                checked={selected.indexOf(mail.id) !== -1}
							/>
						</div>
						<div className="w-52">{mail.nameFrom}</div>
						<div className="">{mail.subject}</div>
						<div className="ml-3 text-xs font-light flex-1">- {mail.body}</div>
						<div className="mr-2 text-xs">{mail.date}</div>
					</div>
				))}
			</div>
			{filterMail.length === 0 && (
				<div className={`p-3 bg-gray-50 text-center text-sm`}>
					0 emails in this category
				</div>
			)}
		</>
	);
}
