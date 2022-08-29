import React from "react";
import { useApp } from "../../context/App";

export default function Compose() {
	const {
		openComposer,
		setOpenComposer,
		minimizeComposer,
		setMinimizeComposer,
	} = useApp();

	return openComposer ? (
		<div className="absolute right-5 bottom-2 w-1/3 shadow-md rounded-md border bg-white">
			<div className="flex justify-between bg-gray-100 px-2 py-3 border-t border-l border-l rounded-sm w-full items-center h-12">
				<div className="w-48 text-sm font-semibold text-gray-700">
					Mensaje nuevo
				</div>
				<div className="flex font-bold items-center">
					<div
						className="w-7 text-md hover:cursor-pointer"
						onClick={() => setMinimizeComposer(!minimizeComposer)}
					>
						{minimizeComposer ? "➚" : "_"}
					</div>
					<div
						className="w-7 text-xl hover:cursor-pointer"
						onClick={() => setOpenComposer(false)}
					>
						&times;
					</div>
				</div>
			</div>
			<div className={`${minimizeComposer && "hidden"}`}>
				<div className="">
					<input
						type="text"
						placeholder="Destinatario(s)"
						className="w-full py-2 px-2 outline-none text-sm border-b"
					/>
				</div>
				<div className="">
					<input
						type="text"
						placeholder="Asunto"
						className="w-full py-2 px-2 outline-none text-sm border-b"
					/>
				</div>
				<div className="border-b">
					<textarea
						placeholder="Escribe tu mensaje"
						className="w-full py-2 px-2 outline-none text-sm"
            rows={15}
					/>
				</div>
				<div className="m-2 px-1 float-right">
					<div className="bg-blue-500 p-2 text-sm text-white rounded-lg w-32 text-center font-semibold hover:cursor-pointer">
						Enviar
					</div>
				</div>
			</div>
		</div>
	) : null;
}
