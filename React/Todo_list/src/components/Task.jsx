import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <>
      <div
        className={`task ${task.reminder ? "reminder " : " "}`}
        onDoubleClick={() => onToggle(task.id)}
      >
        {" "}
        {/* handle toggle method  */}
        <h3>
          {task.text}
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(task.id)} // by uding Eventes with props.onDelete to remove the task by ID
          />
        </h3>
        <p> {task.day}</p>
      </div>
    </>
  );
};

export default Task;
