const Banner = () => {
  return (
    <div>
      <div className="hero my-10 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/images/user.png"
            className="max-w-md rounded-lg "
          />
          <div>
            <h1 className="text-5xl font-bold">One Step <br />
             Closer To Your <br />
            <span className="text-[#7E90FE]">Dream Job</span> </h1>
            <p className="py-6">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
