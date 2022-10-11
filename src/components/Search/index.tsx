export default function Search(props: any) {
  const font = "bg-slate-100 placeholder-gray-800 border border-gray-300 placeholder:font-light placeholder:text-sm"
  const colors = ""

	return (
		<div className="mb-5 px-10 lg:px-0 hidden lg:block">
			<input
				className={`p-3 border rounded-md w-full lg:w-3/4 outline-none ${font}`}
				placeholder="Buscar email"
			/>
		</div>
	);
};
