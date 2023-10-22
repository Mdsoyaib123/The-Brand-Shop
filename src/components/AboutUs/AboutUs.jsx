
const AboutUs = () => {
    return (
       <>
       <h1 className="text-center text-5xl font-bold py-3">Why Choose Us !!!!</h1>
        <div className="flex w-full">
            <div className="w-1/2">
                <img src="https://i.ibb.co/w7q57Bj/Why-choose-us-600x400.png" alt="" />
            </div>
            <div className="w-1/2">
                <div className="my-5">
                <h3 className="text-xl font-bold ">Quality Assurance:</h3>
                <p>Quality Assurance (QA) is a systematic process that ensures the quality and reliability of products, services, or processes. It sets standards and guidelines to prevent defects, focusing on consistency, customer satisfaction, and continuous improvement.  </p>
                </div>
                <div className="my-5">
                <h3 className="text-xl font-bold ">Customer-Centric Approach:</h3>
                <p>A customer-centric approach is a business philosophy that places the customer at the core of all decision-making processes. It prioritizes understanding and meeting the needs and expectations of customers. This approach aims to build lasting relationships, enhance customer satisfaction, and drive business success by focusing on delivering value and exceptional experiences</p>
                </div>
                <div className="my-5">
                <h3 className="text-xl font-bold ">Innovation:</h3>
                <p>Innovation is the driving force behind progress and growth in today dynamic business landscape. It involves the creative application of new ideas, technologies, or processes to solve problems, enhance products or services, and stay ahead in the competitive market. Innovation fuels transformation, fosters adaptability, and can lead to breakthroughs that revolutionize industries.</p>
                </div>

            </div>
        </div>
       </>
    );
};

export default AboutUs;