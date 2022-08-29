import { useApp } from "../../context/App";

export default function Sidebar() {
	const { setOpenComposer } = useApp();
	return (
		<div className="w-1/6 p-5">
			<div className="flex justify-center">
				<div
          className="border rounded-xl py-4 px-6 text-sm hover:cursor-pointer"
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