import banner from './Banner.css'
const Banner = () => {
    return (
       <div className='fullDiv'>
         <div style={{backgroundImage:`url("https://i.ibb.co/PcZXCXy/pexels-josh-sorenson-1714208.jpg")`}} className="text-center text-white  max-h-screen banner py-40 mt-7">
            <h1 className="text-4xl py-5  pt-8 font-bold ">Get Wired into the Future: <br></br> Explore our Tech & Electronics Collection</h1>
            <p className="pb-4"> Our Diverse Range: From cutting-edge gadgets to home automation,<br></br> we have got it all. Discover the latest smartphones, laptops, gaming gear, smart home devices,<br></br> and so much more.</p>
            <button className="bg-[red] text-white rounded px-4 py-2">GET STARTED</button>
        </div>
       </div>
    );
};

export default Banner;