import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {

    const jobs=useLoaderData();
    const {id}=useParams()
    const job=jobs.find(job=>job.id==id)
    console.log(job);
    return (
        <div className="container mx-auto">
            <div className="text-center my-20 font-medium text-5xl text-[#8b8bff] ">
                <h2>Job Details</h2>
            </div>
            
            <div className="grid gap-4 md:grid-cols-4 ">
                <div className="border md:col-span-3 p-6 space-y-4">

                <h2><span className="text-2xl font-medium text-[#8b8bff]">Job Description: </span>{job.job_description}</h2>
          
                <h2><span className="text-2xl font-medium text-[#8b8bff]">Job Responsibility: </span>{job.job_responsibility}</h2>
                 
                <h2><span className="text-2xl font-medium text-[#8b8bff]">Educational Requirements: </span>{job.educational_requirements}</h2>
                
                <h2><span className="text-2xl font-medium text-[#8b8bff]">Experiences: </span>{job.experiences}</h2>
                    
                </div>
                
                <div>

                      <div className="border bg-[#e7e9fc] p-4">
                          <h2 className="text-2xl font-medium">Job Details</h2>
                          <p className="border-b my-2"></p>
                          <p className="text-xl"><span className="text-xl font-medium" >Salary:</span> 100K - 150K Per Month</p>

                          <p className="text-xl mb-2"><span className="text-xl font-medium" >Job Title :</span> 100K - 150K Per Month</p>

                          <h2 className="text-2xl font-medium">Contact Information</h2>
                          <p className="border-b my-2"></p>

                          <p className="text-xl"><span className="text-xl font-medium" >Phone:</span> 100K - 150K Per Month</p>

                          <p className="text-xl mb-2"><span className="text-xl font-medium" >Email :</span> 100K - 150K Per Month</p>

                          <p className="text-xl"><span className="text-xl font-medium" >Address :</span> 100K - 150K Per Month</p>

                      
                          
                      </div>

                <button className="btn btn-primary w-full mt-2">Apply Now</button>
                </div>
               

            </div>
        </div>
    );
};

export default JobDetails;