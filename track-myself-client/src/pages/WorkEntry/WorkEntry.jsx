
import AllSkils from './AllSkills/AllSkils';
import Pending from './Pending/Pending';
import Todo from './Todo/Todo';

const WorkEntry = () => {



    return (
        <div>
            <div className='flex my-12'>
            <Todo></Todo>
            <Pending></Pending>
            </div>

            
        </div>
    );
};

export default WorkEntry;