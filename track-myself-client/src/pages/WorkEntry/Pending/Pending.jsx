import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { MdCalendarMonth, MdDelete } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { toast } from 'react-toastify';

const Pending = () => {

    const [tasks,setTask] =useState([])

    useEffect(()=>{
       axios.get("https://track-myself-server.vercel.app/myskills")
       .then(res=>{
        setTask(res.data)
       
       })
        
    },[tasks])
    
    const todo= tasks.filter(task=>task.type =='todo')

    const HandleDone=(id)=>{
      console.log("Here id",id);
      axios.put(`https://track-myself-server.vercel.app/myskills/${id}`)
      .then((res)=>{

        console.log(res.data)
        setTask(tasks)
        toast("Congratulation on DONE")
      })
     
    }

    const handleDelete=(id)=>{
      axios.delete(`https://track-myself-server.vercel.app/myskills/${id}`)
      .then((res)=>{

        console.log(res.data)
        setTask(tasks)
        toast("Task Deleted")
      })
    }

    // const options = { month: 'short', day: '2-digit', year: 'numeric', weekday: 'short' };



    return (
        <div className=" rounded-lg w-full md:scale-100 md:h-full mt-8 md:max-w-4xl mx-auto overflow-y-auto  md:backdrop-blur-2xl bg-white text-blackrounded-md md:p-6">
        {/* <h1 className="text-2xl font-bold text-center mb-6 ">Tasks to Finish</h1> */}
  
        {/* <div className="overflow-x-auto w-full">
          {todo.length > 0 ? (
            <table className="border-collapse shadow-md rounded-lg w-full ">
              <thead className="">
                <tr className="text-left uppercase text-sm">
                  <th className="p-1">Title</th>
                  <th className="p-1 hidden md:block">Description</th>
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
                      <td className="text-left my-auto hidden md:table-cell">{task.description}</td>
                    <td className="p-1 flex justify-center gap-2">
                      <button onClick={()=>HandleDone(task._id)} className=" text-green-600 px-2  rounded-lg hover:bg-green-600 hover:text-white cursor-pointer  transition-all">
                      <FaCheck className='my-auto '/>
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
        </div> */}

        <div>
        {todo.map((task, index) => {
  const date = new Date(task?.deadline + 'T00:00:00'); // avoid timezone issues
  const options = { month: 'short', day: 'numeric', year: 'numeric', weekday: 'short' };
  const formattedDeadline = date.toLocaleDateString('en-US', options);

  return (
    <div key={index} className='bg-[#6c938e] p-6 rounded-md mt-2 text-white flex flex-col gap-4'>
      <div className='flex justify-between'>
        <p>Time Target</p>
        <p>{formattedDeadline}</p>
      </div>

      <div className='flex justify-between flex-wrap gap-3'>
        <p className='text-xl md:text-2xl'>{task.title}</p>
        <div className='flex gap-3'>
          <button onClick={()=>HandleDone(task._id)} className='py-1 px-4 rounded-md bg-green-500'>Done</button>
          <button onClick={()=>handleDelete(task._id)} className='py-1 px-4 rounded-md bg-[#354e4b]'>Trash</button>
        </div>
      </div>
    </div>
  );
})}

        </div>
      </div>
    );
};

export default Pending;