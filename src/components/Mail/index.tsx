import { useParams } from "react-router-dom"
import Actions from "./Actions";
import Tag from "./Tag";

export default function Mail () {
  const { mailId } = useParams();

  return (
    <div className="lg:mr-2 lg:ml-0 mr-2 ml-2 h-screen pb-4">
      <div className="w-full h-full rounded-t-2xl bg-white border border-gray-300">
        <Actions />
        <div className="flex space-between items-center p-3 lg:ml-8 font-bold lg:text-2xl lg:h-auto">
          <div className="lg:mr-4 mr-8 h-full">
            [APP] Please verify your device
          </div>
          <Tag text="Principal" />
        </div>
        <div className="lg:ml-8 px-3 flex items-center">
          <div className="font-bold text-sm mr-1">
            Sender
          </div>
          <div className="text-xs text-gray-500">
            &lt;email@sender.com&gt;
          </div>
        </div>
      </div>
    </div>
  )
}