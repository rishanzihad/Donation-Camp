import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className=" h-[80vh] back" >
            <div className="flex justify-between items-center p-5">
            <img className="h-10" src="https://i.ibb.co/Xtm6Lx2/Logo.png" alt="" />
            <div className="flex gap-5 text-2xl">
            <NavLink to='/' className={({isActive , isPending})=> isPending? 'pending' : isActive? 'text-green-400 underline ': ''}>Home</NavLink>
            <NavLink to='/donation' className={({isActive , isPending})=> isPending? 'pending' : isActive? 'text-green-400 underline ': ''}>Donation</NavLink>
            <NavLink to='/statics' className={({isActive , isPending})=> isPending? 'pending' : isActive? 'text-green-400 underline ': ''}>Statics</NavLink>
            </div>
        </div>
           <div className="mt-32 ">
           <h1 className="text-5xl font-bold  flex items-center justify-center">I Grow By Helping People In Need</h1>
           <div className="mt-20 flex justify-center items-center"><input className="shadow w-96 h-10 bg-slate-100" type="text" /> <button className="btn bg-red-500">Scarch</button></div>
           </div>
        </div>
    );
};

export default Header;