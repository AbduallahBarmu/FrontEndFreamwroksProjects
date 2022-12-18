
// import components
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
// import hooks 
import { useState } from 'react'





function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  // create an array of object with State to save the Tasks   
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "finish circuit lab2 ",
        day: "Feb 5th at 3:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at company ",
        day: "Feb 9th at 1:30Am",
        reminder: false,
      },
      {
        id: 3,
        text: "take the medicen  ",
        day: "Feb 10th at 12:30pm",
        reminder: false,
      },
    ])


  // Add Tasks 
  const addTask = (task) => {
    // console.log(task)
    const id = Math.floor(Math.random() * 1000) + 1  // create a random Id for the new Task 
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]) // create a new task and save it with new array 
  }


  // Delete Tasks method
  const deleteTask = (id) => {
    // console.log('delete method' , id )
    setTasks(tasks.filter((task) => task.id !== id))

  }



  // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(tasks.map((task) =>
      task.id === id ? {
        ...task, reminder:  
          !task.reminder
      } : task
    )
    )
  }

  // delete all tasks that toggled 
  const deleteToggleReminder = (id, reminder) => {
    setTasks(tasks.filter((task) => !task.reminder   // if the task is toggled => remove it 
    )
    )
  }

  return (
    <div className="container">

      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {/*if there is no Tasks show "NO TASKS TO SHOW" message   */}

      {tasks.length > 0 ? <Tasks deleteToggleReminder={deleteToggleReminder} tasks={tasks} onDelete={deleteTask}
        onToggle={toggleReminder} /> : 'NO TASKS TO SHOW '}



    </div>
  );
}

export default App;



// get list of tasks from the state
// loop over the tasks foreach
// if task.isToggled 
// remove task from the list

