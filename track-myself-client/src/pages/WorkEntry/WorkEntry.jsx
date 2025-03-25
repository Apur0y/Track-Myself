
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSkills} from '../../feature/calculate/calculateSlice';

const WorkEntry = () => {


    const value = useSelector(state=>state.calculate.value);
    const dispatch =useDispatch()
    console.log(value);

    return (
        <div>

            <button  aria-label="Increment value" className='btn' onClick={()=>dispatch(addSkills())}>
                Click here
            </button>

            <p>{value}</p>
            
        </div>
    );
};

export default WorkEntry;