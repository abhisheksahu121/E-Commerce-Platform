import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="aboutus"
            style={{ width: "100%" }}
          ></img>
        </div>
        <div className="col-md-4">
          {/* <h1 className='bg-dark p-2 text-white text-center'>ABOUT US</h1> */}
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut any
            query and info about product feel free to call anytime we 24*7
            available
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
