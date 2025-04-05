
import AllSkils from './AllSkills/AllSkils';
import Banner from './Banner/Banner';
import Done from './Done/Done';
import Pending from './Pending/Pending';
import Todo from './Todo/Todo';

const WorkEntry = () => {



    return (
        <div>
              <Banner></Banner>
            <div className='flex gap-5 w-11/12 mx-auto flex-col py-10'>
          
          
            <Pending></Pending>
            <div className='flex items-center justify-center'>
               
                <Todo></Todo>
            </div>
         
            </div>

            
        </div>
    );
};

export default WorkEntry;