import { useState, useNavigate } from "react";
import { Link } from "react-router-dom";

const Areas = () => {
  const [value, setValue] = useState("select");
  // const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-stone-300 text-center h-screen">
      <div className=" flex flex-col items-center h-fit py-10 px-6 rounded-3xl  w-4/5 md:w-3/5 lg:w-2/5 bg-white" >
                        <div className="">
                                <p className="text-2xl text-black">Select Your category to compare</p>
                        </div>
                        <div className="w-full m-4">

                                <select
                                  className="text-xl text-center p-3 appearance-none border-4 border-stone-300 lg:w-1/2 md:w-3/5 w-4/5 rounded-full hover:border-sky-900 hover:text-sky-900"
                                  value={value}
                                  onChange={handleChange}
                                >
                                  <option value="select">Select Category</option>
                                  <option value="Medical">Medical</option>
                                  <option value="Clothing">Clothing</option>
                                  <option value="Grocery">Grocery</option>
                                  <option value="smartphone">Smartphone</option>
                                </select>
                        </div>
                        <div className="w-full">
                                {value === "select" ? (
                                  <p className="text-center mb-5 text-black text-lg">
                                    Please select any category
                                  </p>
                                ) : (
                                  <p className="text-center m-5 text-black text-lg">
                                    Submit Button to confirm <span className="text-sky-900 font-bold">{value}</span> for your product
                                  </p>
                                )}
                        </div>
                        <div className="w-full">
                                <button className="bg-stone-300 hover:bg-sky-900 hover:text-white lg:w-1/2 md:w-3/5 w-4/5  text-md p-3 rounded-full">
                                  <Link
                                    className="btn"
                                    to={{
                                      pathname: `/search-page/${value}`,
                                      value,
                                    }}
                                  >
                                    SUBMIT
                                  </Link>
                                </button>
                        </div>
      </div>
    </div>
  );
};

export default Areas;