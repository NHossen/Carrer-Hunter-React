import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {job_title,logo,company_name,location,salary,remote_or_onsite,job_type,id}=job
    return (
        <div>
            <div className="card  bg-base-100 border">
          <div className="card-body">
            <img className="w-32" src={logo} alt="" />
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <div className="card-actions ">
              <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
              <button className="btn btn-outline btn-primary">{job_type}</button>
            </div>
            {/* Location Salary details */}
            <div
              className="flex
    "
            >
              <p>{location}</p>
              <p>$ Salary : {salary}</p>
            </div>


            <div className="card-actions ">
                <Link to={`/job/${id}`}>
                <button  className="btn btn-primary">View Details</button>
                </Link>
              
            </div>
          </div>
        </div>


            
        </div>
    );
};

export default Job;