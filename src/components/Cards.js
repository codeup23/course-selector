import React from 'react';
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    const[likedCourses, setLikedCourses] = useState([]); // This is the state which will store the liked courses. Initially it is empty. But when the user clicks on the like button, the course will be added to this array. And when the user clicks on the like button again, the course will be removed from this array. This is the state which will be passed to the Card component. So that the like button can be rendered accordingly.


    function getCourses(){

        if(category === 'All'){
            let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        });
        return allCourses;
    }
    else {
        //return only specific category courses
        return courses[category];
    }
        
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {/* Now to render different cards, we don't have to create different cards each time. Rather we can use the map function to work on arrays so that the data on different cards is rendered differently for each element of the array. But we have data in object format. So first, create the array of data which was earlier received in json format */}
        {
            getCourses().map((course) => (
                <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
            )
            )
        }



    </div>
  )
}

export default Cards;