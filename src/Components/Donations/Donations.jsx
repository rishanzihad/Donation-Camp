/* eslint-disable react/prop-types */
import DonationCard from "./DonationCard";


const Donations = ({donations}) => {
    return (
        <div className="grid lg:grid-cols-4 gap-5 grid-cols-2 md:grid-cols-3">
            {
                donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default Donations;