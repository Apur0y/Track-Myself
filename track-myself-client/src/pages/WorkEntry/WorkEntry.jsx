
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSkills} from '../../feature/calculate/calculateSlice';
import AllSkils from './AllSkills/AllSkils';

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
            <AllSkils></AllSkils>
            
        </div>
    );
};

export default WorkEntry;