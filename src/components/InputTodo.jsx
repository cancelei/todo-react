import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { IconContext } from "react-icons"

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle("");
      setMessage("");
    } else {
      setMessage("Please add item.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <IconContext.Provider
          value={{
            color: "darkcyan",
            style: { fontSize: "20px", color: "#ff0000" },
            className: "submit-iconn",
          }}
        >
          <button className="input-submit">
            <FaPlusCircle />
            <FaPlusCircle />
            <FaPlusCircle />
          </button>
        </IconContext.Provider>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};
export default InputTodo;
