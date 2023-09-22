import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {

const [jobs,setJobs]=useState([]);

const [dataLength,setDataLength]=useState(4);


useEffect(()=>{
    fetch("jobs.json")
    .then(res=>res.json())
    .then(data=>setJobs(data));
},[])


  return (
    <div className="px-[70px] mt-10">
      <div className="text-center my-4">
        <h1 className="text-3xl font-bold">Featured Jobs: {jobs.length}</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        
      </div>

      <div className="grid grid-cols-2 gap-6">
        {
            jobs.slice(0,dataLength).map((job,idx)=> <Job key={idx} job={job}></Job>)
        }

      </div>

      <div className={"text-center my-6"}>
        <button onClick={()=>setDataLength(jobs.length)}  className="btn btn-primary">See All Jobs</button>
        </div>
    </div>
  );
};

export default FeaturedJob;
