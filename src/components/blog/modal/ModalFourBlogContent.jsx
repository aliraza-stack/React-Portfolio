import React from "react";

const ModalFourBlogContent = () => {
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
          <i className="fa fa-user"></i> aliraza
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 9 January 2021
        </span>
        <span>
          <i className="fa fa-tags"></i>python, machine learning, data science
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Augmented Reality</h1>
      <img src="img/blog/blog-post-4.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        Augmented reality (AR) is an interactive experience of a real-world environment where the objects 
        that reside in the real world are enhanced by computer-generated perceptual information, sometimes 
        across multiple sensory modalities, including visual, auditory, haptic, somatosensory and olfactory.
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
          I'm excited about Augmented Reality because unlike Virtual Reality, which closes the world out, 
          AR allows individuals to be present in the world but hopefully allows an improvement on what's 
          happening presently.
          </p>
        </div>
        <p>
        <h1>What is augmented reality used for?</h1>
        Key Takeaways. Augmented reality (AR) involves overlaying visual, auditory, or other sensory 
        information onto the world in order to enhance one's experience. Retailers and other companies 
        can use augmented reality to promote products or services, launch novel marketing campaigns, and 
        collect unique user data.
        </p>
        <p>
        <h1>What is augmented reality and example?</h1>
        Augmented reality or AR is technology that presents us with virtual objects and information in our 
        field of vision. If I am looking at a street, for example, and point my smartphone towards that street, 
        it may give me more information, such as names of cafes, gyms, dentists, etc.
        <h1>What is the difference between VR and AR?</h1>
        Augmented reality (AR) augments your surroundings by adding digital elements to a live view, 
        often by using the camera on a smartphone. Virtual reality (VR) is a completely immersive experience 
        that replaces a real-life environment with a simulated one.
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalFourBlogContent;
