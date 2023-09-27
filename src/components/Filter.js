import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center items-center'>
        {
            filterData.map((data) => {
                return(
                    <button className={
                        `text-lg px-2 py-1 rounded-md font-medium text-white bg-blue-950 hover:bg-opacity-50 border-2  transition-all duration-300
                        ease-in-out 
                        ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}
                        `
                    } key={data} onClick={() =>  filterHandler(data.title) }>{data.title}</button>
                )
            
        })
        }
        
    </div>
  )
}

//the flow goes like this for the filter button onclick event:
// 1. The user clicks on the filter button.
// 2. The onClick event is triggered.
// 3. The onClick event calls the filterHandler function.
// 4. The filterHandler function gets the title of the button which is clicked.
// 5. The filterHandler function then calls the setCategory function and passes the title of the button which is clicked.
// 6. The setCategory function then sets the category state to the title of the button which is clicked.
// 7. The category state is passed to the Cards component as a prop.
// 8. The Cards component then renders the cards according to the category state.
// 9. The Cards component then calls the getCourses function.
// 10. The getCourses function then checks the category state.
// 11. If the category state is 'All', then it returns all the courses.
// 12. If the category state is not 'All', then it returns only the courses of that category.
// 13. The Cards component then maps over the courses and renders the cards accordingly.

// before the useState renders the Cards, it asks, which category should be rendered. Here it passes the category which is to be rendered via the category
export default Filter