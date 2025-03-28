
import AllSkils from './AllSkills/AllSkils';
import Done from './Done/Done';
import Pending from './Pending/Pending';
import Todo from './Todo/Todo';

const WorkEntry = () => {



    return (
        <div>
            <div className='flex flex-col md:flex-row  my-12'>
            <Pending></Pending>
            <Todo></Todo>
            <Done></Done>
           
            </div>

            
        </div>
    );
};

export default WorkEntry;