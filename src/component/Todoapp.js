import { useState } from "react";

const Todoapp = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editlist, setEditlist] = useState(null);

  const handleSubmit = () => {
    if (input) {
      if (editlist !== null) {
        let updatelist = tasks.map((x, i) => (i === editlist ? input : x));
        setTasks(updatelist);
        setEditlist(null);
      } else {
        setTasks([...tasks, input]);
      }
      setInput("");
    }
  };

  //for delete
  const handleDelete = (task) => {
    let result = tasks.filter((x) => {
      return x !== task;
    });
    setTasks(result);
  };
  //for Update
  const updateitem = (index) => {
    setEditlist(index);
    setInput(tasks[index]);
  };

  return (
    <div className="main">
      <div className="container ">
        <h3 className="text-center todoapp py-3 my-5">Todo App</h3>
        <div className="text-center d-flex justify-content-between">
          <input
            type="text"
            className="form-control input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
          />
          <button
            type="submit"
            className="px-4 py-2 add"
            onClick={handleSubmit}
          >
            {editlist === null? "Add" : "Update"  }
          </button>
        </div>
        {/* Add Task List Here */}
        <div className="my-3">
          {tasks.map((task, index) => (
            <div className="d-flex my-3">
              <div key={index} className="saveinput input form-control py-2">
                {task}
              </div>
              <div className="d-flex">
                <button className="ms-auto delete px-3"onClick={() => handleDelete(task)}> 
                Delete
                </button>
                <button
                  className="ms-auto my-2 mx-2 "
                  onClick={() => updateitem(index)}>Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Todoapp;
