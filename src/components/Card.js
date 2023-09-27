import React from 'react';
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //pehle se like hua pada tha
            setLikedCourses((prev) => prev.filter((cid)=> cid!== course.id) );
            toast.warning("Course unliked");
        }
        else{
            // pehle se like nhi hua tha
            //insert karna hai ye liked courses me
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                // pehle se non-empty hai
                // to iss case me jo pehle se element pade huye hain unko copy karke naye array me daal do aur uske baad naya element bhi daal do
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Course liked");
        }
    }

  return (
    <div className='w-[300px] bg-slate-700 rounded-md overflow-hidden bg-opacty-80'>
        <div className='relative'>

            <img src={course.image.url}/>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-18px] grid place-items-center'>
            <button onClick={clickHandler}>
                {
                    likedCourses.includes(course.id) ? <FcLike className='text-2xl text-red-700'/> : <FcLikePlaceholder className='text-2xl'/>
                    // agar pehle se pada hai, matlab includes wali condition sahi hai, to iska matlab ye hai ki course liked hai, to like button ko red color me render karo warna grey color me render karo
                }
            </button>
        </div>
        </div>

        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='text-white mt-2'>
                {
                    course.description.length > 100 ? course.description.slice(0, 100) + '...' : course.description
                }
                
            </p>
            {/* ab yahaan description me hame change ye lana hai ki agar 100 se zyada length hai to fir 100 hi characters display ho, warna pura display kara denge */}
        </div>
    </div>
  )
}

export default Card;