import React from "react";

const ModalOneBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Post <span>Details</span>
        </h1>
        <span className="title-bg">posts</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span>
          <i className="fa fa-user"></i>aliraza
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 9 January 2021
        </span>
        <span>
          <i className="fa fa-tags"></i>Technology, Virtuality, Digital Twin
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Digital Twin Technology</h1>
      <img src="img/blog/blog-post-1.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        A digital twin is a virtual representation that serves as the real-time digital 
        counterpart of a physical object or process. Though the concept originated earlier 
        the first practical definition of a digital twin originated from NASA in an attempt 
        to improve physical-model simulation of spacecraft in 2010.
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
          The ultimate vision for the digital twin is to create, test and build our equipment 
          in a virtual environment. Only when we get it to where it performs to our requirements 
          do we physically manufacture it.
          </p>
        </div>
        <p>
        An example of digital twins is the use of 3D modeling to create digital companions 
        for the physical objects. It can be used to view the status of the actual physical 
        object, which provides a way to project physical objects into the digital world.
        </p>
        <p>
        Digital twins are virtual replicas of physical devices – assets, systems, or processes – 
        that data scientists and IT personnel can use to run simulations. Digital twins are 
        designed to detect and prevent problems, predict performance, and optimize processes 
        through real-time analytics to deliver business value. Generally speaking, there are 
        three types of digital twin – Product, Production, and Performance, which are explained 
        below. The combination and integration of the three digital twins as they evolve together 
        is known as the digital thread.
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalOneBlogContent;
