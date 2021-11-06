import Countdown from "react-countdown";
import './App.css';
import './assets/css/fontawesome.css'
import logo from '../src/assets/images/default-logo.png';
import b1 from '../src/assets/images/b1.jpg';
import side1 from '../src/assets/images/services-right-dec.png';
import side2 from '../src/assets/images/services-left-dec.png';
import services1 from '../src/assets/images/service-icon-01.png';
import services2 from '../src/assets/images/service-icon-01.png';
import services3 from '../src/assets/images/service-icon-01.png';
import services4 from '../src/assets/images/service-icon-01.png';
import roadmapleft from '../src/assets/images/about-left-image.png';
import serviceicon1 from '../src/assets/images/service-icon-01.png';
import serviceicon2 from '../src/assets/images/service-icon-02.png';
import serviceicon3 from '../src/assets/images/service-icon-03.png';
import faqpng from '../src/assets/images/faq.png';
import footerdec from '../src/assets/images/footer-dec.png';
import './assets/css/owl.css'
function App() {
  return (
    <div className="App">

      {/* <!-- ***** Preloader Start ***** --> */}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* <!-- ***** Preloader End ***** --> */}

      {/* <!-- ***** Header Area Start ***** --> */}
      <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="index.html" className="logo">
                  <img src={logo}></img>
                </a>
                {/* <!-- ***** Logo End ***** -->
                <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li className="scroll-to-section"><a href="#mint">Mint</a></li>
                  <li className="scroll-to-section"><a href="#services">Services</a></li>
                  <li className="scroll-to-section"><a href="#about">Road Map</a></li>
                  <li className="scroll-to-section"><a href="#faq">FAQ</a></li>
                  <li className="scroll-to-section"><a href="#team">Team</a></li>
                  <li className="scroll-to-section main-blue-button-hover"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                  </svg> Join Our Discord</a> </li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ***** Header Area End ***** --> */}

      {/* Section one starts here*/}
      <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="">
                    <div className="item header-text">
                      <h6>Welcome to Pixel Whales</h6>
                      <h2>NFT For Awesome Pixilated Whales!</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <div className="down-buttons">
                        <div className="main-blue-button-hover m-1">
                          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                          </svg> Join Our Discord</a>
                        </div>
                        <div className="main-blue-button-hover m-1">
                          <a href="#mint"><i>Mint</i> </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 align-self-center mt-3 auto-resizable-iframe">
                  <iframe height="315" width="80%" src="https://www.youtube.com/embed/snYu2JUqSWs?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section one ends here*/}

      {/* Section two starts here*/}
      <div id="mint" className="contact-us section faqcenter">
      <div className="section-heading m-4">
          <h2><em>Mint On Whale</em> </h2>
          <h6>NFT best</h6>
         </div>
        <div className="col-lg-12 align-self-center">
          <form id="contact">
            <div className="box glowing m-1" style={{fontWeight:'800'}}>
          <Countdown date={Date.now() + 210000000} />
          </div>
            <div className="row">
              <div className="col-md-6">
                <img src={b1}></img>
              </div>
              <div className="col-md-6 mt-1">
                <h2>677/1000</h2>
                <div className="row mt-3">
                  <div className="col-8">
                    <div id="form">
                      <div>Quantity</div>
                      <div className="value-button" id="decrease" value="Decrease Value">-</div>
                      <input type="number" id="number" defaultValue="0" />
                      <div className="value-button" id="increase" value="Increase Value">+</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <div>Price</div>
                      <div>0 ETH</div>
                    </div>
                  </div>
                </div>
                <div className="main-blue-button-hover m-2">
                  <a href="#mint"><i>Mint Now!</i> </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Section two ends here*/}

      {/* Section three starts here*/}
      <div id="services" className="our-services section">
        <div className="services-right-dec">
          <img src={side1} alt="" />
        </div>
        <div className="container">
          <div className="services-left-dec">
            <img src={side2} alt="" />
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2><em>Our Showcase</em> </h2>
                <h6>Our Services</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-carousel owl-services">
                <div className="item">
                  <h4>Learn More about our Guidelines</h4>
                  <div className="icon"><img src={services1} alt="" /></div>
                  <p>Feel free to use this template for your business</p>
                </div>
                <div className="item">
                  <h4>Develop The Best Strategy for Business</h4>
                  <div className="icon"><img src={services2} alt="" /></div>
                  <p>Get to know more about the topic in details</p>
                </div>
                <div className="item">
                  <h4>UI / UX Design and Development</h4>
                  <div className="icon"><img src={services3} alt="" /></div>
                  <p>Get to know more about the topic in details</p>
                </div>
                <div className="item">
                  <h4>Discover &amp; Explore our SEO Tips</h4>
                  <div className="icon"><img src={services4} alt="" /></div>
                  <p>Feel free to use this  for your business</p>
                </div>
                <div className="item">
                  <h4>Optimizing your websites for Speed</h4>
                  <div className="icon"><img src={services1} alt="" /></div>
                  <p>Get to know more about the topic in details</p>
                </div>
                <div className="item">
                  <h4>See The Strategy In The Market</h4>
                  <div className="icon"><img src={services2} alt="" /></div>
                  <p>Get to know more about the topic in details</p>
                </div>
                <div className="item">
                  <h4>Best Content Ideas for your pages</h4>
                  <div className="icon"><img src={services3} alt="" /></div>
                  <p>Feel free to use this template for your business</p>
                </div>
                <div className="item">
                  <h4>Optimizing Speed for your web pages</h4>
                  <div className="icon"><img src={services4} alt="" /></div>
                  <p>Get to know more about the topic in details</p>
                </div>
                <div className="item">
                  <h4>Accessibility for mobile viewing</h4>
                  <div className="icon"><img src={services1} alt="" /></div>
                  <p>Get to know more about the topic in details</p>
                </div>
                <div className="item">
                  <h4>Content Ideas for your next project</h4>
                  <div className="icon"><img src={services2} alt="" /></div>
                  <p>Feel free to use this template for your business</p>
                </div>
                <div className="item">
                  <h4>UI &amp; UX Design &amp; Development</h4>
                  <div className="icon"><img src={services3} alt="" /></div>
                  <p>Get to know more about the topic in details</p>
                </div>
                <div className="item">
                  <h4>Discover the digital marketing trend</h4>
                  <div className="icon"><img src={services4} alt="" /></div>
                  <p>Get to know more about the topic in details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section three ends here*/}

      {/* Section four and five starts here*/}
      <div className="section faqcenter">
        <div className="left-image">
          <img src={roadmapleft} alt="Two Girls working together" />
        </div>
      </div>
      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <div className="section-heading m-4">
                <h2><em>Road Map</em> </h2>
                <h6>Steps and How</h6>
                </div>
              <div id="roadmap" className="section cairo_font">
                <div className="container">
                  <div className="row justify-content-between list_line scroll-animations">
                    <div className="col-12 col-md-5 road-item animated">
                      <div className="road-inner d-flex align-items-center">
                        <div>
                          <div className="road-content ">
                            <div className="road-caption">
                              🚀 0% | Social Media Growth
                            </div>
                            <div className="road-description">
                              • We will ramp up our Discord and Twitter accounts.<br />
                              • Doing giveaways for early supporters of the project and hire full-time team members to
                              help manage and grow the HCC community.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-5 road-item animate">
                      <div className="road-inner d-flex align-items-center">
                        <div className="order-1">
                          <div className="road-content">
                            <div className="road-caption">
                              🌵 10% | The Cactus Bank
                            </div>
                            <div className="road-description">
                              • Our community wallet will be funded with 5 ETH.<br />
                              • The Cactus Bank will be used for various purposes, decided by Hot Cactus holders.<br /> • We
                              will use these funds to sweep up the floor on Hot Cactus, acquire specific NFTs, support
                              other artists in the space, fund community ideas that benefit our project, and so on.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-5 road-item animated">
                      <div className="road-inner d-flex align-items-center">
                        <div>
                          <div className="road-content">
                            <div className="road-caption">
                              🎁 20% | Physical collectibles & Support Indigenous people
                            </div>
                            <div className="road-description">
                              • We’ll create a special Hot Cactus Box with physical collectibles.They will be winnable
                              for every Hot Cactus holders through Giveaways.<br />
                              • 10 Hot Cactus will be raffled to lucky Hot Cactus holders.<br />
                              • 15% of the Mexico population are indigenous people equivalent to 16M of humans.The Hot
                              Cactus Club will support them by donating 10 ETH to IGWIA association that supports
                              Indigenous everywhere in the World.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-5 road-item animate"  style={{ marginTop: '50px' }}>
                      <div className="road-inner d-flex align-items-center">
                        <div className="order-1">
                          <div className="road-content">
                            <div className="road-caption">
                              🏖 50% | Tequila & Vacation
                            </div>
                            <div className="road-description">
                              • We’ll create a special custom brand 'Hot Cactus Tequila'.1000 Special Edition Bottles
                              will be available for the first 5000 Hot Cactus sold.We’ll give you a special code to claim
                              your free bottle.Then, the bottle will be available on our merch shop.<br />
                              • 5 lucky Hot Cactus holders will win a vacationing week for him/her and the family.We’ll
                              communicate with them for more precision of what they want to do.(Ex: All-inclusive resort
                              or Mexico Discovery).
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-5 road-item animated"  style={{ marginTop: '0px' }}>
                      <div className="road-inner d-flex align-items-center">
                        <div>
                          <div className="road-content">
                            <div className="road-caption">
                              💵 75% | Give back to our community
                            </div>
                            <div className="road-description">
                              • We’ll find and offer a magnificent 67’ Chevrolet Impala or $40k in ETH to a lucky Hot
                              Cactus holder.<br />
                              • 50% of royalties from secondary sales will return to Hot Cactus holders each month,
                              through various giveaways, prizes, and raffles.HCC community will be able to vote on what
                              we raffle each month back to the community.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-5 road-item animate"  style={{ marginTop: '80px' }}>
                      <div className="road-inner d-flex align-items-center">
                        <div className="order-1">
                          <div className="road-content">
                            <div className="road-caption">
                              💯 100% | Coin, merch & more
                            </div>
                            <div className="road-description">
                              • We’ll create our own utility token, the Piñata coin.<br />
                              • 1st exclusive Hot Cactus Club physical merch drop.(Payable with $PNT token).<br />
                              • $PNT will be listed on different DEX tools.<br />
                              • Starting the development of Crazy Piñata, exclusive Desktop/Mobile game where you can play
                              and earn $PNT.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* inter-Section between section four and five starts here*/}
                <div className="section-heading m-4">
                <h2><em>Why I Should Buy Whale</em> </h2>
                <h6>Awesome NFT</h6>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="fact-item">
                      <div className="count-area-content">
                        <div className="icon">
                          <img src={serviceicon1} alt="" />
                        </div>
                        <div className="count-digit">320</div>
                        <div className="count-title">SEO Projects</div>
                        <p>Lorem ipsum dolor What is Lorem Ipsumsitti amet, consectetur.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="fact-item">
                      <div className="count-area-content">
                        <div className="icon">
                          <img src={serviceicon2} alt="" />
                        </div>
                        <div className="count-digit">640</div>
                        <div className="count-title">Websites</div>
                        <p>Lorem ipsum dolor sWhat is Lorem Ipsumitti amet, consectetur.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="fact-item">
                      <div className="count-area-content">
                        <div className="icon">
                          <img src={serviceicon3} alt="" />
                        </div>
                        <div className="count-digit">120</div>
                        <div className="count-title">Satisfied Clients</div>
                        <p>Lorem ipsum dolor sitti amet, consectetur.What is Lorem Ipsum</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section four and five ends here*/}

      {/* Section six starts here*/}
      <div id="faq" className="section faqcenter mt-5">
        <img src={faqpng} style={{ width: '70%' }} />
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <em>Question Item #1</em>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body road-description">
                <p><strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Question Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body road-description">
                <p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Question Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body road-description">
                <p><strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section six ends here*/}

      {/* Section seven starts here*/}
      <div id="team" className="container mt-5">
        
        <div className="section-heading m-4">
                <h2><em>Team</em> </h2>
                <h6>Creative Members</h6>
                </div>
        <div className="row g-2 text-center">
          <div className="col-md-4">
            <div className="card"> <img src="https://i.imgur.com/iNFaRXx.jpg" className="img-fluid rounded" />
              <div className="d-flex justify-content-center align-items-center">
                <div className="info info-yellow"> <span className="user-icons"><img src="https://i.imgur.com/1NZfd8E.png" width="30" /></span>
                  <div className="user-profile d-flex flex-row">
                    <div className="d-flex flex-column mr-4"> <span className="name">Sam Disauga</span> <small className="designation">Project Manager</small> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card"> <img src="https://i.imgur.com/4IqYoqv.jpg" className="img-fluid rounded" />
              <div className="d-flex justify-content-center align-items-center">
                <div className="info info-green"> <span className="user-icons"><img src="https://i.imgur.com/BeuqpVv.png" width="30" /></span>
                  <div className="user-profile d-flex flex-row">
                    <div className="d-flex flex-column mr-3"> <span className="name">Nick Panagio</span> <small className="designation">Google Search Manager</small> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card"> <img src="https://i.imgur.com/LvZVIzy.jpg" className="img-fluid rounded" />
              <div className="d-flex justify-content-center align-items-center">
                <div className="info info-blue"> <span className="user-icons"><img src="https://i.imgur.com/1NZfd8E.png" width="30" /></span>
                  <div className="user-profile d-flex flex-row">
                    <div className="d-flex flex-column mr-4"> <span className="name">Samuel Marlon</span> <small className="designation">Team Member</small> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section seven ends here*/}

      {/*Footer Section starts here*/}
      <div className="footer-dec">
        <img src={footerdec} alt=""></img>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="about footer-item">
                <div className="logo">
                  <a href="#"><img src={logo} alt="logo" /></a>
                </div>
                <a href="#">info@company.com</a>
                <ul>
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                  </svg> </a></li>
                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="services footer-item">
                <h4>Services</h4>
                <ul>
                  <li><a href="#">What is Lorem Ipsum</a></li>
                  <li><a href="#">What is Lorem Ipsum</a></li>
                  <li><a href="#">Social Media </a></li>
                  <li><a href="#">Coin Optimization</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="community footer-item">
                <h4>Community</h4>
                <ul>
                  <li><a href="#">DWhat is Lorem Ipsum</a></li>
                  <li><a href="#">What is Lorem Ipsum</a></li>
                  <li><a href="#">Website Checkup</a></li>
                  <li><a href="#">Lorem Ipsum Speed Test</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="subscribe-newsletters footer-item">
                <h4>Subscribe Newsletters</h4>
                <p>Get our latest news and ideas to your inbox</p>
                <form action="#" method="get">
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                  <button type="submit" id="form-submit" className="main-button "><i className="fa fa-paper-plane-o"></i></button>
                </form>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="copyright">
                <p>Copyright © 2021 Pixel Whales. All Rights Reserved.
                  <br />
                  Designed by <a rel="nofollow" href="https://pelumiadebayo.com" title="Pelumi Adebayo">Pelumi Adebayo</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*Footer Section ends here*/}
    </div>
  );
}

export default App;
