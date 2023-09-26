/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";

const DonationCard = ({donation}) => {
  console.log(donation)
  const {id,title,category,description,cardBackGroundColour,categoryBackGroundColour,textColour,image}=donation
    

    console.log(donation)

    return (
        <div >
           <Link to={`/details/${id}`}>
           <div  className="  relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{backgroundColor:`${cardBackGroundColour}` }}>
            
            <div className="relative    overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
              <img
                src={image}
                className=" w-full object-cover"
              />
            </div>
            <div className="p-6 " style={{ color: `${textColour}`} }>
              <div className="mb-2 flex items-center justify-between">
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased rounded p-1" style={{backgroundColor:`${categoryBackGroundColour}` }}>
                  {category}
                </p>
                
              </div>
              <h1 className=" block  w-full font-sans text-sm font-bold leading-normal  antialiased">
               {title}
              </h1>
            </div>
            
          </div>
           </Link>

        </div>
    );
};

export default DonationCard;