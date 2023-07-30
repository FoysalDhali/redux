import { useDispatch, useSelector } from "react-redux";
import { colorChange, statusChange } from "../redux/filters/actions";

const mapStateToNumber = (value) => {
  const todos = value.filter((item) => !item.completed);

  switch (todos.length) {
    case 0:
      return "No Task";
    case 1:
      return "1 Task";

    default:
      return `${todos.length} Tasks`;
  }
};

export default function Footer() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const todos = useSelector((state) => state.todo);

  const { colors, status } = filter;

  const handleStatus = (status) => {
    dispatch(statusChange(status));
  };
  const colorFilter = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChange(color, "remove"));
    } else {
      dispatch(colorChange(color, "add"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{`${mapStateToNumber(todos)} Left`}</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "all" && "font-bold"} `}
          onClick={() => handleStatus("all")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "incomplete" && "font-bold"}`}
          onClick={() => handleStatus("incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "complete" && "font-bold"} `}
          onClick={() => handleStatus("complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => colorFilter("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
        ></li>
        <li
          onClick={() => colorFilter("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
        ></li>
        <li
          onClick={() => colorFilter("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
}
