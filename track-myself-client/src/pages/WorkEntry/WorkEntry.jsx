
import Slider from '../Slider/Slider';
import AllSkils from './AllSkills/AllSkils';
import Banner from './Banner/Banner';
import Done from './Done/Done';
import Pending from './Pending/Pending';
import Todo from './Todo/Todo';

const WorkEntry = () => {



    return (
        <div>
           
            <div className='flex gap-5 flex-col-reverse md:flex-row mx-auto  py-15 '>

            <div className='flex  mt-10 '>
                <Todo></Todo>
            </div>

            <div className='flex-1'>
            <Pending></Pending>
            </div>

            
         
            </div>

            <Slider></Slider>

            <Banner></Banner>
        </div>
    );
};

export default WorkEntry;