import React from "react";

const ModalThreeBlogContent = () => {
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
          <i className="fa fa-calendar"></i> 9 January 2018
        </span>
        <span>
          <i className="fa fa-tags"></i> Web Accessibility
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Everything You Need to Know About Web Accessibility</h1>
      <img src="img/blog/blog-post-3.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        Undoubtedly, the internet is one of the most important inventions in our modern time. 
        Currently, there are 4.33 billion internet users, which is equivalent to half the global population.
        <br />
        The internet technology has truly changed the way we do things. From accessing news and information
         to obtaining an education, planning our career, seeking jobs, transacting with government offices, 
         buying things, etc. It’s hard to imagine life without it.
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
          Web Accessibility is not only for people with disabilities but for all of us who are 
          thankful that there are no barriers in using our abilities.
          </p>
        </div>
        <p>
        <h1>What is Web Accessibility?</h1>
        Web accessibility is making sure that the internet (from websites to tools and other platforms) 
        can be accessed by everyone. And by ‘everyone’ we mean all individuals, including those who have 
        cognitive or physical impairments or limitations. <br />
        When people think about ADA web accessibility, they usually think about blind or deaf people. 
        But it’s not just them who should be given the opportunity to access the internet with ease. 
        Every individual who suffers from any disorder, disease, or disability should also be considered 
        when designing websites. In addition to physical disabilities, web accessibility also covers people 
        who have situational disabilities and socio-economic restrictions (e.g. those with lower bandwidth 
        should still be able to access the information or service they need online).
        </p>
        <p>
        Accessibility is Important for Individuals, Businesses, and the Society
          It isn’t hard to see the importance of web accessibility to individuals. Think of a first-time mom 
          who has to learn to do everything with a baby in her arms or a person who has just been through 
          major surgery. Another example is a retiree who is still learning how to navigate the internet 
          from her phone. Making the web accessible to individuals regardless of their status, age, 
          condition, or situation is important to make their web experience a positive and meaningful one.
          <br />
          But how about businesses? Isn’t designing an inclusive website means extra work and 
          investment? Are there any real benefits of web accessibility to businesses?
          <br />
          Well, the answer is a big YES.
          <br />
          First of all, it connects you to a larger pool of potential customers. A user-friendly website 
          can attract younger people, seniors, veterans, people with cognitive disorders (e.g. those with 
          very little attention span or have memory problems), and those with mobility issues. Meanwhile, 
          adding braille functions, captions/subtitles, or audio transcripts to your website can help you 
          reach out to people with sensory problems who constitute a significant percentage of the global 
          population.
          <br />
          With its huge benefits to individuals and businesses, web accessibility, therefore, plays a 
          critical role in society. An accessible website enables people with disabilities to participate 
          more actively in society.
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalThreeBlogContent;
