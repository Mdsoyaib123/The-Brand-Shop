
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const Slider = () => {
   
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '500px'
      }
      const spanStyle = {
        padding: '20px',
        background: 'black',
        color: 'white',
        'font-size':'30px',
        'text-align':'center'
      }
      const slideImages = [
        {
            url: 'https://i.ibb.co/Jjyx7X3/202356-1.jpg'
            
        },
        {
          url: 'https://i.ibb.co/vv198td/open-data-database-integration-api-internet-technology-concept-open-data-database-integration-api-in.jpg',
          caption: "Elevate Your Digital Experience with [Product Name]: The Future Is Now!!"
         
        },
        
        {
          url: 'https://i.ibb.co/vDXmBwK/8837-Onam-CE-KV-Banner-3000x2000.jpg'
          
        },
      ];
    // useEffect(()=>{
    //     fetch('/slider.json')
    //     .then(res=>res.json())
    //     .then(data=> setImg(data))
    // },[])
    return (
        <div className="slide-container mb-20 mt-10">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    );
};

export default Slider;