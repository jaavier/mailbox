import { useNavigate } from "react-router-dom"

export default function Tag({ text }: any) {
  const navigate = useNavigate();

  return (
    <div
      className="text-xs font-normal bg-gray-200 w-fit px-2 py-1 h-6 rounded-md hover:cursor-pointer"
      onClick={() => navigate("/category/principal")}>
      {text}
    </div>
  )
}