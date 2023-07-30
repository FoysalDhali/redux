import cancelImage from "../assets/images/cancel.png";
import { useDispatch } from "react-redux";
import { toggle, colorSelected, deleted } from "../redux/todos/actions";

export default function Todo({ value }) {
  const dispatch = useDispatch();

  const handleComplete = (id) => {
    dispatch(toggle(value.id));
  };

  const colorSelect = (id, color) => {
    dispatch(colorSelected(id, color));
  };
  const deleteHandle = (id) => {
    dispatch(deleted(id));
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          value.completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={value.completed}
          className="opacity-0 absolute rounded-full"
          onChange={() => handleComplete(value.id)}
        />
        <svg
          className={`${
            value.completed === true ? "" : "hidden"
          } fill-current w-3 h-3 text-green-500 pointer-events-none`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      <div className={`select-none flex-1 ${value.completed && 'line-through'} `}>{value.text}</div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          value.color === "green" ? "bg-green-500" : ""
        }`}
        onClick={() => colorSelect(value.id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          value.color === "yellow" ? "bg-yellow-500" : ""
        }`}
        onClick={() => colorSelect(value.id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          value.color === "red" ? "bg-red-500" : ""
        }`}
        onClick={() => colorSelect(value.id, "red")}
      ></div>

      <img
        src={cancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => deleteHandle(value.id)}
      />
    </div>
  );
}
