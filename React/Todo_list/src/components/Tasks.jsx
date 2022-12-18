import Task from "./Task";
import Button from "./Button";

const Tasks = ({
  tasks,
  onDelete,
  onToggle,
  text,
  deleteToggleReminder,
  reminder,
}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
      <div>
        <Button
          className="btn btn-block"
          text={text}
          onClick={() => deleteToggleReminder(tasks)}
        />
      </div>
    </>
  );
};

Button.defaultProps = {
  text: "Delete Toggled Tasks",
};

export default Tasks;
