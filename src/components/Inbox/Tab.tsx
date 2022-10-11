import {
  Link, useParams,
} from "react-router-dom";

export default function Tab(props: Tab) {
  const { category } = useParams()
  const propsActive = `border-b-4 border-${props.color}-500 bg-${props.color}-50/75 text-${props.color}-600 font-extrabold`;
  const propsInactive = `hover:bg-gray-200 font-light border-b`;

  return (
    <Link
      to={`/category/${props.id}`}
      className={`lg:p-5 py-4 bg-slate-50 text-center hover:cursor-pointer text-xs lg:text-sm
      ${category === props.id ? propsActive
        : propsInactive
      }`}
    >
      {props.title}
    </Link>
  );
}
