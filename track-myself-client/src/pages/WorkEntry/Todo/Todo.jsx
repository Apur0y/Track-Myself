import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Todo = () => {
  const [task, setTask] = useState({ title: "", description: "", type:"todo" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(task);
    e.preventDefault();
    setMessage("");

    try {

      await axios.post("https://track-myself-server.vercel.app/myskills", task)
      .then(res=>{console.log(res.data)
    toast("Task added")})
      setMessage("Task added successfully!");
      setTask({ title: "", description: "",type:"todo" });
    } catch (error) {
      setMessage("Failed to add task. Try again.",error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-rose-950  text-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add a New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Task Title"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          required
        />

        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Task Description"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          required
        ></textarea>
                <input
          type="text"
          name="todo"
          value='todo'
          onChange={handleChange}
          placeholder="Type"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          disabled
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add Task
        </button>
      </form>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default Todo;
