

const Banner = () => {
    return (
        <div className="mb-10">
           <div className="hero max-h-screen lg:min-h-[80vh]" style={{backgroundImage: 'url(https://i.ibb.co/0Jk5htH/535b618c44b9dde-jpg-wh860.jpg)'}}>
    <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
     <div className="lg:max-w-full max-w-sm">
     <div className="mt-32">
           <h1 className=" text-2xl lg:text-5xl font-bold  flex items-center justify-center">I Grow By Helping People In Need</h1>
           <div className="mt-10 mb-10 flex justify-center items-center"><input className="shadow w-96 h-10 bg-slate-100" type="text" /> <button className="btn bg-red-500">Scarch</button></div>
           </div>
        </div>
        </div>
     </div>
        </div>
    );
};

export default Banner;