/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";




const DonationCard = ({donate}) => {
    const {
        id, title, category, description, cardBackGroundColour,
        categoryBackGroundColour, textColour, image, price
      } = donate;
    
    return (
        <div className="relative mt-6 md:flex w-full  max-w-[48rem]  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-full md:flex-1  shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="w-full h-full "
    />
  </div>
  <div className="p-6  md:flex-1 " style={{backgroundColor:`${cardBackGroundColour}`}}>
    <h6 className="mb-4 text-center text-white rounded p-2 max-w-[120px] block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal antialiased" style={{backgroundColor:`${categoryBackGroundColour}`,color:`${textColour}`}}>
      {category}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
    <p style={{color:`${textColour}`}} className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      ${price}
    </p>
    <button className="Btn rounded p-2 text-white" style={{backgroundColor:`${textColour}`}}>
        View Details
    </button>
  </div>
</div>

    );
};

export default DonationCard;