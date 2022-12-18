import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // validation for the Add Form
    if (!text) {
      alert("Please Add New Task");
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label> Task</label>
        <input
          type="text"
          placeholder="Add New Task :)"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div className="form-control ">
        <label> Day</label>
        <input
          type="text"
          placeholder="Feb 6th at 5:30pm"
          value={day}
          onChange={(event) => setDay(event.target.value)}
        />
      </div>
      <div className="form-control form-control-check ">
        <label> Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(event) => setReminder(event.currentTarget.checked)} // give us True or False value
        />
      </div>
      <input className="btn btn-block" type="Submit" value="Create Task" />
    </form>
  );
};

export default AddTask;
