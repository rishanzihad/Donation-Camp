import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailscard from "./DonationDetailscard";

const DonationDetails = () => {
    const [donation,setdonation] =useState([])
    const {id} =useParams()
    const donations =useLoaderData()
    useEffect(()=>{
        const findDonation =donations && donations?.find( donation => donation.id == id)
        setdonation(findDonation)
       
    },[id,donations])
    
    
    return (
      
        <div>
          
            <DonationDetailscard key={donation.id} donation={donation}></DonationDetailscard>
        </div>
    );
};

export default DonationDetails;
  