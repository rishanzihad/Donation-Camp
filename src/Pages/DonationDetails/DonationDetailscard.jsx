/* eslint-disable react/prop-types */
import swal from "sweetalert";

const DonationDetailscard = ({ donation }) => {
  const {
    id, title, category, description, cardBackGroundColour,
    categoryBackGroundColour, textColour, image, price
  } = donation;
   
  const handleDonate =()=>{
    const addedDonated =[];
    const donatedCard = JSON.parse(localStorage.getItem('donated'))
      if(!donatedCard){
        addedDonated.push(donation)
        localStorage.setItem('donated',JSON.stringify(addedDonated))
        swal("Good job!", "Product Added Successful", "success");
      }
      else{
        const isExits =donatedCard.find(donation=> donation.id == id)

        if(!isExits){
          addedDonated.push(...donatedCard,donation)
        localStorage.setItem('donated',JSON.stringify(addedDonated))
        swal("Good job!", "Product Added Successful", "success");
        }
        else{
          swal("Added Failed!", "No Duplicate", "error");
        }
      }
  }
  return (
    <div>
      <div className="card relative ">
        <figure>
          <img className="w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <p></p>
          <div className="card-actions flex items-center h-20 -ml-[30px]  w-full absolute -mt-28 shadow justify-start">
           
            <div className="absolute  w-full h-full bg-black opacity-30"></div>

            <button onClick={handleDonate}
              className="btn relative z-10"
              style={{ backgroundColor: `${textColour}` }}
            >
              Donate ${price}
            </button>
          </div>
        </div>
      </div>
        <div className="px-5 ">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <p>{description}</p>
            </div>
    </div>
  );
};

export default DonationDetailscard;
