import { useNavigate } from "react-router-dom"

export default function Actions() {
  const navigate = useNavigate()

  return (
    <div className="flex mx-3 border-b text-sm text-gray-600">
      <div className="p-3">
        <button onClick={() => navigate("/category/principal")}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      <div className="p-3 flex">
        <div className="mr-4">
          <i className="fa-solid fa-trash"></i>
        </div>
        <div>
          <i className="fa-solid fa-folder"></i>
        </div>
      </div>
    </div>
  )
}