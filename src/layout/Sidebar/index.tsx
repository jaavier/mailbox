import { useApp } from "../../context/App";

export default function Sidebar() {
	const { setOpenComposer } = useApp();
  const font = "text-white font-semibold text-center text-sm"
  const colors = "border-blue-600 bg-blue-800"
  const otherProps = "rounded-xl py-4 px-6 hover:cursor-pointer"

	return (
		<div className="lg:w-1/6 lg:mt-5">
			<div className="lg:flex lg:justify-center px-20 lg:px-0 pt-4 lg:pt-0">
				<div
          className={`${font} ${colors} ${otherProps}`}
					onClick={() => {
						setOpenComposer(true);
					}}
				>
					Redactar nuevo
				</div>
			</div>
		</div>
	);
}
