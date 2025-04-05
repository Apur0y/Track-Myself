import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { MdCalendarMonth, MdDelete } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { toast } from 'react-toastify';

const Done = () => {

    const [tasks,setTask] =useState([])

    useEffect(()=>{
       axios.get("https://track-myself-server.vercel.app/myskills")
       .then(res=>{
        setTask(res.data)
     
       })
        
    },[tasks])
    
    const todo= tasks.filter(task=>task.type =='done')



    const handleDelete=(id)=>{
      axios.delete(`https://track-myself-server.vercel.app/myskills/${id}`)
      .then((res)=>{

        console.log(res.data)
        setTask(tasks)
        toast("Task Deleted")
      })
    }

    const handleMonthly=()=>{


    }

    return (
        <div className="max-h-screen overflow-scroll  mx-auto text-black backdrop-blur-2xl  rounded-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6 ">Finished task</h1>
  
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
                    <td className="p-4 flex gap-3">{index+1 }. {task.title}<FaLongArrowAltRight className='my-auto ' /></td>
                    <td className="text-left my-auto">{task.description}</td>
                    <td className="p-1 flex justify-center gap-2">
                      {/* <button onClick={()=>HandleDone(task._id)} className=" text-green-600 px-2  rounded-lg hover:bg-green-600 hover:text-white cursor-pointer  transition-all">
                      <FaCheck className='my-auto '/>
                      </button> */}
                      <button onClick={()=>handleMonthly(task._id)} className=" text-red-500 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-black cursor-pointer  transition-all">
                      <MdCalendarMonth className='my-auto text-green-600 '/>
                      </button>
                      <button onClick={()=>handleDelete(task._id)} className=" text-red-500 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-black cursor-pointer  transition-all">
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

export default Done;