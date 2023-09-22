

const CategoryList = ({categoryList}) => {
    const {logo,category_name,availability}=categoryList
    return (
        <div>

            <div className="bg-[#c0c9ff] p-5  rounded-lg   ">
                <img src={logo} alt="" />
                <div className="">
                    <p className="text-lg font-medium">{category_name}</p>
                    <p>{availability}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;