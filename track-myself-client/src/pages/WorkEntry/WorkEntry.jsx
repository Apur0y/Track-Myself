
import Slider from '../Slider/Slider';
import AllSkils from './AllSkills/AllSkils';
import Banner from './Banner/Banner';
import Done from './Done/Done';
import Pending from './Pending/Pending';
import Todo from './Todo/Todo';

const WorkEntry = () => {



    return (
        <div>
           
            <div className='flex gap-5 flex-col-reverse  mx-auto  py-10 '>

            <div className='flex  mt-12 '>
                <Todo></Todo>
            </div>

            <Pending></Pending>
         
            </div>

            <Slider></Slider>

            <Banner></Banner>
        </div>
    );
};

export default WorkEntry;