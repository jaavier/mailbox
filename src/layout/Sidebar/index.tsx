import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../../context/App";

const menu: Record<string, string>[] = [
  {
    name: "category/principal",
    label: "Received",
  },
  {
    name: "sent",
    label: "Sent",
  },
  {
    name: "trash",
    label: "Trash",
  },
]

export default function Sidebar() {
  const { setOpenComposer } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [tabSelected, setTabSelected] = useState<string>("received");
  const fontButton = "text-white font-semibold text-center text-sm"
  const colorsButton = "border-blue-600 bg-blue-800"
  const otherPropsButton = "rounded-xl py-4 px-6 hover:cursor-pointer"
  const propsMenuDesktop = "lg:px-5 lg:relative lg:top-0 lg:left-0 lg:w-auto lg:block"
  // const propsMenuMobile = `w-56 ${showMenu ? "block" : "hidden"}`
  const propsMenuMobile = `w-56 absolute top-12 ${showMenu ? "block" : "hidden"}`
  const commonPropsMenu = `flex flex-col text-xs font-light text-center mt-2 hover:cursor-pointer`

  return (

    <div className="lg:w-1/6 lg:mt-5">
      <div className="lg:flex lg:justify-center px-20 lg:px-0 pt-4 lg:pt-0">
        <div
          className={`${fontButton} ${colorsButton} ${otherPropsButton}`}
          onClick={() => {
            setOpenComposer(true);
          }}
        >
          Compose
        </div>
      </div>
      <div className="flex flex-col relative items-center lg:items-stretch mt-2">
        <div className="lg:hidden block text-center bg-gray-100 p-2 w-42 mt-3 text-xs" onClick={() => setShowMenu(!showMenu)}>
          MENU
        </div>
        <div className={`${propsMenuDesktop} ${propsMenuMobile} ${commonPropsMenu}`}>
          {
            menu.map(((item: any, index: number) => (
              <div
                key={index}
                className={`p-2 border border-gray-200 mx-2 ${location.pathname === `/${item.name}` ? "bg-gray-200 font-bold" : "bg-slate-50"}`}
                onClick={() => {
                  navigate(`/${item.name}`)
                }}
              >
                {item.label}
              </div>
            )))
          }
        </div>
      </div>

      <button
        className="fixed bottom-10 right-10 bg-blue-800 text-white p-5 rounded-full font-semibold flex justify-center items-center text-base"
        onClick={() => {
          setOpenComposer(true);
        }}>
        <i className="fa-solid fa-pencil"></i>  
      </button>
    </div>

  );
}
