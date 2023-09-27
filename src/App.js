import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from './data';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './components/Spinner';


const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const[category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    // set the loading spinner to true till the data is fetched from the api, so that it will show a loading spinner till the data is fetched from the api.
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch (error) { 
      toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
    // set the loading spinner to false when the data is fetched from the api, so that it will not show a loading spinner when the data is fetched from the api.
  }

  // calling the function fetchData() inside useEffect() hook so that it will be called only once and will not render again and again. useEffect is used here so that it will be called only once when the component is mounted.

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-800">
      <div>
        <Navbar  />
      </div>
      <div className='bg-slate-800'>
          <div>
        <Filter filterData={filterData} category={category} setCategory = {setCategory} />
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex  flex-wrap justify-center items-center min-h-[50vh]'>
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
        }

      </div>
      </div>
      

    </div>
  );
}

export default App;
