export default function Search(props: any) {
  const font = "text-white bg-zinc-300 placeholder-gray-800 placeholder:font-light placeholder:text-sm"
  const colors = ""

	return (
		<div className="mb-5 px-10 lg:px-0">
			<input
				className={`p-3 border rounded-md w-full lg:w-3/4 outline-none ${font}`}
				placeholder="Buscar email"
			/>
		</div>
	);
};
