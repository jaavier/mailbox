import { useApp } from "../../context/App";
import mails from "../../mocks/mails";
import Tabs from "./Tabs";
import PreviewMail from "./PreviewMail";
import { useParams } from "react-router-dom";

export default function Inbox(props: any) {
  const params = useParams()
  const filterMail = mails.filter(
    ({ category }: Mail) => category === params.category
  );

  return (
    <div className="px-2 lg:mr-4 lg:px-0">
      <Tabs />
      <div>
        {filterMail.map((mail: Mail, index: number) => (
          <PreviewMail {...mail} key={index} />
        ))}
      </div>
      {filterMail.length === 0 && (
        <div className={`p-3 bg-gray-100 text-gray-700 font-light text-center text-sm`}>
          0 emails in this category
        </div>
      )}
    </div>
  )
}
