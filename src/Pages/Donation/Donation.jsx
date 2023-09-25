import { useEffect, useState } from "react"
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donated,setDonated] =useState([])
    const [noFound, setNoFound] =useState(false)
    const [isShow, setIsShow] = useState(false)
    useEffect(()=>{
        const donatedCard = JSON.parse(localStorage.getItem('donated'))
        if(donatedCard){
            setDonated(donatedCard)
        }
        else{
           
            setNoFound('No Data Found')
        }
        
    },[])
    
    
    return (
        <div>
            {
                noFound ? <p className="h-[50vh] flex justify-center items-center">{noFound}</p>:
                 <div className="mt-10 ">
                    
                    <div className=" grid lg:grid-cols-2 gap-4 ">
                    
                    {
                       isShow ?donated.map((donate) => (<DonationCard key={donate.id} donate={donate}></DonationCard>))
                      :donated.slice(0,4).map((donate) => (<DonationCard key={donate.id} donate={donate}></DonationCard>))
                    }
                 </div>
                 {donated.length>4 && !isShow && <button onClick={()=> setIsShow (true) } className="btn block mt-4 mx-auto btn-primary">{'See More'}</button>}
                 </div>
            }
        </div>
    );
};

export default Donation;