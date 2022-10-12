import { useState } from "react";
import { useNavigate } from "react-router-dom";

const commonMailProps = "p-3 flex items-center border-b border-gray-200 text-sm hover:cursor-pointer";
const mailHoverProps = "hover:border-gray-200 hover:shadow-inner hover:bg-gray-300";

export default function PreviewMail(mail: Mail) {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <div
      onClick={() => {
        navigate(`/read/${mail.id}`)
      }}
      className={`${commonMailProps} ${mailHoverProps} ${!mail.readed ? "font-semibold text-gray-900" : "bg-gray-300"
        } ${selected.indexOf(mail.id) === -1 ? "bg-gray-50" : "bg-transparent"}`}
    >
      <div className="mr-5 h-4">
        <input
          type="checkbox"
          onChange={() => {
            if (selected.indexOf(mail.id) === -1)
              setSelected([...selected, mail.id]);
            else
              setSelected(selected.filter((i) => i !== mail.id));
          }}
          checked={selected.indexOf(mail.id) !== -1}
        />
      </div>
      <div className={`lg:w-52 lg:mr-0 mr-2 ${!mail.readed && "font-extrabold"}`}>{mail.nameFrom}</div>
      <div className="text-sm">{mail.subject}</div>
      <div className="ml-3 text-sm font-extralight flex-1">
        <div className="hidden lg:block text-xs">{mail.body}</div>
      </div>
      <div className="mr-2 text-xs">{mail.date}</div>
    </div>
  );
}