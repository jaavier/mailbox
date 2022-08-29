import { useState } from "react";

const commonMailProps = "p-3 flex items-center border-b border-gray-200 text-sm hover:cursor-pointer";
const mailHoverProps =
	"hover:border-gray-200 hover:shadow-inner hover:bg-slate-300";

export default function PreviewMail(mail: Mail) {
  const [selected, setSelected] = useState<number[]>([]);

  return (
		<div
			className={`${commonMailProps} ${mailHoverProps} ${
				!mail.readed ? "font-semibold text-gray-800" : ""
			} ${selected.indexOf(mail.id) === -1 ? "bg-slate-400" : "bg-transparent"}`}
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
	);
}