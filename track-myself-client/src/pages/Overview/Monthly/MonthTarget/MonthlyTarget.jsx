import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdCalendarMonth, MdDelete } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { toast } from "react-toastify";

const MonthlyTarget = () => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    axios.get("https://track-myself-server.vercel.app/myskills").then((res) => {
      setTask(res.data);
    });
  }, [tasks]);

  const todo = tasks.filter((task) => task.type == "done");

  const handleDelete = (id) => {
    axios
      .delete(`https://track-myself-server.vercel.app/myskills/${id}`)
      .then((res) => {
        console.log(res.data);
        setTask(tasks);
        toast("Task Deleted");
      });
  };

  const handleMonthly = () => {};

  const handleAddTarget = () => {
    console.log("Target");
    document.getElementById("my_modal_4").showModal();
  };

  return (
    <div className="  text-black backdrop-blur-2xl  rounded-md my-10">
      <div className="flex justify-between items-center pb-2 border-b-2">
        <div></div>
        <h1 className="text-2xl font-bold text-center   ">Monthly Target</h1>
        <button
          onClick={() => handleAddTarget()}
          className="btn text-white bg-green-600"
        >
          Add Target
        </button>
      </div>

      <div className="overflow-x-auto">
        {todo.length > 0 ? (
          <table className="border-collapse w-full text-black shadow-md rounded-lg">
            <thead className="">
              <tr className="text-left uppercase text-sm">
                <th className="p-1">Title</th>
                <th className="p-1">Description</th>
                <th className="p-1 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {todo.map((task, index) => (
                <tr
                  key={task._id || index}
                  className="border-b hover:bg-green-200 transition-all"
                >
                  <td className="p-4 flex gap-3">
                    {index + 1}. {task.title}
                    <FaLongArrowAltRight className="my-auto " />
                  </td>
                  <td className="text-left my-auto">{task.description}</td>
                  <td className="p-1 flex justify-center gap-2">
                    {/* <button onClick={()=>HandleDone(task._id)} className=" text-green-600 px-2  rounded-lg hover:bg-green-600 hover:text-white cursor-pointer  transition-all">
                      <FaCheck className='my-auto '/>
                      </button> */}
                    <button
                      onClick={() => handleMonthly(task._id)}
                      className=" text-red-500 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-black cursor-pointer  transition-all"
                    >
                      <MdCalendarMonth className="my-auto text-green-600 " />
                    </button>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className=" text-red-500 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-black cursor-pointer  transition-all"
                    >
                      <MdDelete className="my-auto " />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No tasks available.</p>
        )}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal ">
        <div className="modal-box ml-44 w-11/12 max-w-5xl">
          <h3 className="font-bold text-center text-lg">Target</h3>
          <div className="p-6 modal-action bg-white shadow-lg rounded-lg w-full max-w-md mx-auto">
            <form className="space-y-4 dialog">
              <div>
                <label className="block font-semibold mb-1">Topic:</label>
                <input
                  type="text"
                  placeholder="Enter Topic"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Description:</label>
                <textarea
                  placeholder="Enter Description"
                  rows="3"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div>
                <label className="block font-semibold mb-1">Month:</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MonthlyTarget;
