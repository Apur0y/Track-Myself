import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

const Pending = () => {

    const [tasks,setTask] =useState([])

    useEffect(()=>{
       axios.get("http://localhost:5000/myskills")
       .then(res=>{
        setTask(res.data)
        console.log(res.data);
       })
        
    },[tasks])
    
    const todo= tasks.filter(task=>task.type =='todo')

    return (
        <div className="max-w-4xl mx-auto text-black backdrop-blur-2xl bg-green-300 rounded-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6 ">Tasks to Finish</h1>
  
        <div className="overflow-x-auto">
          {todo.length > 0 ? (
            <table className="border-collapse  text-black shadow-md rounded-lg">
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
                    <td className="p-4 flex gap-3">{index+1 }. {task.title}<FaLongArrowAltRight className='my-auto ' /></td>
                    <td className="text-left my-auto">{task.description}</td>
                    <td className="p-1 flex justify-center gap-2">
                      <button className=" text-green-600 px-2  rounded-lg hover:bg-green-600 hover:text-white cursor-pointer  transition-all">
                      <FaCheck className='my-auto '/>
                      </button>
                      <button className=" text-red-500 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-black cursor-pointer  transition-all">
                      <MdDelete className='my-auto '/>
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
      </div>
    );
};

export default Pending;