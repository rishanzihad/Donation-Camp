import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="  " >
            <div className="flex justify-between items-center p-5">
            <img className="h-10" src="https://i.ibb.co/Xtm6Lx2/Logo.png" alt="" />
            <div className="flex gap-5 text-2xl">
            <NavLink to='/' className={({isActive , isPending})=> isPending? 'pending' : isActive? 'text-green-400 underline ': ''}>Home</NavLink>
            <NavLink to='/donation' className={({isActive , isPending})=> isPending? 'pending' : isActive? 'text-green-400 underline ': ''}>Donation</NavLink>
            <NavLink to='/statics' className={({isActive , isPending})=> isPending? 'pending' : isActive? 'text-green-400 underline ': ''}>Statics</NavLink>
            </div>
        </div>
           
        </div>
    );
};

export default Header;