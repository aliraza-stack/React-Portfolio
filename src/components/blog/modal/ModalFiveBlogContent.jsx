import React from "react";

const ModalFiveBlogContent = () => {
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
          <i className="fa fa-calendar"></i> 9 January 2020
        </span>
        <span>
          <i className="fa fa-tags"></i> Deep Learning
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Avalution in Deap Learning</h1>
      <img src="img/blog/blog-post-5.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        Time series prediction with neural networks has been the focus of much research in the past few decades. 
        Given the recent deep learning revolution, there has been much attention in using deep learning models 
        for time series prediction, and hence it is important to evaluate their strengths and weaknesses. In this 
        paper, we present an evaluation study that compares the performance of deep learning models for multi-step 
        ahead time series prediction. The deep learning methods comprise simple recurrent neural networks, long 
        short-term memory (LSTM) networks, bidirectional LSTM networks, encoder-decoder LSTM networks, and 
        convolutional neural networks. We provide a further comparison with simple neural networks that use 
        stochastic gradient descent and adaptive moment estimation (Adam) for training. We focus on univariate 
        time series for multi-step-ahead prediction from benchmark time-series datasets and provide a further 
        comparison of the results with related methods from the literature. The results show that the 
        bidirectional and encoder-decoder LSTM network provides the best performance in accuracy for the given 
        time series problems.
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
          It’s All about Scaling Most of the current learning algorithms were discovered more than twenty-five 
          years ago, so why did it take so long for them to have an impact on the real world? With the 
          computers and labeled data that were available to researchers in the 1980s, it was only possible 
          to demonstrate proof of principle on toy problems. Despite some promising results, we did not know 
          how well network learning and performance would scale as the number of units and connections 
          increased to match the complexity of real-world problems. Most algorithms in AI scale badly and 
          never went beyond solving toy problems. We now know that neural network learning scales well and 
          that performance continues to increase with the size of the network and the number of layers. 
          Backprop, in particular, scales extremely well. Should we be surprised? The cerebral cortex is a 
          mammalian invention that mushroomed in primates and especially in humans. And as it expanded, more 
          capacity became available and more layers were added in association areas for higher-order 
          representations. There are few complex systems that scale this well. The Internet is one of the 
          few engineered systems whose size has also been scaled up by a million times. The Internet evolved 
          once the protocols were established for communicating packets, much like the genetic code for DNA 
          made it possible for cells to evolve. Training many deep learning networks with the same set of 
          data results in a large number of different networks that have roughly the same average level of 
          performance.
          </p>
        </div>
        <p>
        The bottleneck in a neural network is just a layer with fewer neurons than the layer below or above 
        it. Having such a layer encourages the network to compress feature representations (of salient 
        features for the target variable) to best fit in the available space.
        </p>
        <p>
        Deep convolutional neural networks (CNN or DCNN) are the type most commonly used to identify 
        patterns in images and video. DCNNs have evolved from traditional artificial neural networks, 
        using a three-dimensional neural pattern inspired by the visual cortex of animals. <br />
        Bottleneck process refers to the process where products requiring focused plans and controls 
        are manufactured, and includes the processes requiring machine/equipment whose quantity is 
        limited, mold tool, and special skills.
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalFiveBlogContent;
