import DonationCard from "./DonationCard";


/* eslint-disable react/prop-types */
const Match = ({ donationss }) => {
    return (
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {donationss.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)}
      </div>
    );
  };
  
  export default Match;