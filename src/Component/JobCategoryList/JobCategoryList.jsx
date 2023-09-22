import { useEffect, useState } from "react";
import CategoryList from "../CategoryList/CategoryList";


const JobCategoryList = () => {
   const [categoryLists,setCategoryLists]=useState([])

   useEffect(()=>{
    fetch('categories.json')
    .then(res=>res.json())
    .then(data=>setCategoryLists(data))
   },[])

    return (
        <div className="px-[70px]">
            <div className="text-center my-4">
                  <h1 className="text-3xl font-bold">Job Category List {categoryLists.length}</h1>
                  <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-4 gap-8">


                  {
                categoryLists.map((categoryList,idx)=> <CategoryList key={idx} categoryList={categoryList} ></CategoryList>)
            }
            </div>

          
    
        </div>
    );
};

export default JobCategoryList;