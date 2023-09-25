const DonationDetailscard = ({ donation }) => {
    const {
      id, title, category, description, cardBackGroundColour,
      categoryBackGroundColour, textColour, image, price
    } = donation;
  
    return (
      <div>
        <div className="card relative ">
          <figure>
            <img className="w-full" src={image} alt="Shoes" />
          </figure>
          <div className="card-body ">
            <p></p>
            <div className="card-actions flex items-center h-20 lg:h-20 w-full absolute -mt-28 shadow justify-start">
            
              <div className="absolute w-full  h-full bg-black opacity-30"></div>
  
              <button
                className="btn relative z-10"
                style={{ backgroundColor: `${textColour}` }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DonationDetailscard;
  