import React from "react";

const ModalTwoBlogContent = () => {
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
          <i className="fa fa-calendar"></i> 9 January 2020
        </span>
        <span>
          <i className="fa fa-tags"></i> Tools &amp; Technology
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Top 10 Toolkits for Deep Learning in 2020</h1>
      <img src="img/blog/blog-post-2.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
          Top 10 open source deep learning tools:
          <br />1.  TensorFlow
          <br />2.  Keras
          <br />3.  Pytorch
          <br />4.  OpenNN
          <br />5.  Caffe
          <br />6.  CNTK
          <br />7.  MXNet
          <br />8.  Torch7
          <br />9.  DeepLearningKit
          <br />10. Pytorch
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
          Deep learning is deeply intertwined with our lives today, and promises 
          to enter many more domains in the near future. This article briefly 
          describes the best open source deep learning tools.
          </p>
        </div>
        <p>
        Alexa on your side table playing your favourite song, autonomous cars on the road, 
        or Netflix suggesting shows based on what you have watched…the power of deep learning 
        is evident all around us! A number of open source deep learning tools are used in this 
        field. Let us take a brief look at some of the best ones.
        </p>
        <p>
        <h1>TensorFlow Features</h1>
          <br />1.  Provides an end-to-end model, from building to deployment
          <br />2.  Supports model deployment on mobile devices and embedded devices also
          <br />3.  Good documentation and help from the community
          <br />4.  Extensive support for multiple GPUs
          <br />5.  Graph visualisation and queues
          <br />6.  Supports image processing, computer vision, natural language processing, 
          text classification, speech recognition, etc<br />
        <h1>Keras Features</h1>
          <br />1.  Extensive documentation and developer guides
          <br />2.  Easy to learn and use
          <br />3.  Offers clear and comprehensive error messages
          <br />4.  Supports models for mobile devices, the Web as well as for Java Virtual Machine
          <br />5.  Enables distributed deep learning models on graphics processing units (GPUs) and tensor processing units (TPUs)
          <br />6.  Broadly adopted in the research community as well as in the industries <br />
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalTwoBlogContent;
