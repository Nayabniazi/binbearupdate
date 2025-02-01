import Layout from "@/components/layout/Layout"

import Link from "next/link"
export default function ServiceDetail() {

    return (
        <>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="box-pageheader-1 box-pageheader-services text-center"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'orange',color:'black'}}>Our Services</span>
                       
                            <h2 className="color- mt-15 mb-10 wow animate__animated animate__fadeIn"style={{color:'black'}}> Items We Take</h2>
                          
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">At BinBear, we can handle just about ANYTHING and EVERYTHING—except hazardous waste Here are examples of the types of junk we haul away:<br className="d-none d-lg-block" /> </p>
                           
                            <div className="d-flex flex-wrap align-items-center justify-content-center">
  <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
  <div className="wow animate__animated animate__fadeIn card-container">
  <img
    src="/assets/imgs/page/service-detail/img4.png"
    alt="transp"
    className="responsive-img"
  />
</div>
  </div>
  <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
  <div className="wow animate__animated animate__fadeIn card-container">
  <img
    src="/assets/imgs/page/service-detail/img4.png"
    alt="transp"
    className="responsive-img"
  />
</div>
  </div>
</div>



                        </div>
                    </div>


              





                </section>
  









                <div className="mt-20 box-background-black">
    <div className="bg-under" />
    <div 
        className="card-grid" 
        style={{ marginLeft: "60px", marginRight: "60px" }}
    >
        {[
            { title: "1. Furniture Removal" },
            { title: "2. TV Disposal & Recycling" },
            { title: "3. Yard Waste Removal" },
            { title: "4. Foreclosure Cleanouts" },
            { title: "5. Tire Disposal" },
            { title: "6. Appliance Removal" },
            { title: "7. Hot Tub Disposal" },
            { title: "8. E-Waste Disposal" },
            { title: "9. Trash Removal" },
            { title: "10. Mattress Disposal" },
            { title: "11. Refrigerator Disposal & Recycling" },
            { title: "12. Construction Waste Removal" },
            { title: "13. Garbage Removal" },
            { title: "14. Shed Removal" },
        ].map((service, index) => (
            <div
                key={index}
                className="card-item wow animate__animated animate__fadeIn"
            >
                <div
                    className="card-offer hover-up"
                    style={{
                        backgroundColor: "orange",
                        borderBottom: "4px solid black",
                    }}
                >
                    <div className="card-info">
                        <h5
                            className="color- mb-15"
                            style={{ color: "black" }}
                        >
                            {service.title}
                        </h5>
                        <p className="font-sm color-grey-900 mb-50"></p>
                        <div className="box-button-offer mb-10">
                            <a
                                className="btn btn-link font-sm color-"
                                style={{ color: "black" }}
                            >
                               <button class="gradient-button" style={{ background: "linear-gradient(45deg, black, orange)",width:"150px",height:"40px",color:'white',}}>view details</button>
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>




<style>
  {`
  .card-container {
      width: 100%; /* Ensures the card takes full width */
      max-width: 500px; /* Adjust as needed */
      margin: auto; /* Centers the card */
      padding: 10px;
  }

  .responsive-img {
      width: 100%; /* Makes the image adjust within the card */
      max-width: 100%; /* Ensures it does not exceed the card width */
      height: auto; /* Maintains aspect ratio */
      display: block; /* Removes extra spacing */
     /* Optional: Adds smooth rounded corners */
  }

  /* Adjust image width on different screen sizes */
  @media (max-width: 768px) {
      .card-container {
         margin-left:40px;
      max-width: 83%; /* Allows the card to shrink on smaller screens */
      }
  }
  `}
</style>





<style jsx>{`
   
    .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 cards per row */
    gap: 20px; /* Space between cards */
}

.card-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-offer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px; /* Fixed height for all cards */
    border-radius: 8px; /* Optional: Rounded corners */
    overflow: hidden;
}

.card-info {
    flex-grow: 1;
    padding: 10px;
}

/* Responsiveness */
@media (max-width: 1024px) {
    .card-grid {
        grid-template-columns: repeat(2, 1fr); /* 2 cards per row on smaller screens */
    }
}
@media (min-width: 1920px){
.card-grid {
padding-left: 200px;
padding-right:205px;
}

}
@media (max-width: 768px) {
    .card-grid {
   
        grid-template-columns: repeat(1, 1fr); /* 1 card per row on mobile screens */
    }

    .card-offer {
   
        height: auto; /* Adjust height for smaller screens */
    }
     @media (max-width: 568px) {
    .card-grid {
  
        grid-template-columns: repeat(1, 1fr); /* 1 card per row on mobile screens */
    }

    .card-offer {
    
   
        height: auto; /* Adjust height for smaller screens */
    }   

}

    
    `}

</style>





            <section className="section mt-50">
            <div className=""><strong className="font-md-bold color-grey-900 mb-25 d-block wow animate__animated animate__fadeIn"><h3 style={{marginLeft:'80px'}}></h3></strong>
           
                    <div className="container">
                    <h5 style={{marginTop:'20px',marginBottom:'20px',marginLeft:'30px'}}  >Enjoy a Clutter-Free Life with BinBear Junk Removal!**</h5>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn"style={{marginLeft:"10px"}}>    Is clutter piling up in your home? Want to reclaim your space? Searching for a reliable junk removal service you can trust? You're not alone! Many homeowners struggle with these same challenges, and BinBear is here to help.
                            </p>
                            
                            <p className="wow animate__animated animate__fadeIn">
    <img 
        src="/assets/imgs/page/service-detail/img3.png" 
        alt="transp" 
        style={{
            margin: '20px auto', // Center horizontally for all screens
            display: 'block',    // Ensures centering works
            maxWidth: '100%',    // Image won't exceed the container width
            height: 'auto'       // Maintains aspect ratio
        }}
    />
</p>

                            
                            <p className="wow animate__animated animate__fadeIn"></p>
                            <h3  >We Haul It All</h3>
                            <h5 style={{marginTop:'20px',marginBottom:'20px'}} >Furniture Removal, Disposal, Recycling, or Donation</h5>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">Examples: Couches, sofas, beds, chairs, tables, desks, and more.
  - Need to get rid of old furniture that’s too bulky to handle on your own? BinBear can take care of it, ensuring items are disposed of responsibly, whether through recycling or donation to local charities.
 </p>
 <h5 style={{marginTop:'20px',marginBottom:'20px'}}  >TV Disposal & Recycling</h5>
 <p  className="font-md color-grey-900 wow animate__animated animate__fadeIn">Old televisions and monitors piling up? We’ll handle it all, from CRTs to flat screens, recycling or disposing of them responsibly.</p>
                           
                           <h5  style={{marginTop:'20px',marginBottom:'20px'}} >Yard Waste Removal</h5>
                        
                           <p className="font-md color-grey-900 wow animate__animated animate__fadeIn" > 
                           - Got yard debris like branches, clippings, or stumps? We take care of waste from landscaping projects, including old fencing, firewood, and lumber.

                           </p>
                           <h5  style={{marginTop:'20px',marginBottom:'20px'}} >
                           Clean Out Services** (Foreclosure, Estate, Home, Garage Cleanouts)
                           </h5>
                           
                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                        Moving out, managing an estate, or dealing with property cleanouts? We handle it all efficiently and courteously.

                        </p>
                         <h5  style={{marginTop:'20px',marginBottom:'20px'}} >Appliance Removal</h5>

<p className="font-md color-grey-900 wow animate__animated animate__fadeIn" >
Examples: Air conditioners, dishwashers, fridges, washing machines, stoves, water heaters, and more. Don’t worry about the heavy lifting—BinBear has it covered.
 
</p>
<h5 style={{marginTop:'20px',marginBottom:'20px'}}  >Hot Tub Disposal</h5>
<p className="font-md color-grey-900 wow animate__animated animate__fadeIn" >
Dismantling and removing hot tubs is hard work, but we’ll break it down and haul it away for you.
 
</p>
<h5 style={{marginTop:'20px',marginBottom:'20px'}}  >E-Waste Disposal, Removal, or Recycling</h5>
<p className="font-md color-grey-900 wow animate__animated animate__fadeIn" >
Computers, printers, shredders, and more. We ensure electronic waste is handled in an eco-friendly manner.
</p>
<h5 style={{marginTop:'20px',marginBottom:'20px'}}  >
Mattress Disposal, Removal, Donation, or Recycling  
</h5>
<p className="font-md color-grey-900 wow animate__animated animate__fadeIn" >
Old mattresses gathering dust? Let BinBear remove and responsibly recycle or donate them
</p>
<h5 style={{marginTop:'20px',marginBottom:'20px'}}  >
Trash Removal
</h5>
<p  className="font-md color-grey-900 wow animate__animated animate__fadeIn">
Whether you need a one-time trash removal or ongoing cleanup, BinBear provides fast, friendly service with a focus on recycling wherever possible.
</p>
                           
    

<div className="col-lg-6 mb-30">











                                    



</div>

</div>


<section className="section mt-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-60"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/parachute.png" alt="transp" />
                                <h3 className="color-black mb-15 wow animate__animated animate__fadeIn"style={{marginBottom:'30px'}}>What BinBear Can’t Take</h3>
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginBottom:'20px'}}>While we handle almost anything, we do not collect hazardous waste, including:
                                </p>
                                
                                <div className="row">
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Paints and solvents</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Pesticides and fertilizers</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"> </p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn"> Chemical cleaners
                                            </h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Lead-acid and lithium-ion batteries
                                            </h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>

                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Flammable liquids</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Ammunition and explosives</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"> </p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn"> Medical waste
                                            </h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Materials containing asbestos or mercury
                                            </h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>




                                    </div>

                                   


                               <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}></p>
                               
                               </div>
                            <div className="col-lg-6 mb-60"><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/page/service-detail/img4.png" alt="transp" /></Link></div>
                        </div>
                        



                    
                        </div>
                        </section>























</div>

</section>                     






                
                   











               
               

              
                <div className="line-border" />
                <section className="section pb-5 pt-50 mb-80">
                    <div className="container">
                        <div className="text-center"><img className="mb-15 wow animate__animated animate__fadeIn" src="/img/bear.png.png"style={{height:'60px'}} alt="transp" />
                            <h2 className="color-mb-15 wow animate__animated animate__fadeIn"style={{color:'black'}}>How Our Service Works</h2>
                            <p className="font-md color-grey-700 mb-30 wow animate__animated animate__fadeIn"style={{marginTop:'30px'}}>Let me know if there’s anything specific you’d like to add or change! <br className="d-none d-lg-block" /><br className="d-none d-lg-block" /></p>
                        </div>
                        <div className="box-slider-homepage2 box-slider-homepage-4 box-slider-service-4">
                            <div className="container">
                                <div className="box-swiper">



                                <div className="mt-20 box-background-black" >
                        <div className="bg-under"/>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
                                <div className="card-offer hover-up">
                                   
                                    
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Book Your Appointment</h5>
                                        <p className="font-sm color-grey-900 mb-30">Get a price, use our proprietary junk cost calculator to determine your services Charge.
                                        </p>
                                        <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-"style={{color:'black'}}>View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>



                            





                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    
                                    
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}> Pickup your Schedule</h5>
                                        <p className="font-sm color-grey-900 mb-30">Choose a date and time that best suite your availablility and reliability for junk pickup.</p>
                                        <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-"style={{color:'black'}}>View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
                                <div className="card-offer hover-up">
       
                                    <div className="card-info" >
                                        <h5 className="color- mb-15"style={{color:'black'}}>Leave the Heavy Lifting to Us</h5>
                                        <p className="font-sm color-grey-900 mb-30">
   Just point out what you want gone, and we’ll handle the rest, from lifting to loading.
 </p>
                                        <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                   
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Eco-Friendly Disposal</h5>
                                        <p className="font-sm color-grey-900 mb-30">BinBear is committed to green practices. We sort through items to recycle or donate wherever possible, ensuring minimal landfill impact.
                                        </p>
                                        <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                  
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Enjoy Your Clutter-Free Space</h5>
                                        <p className="font-sm color-grey-900 mb-30">With BinBear, reclaim your space without the hassle. You’ll feel good knowing your items were disposed of responsibly</p>
                                        <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Full-Service Junk Removal</h5>
                                        <p className="font-sm color-grey-900 mb-30">Our team will arrive on time in our big Black trucks. We’ll confirm your estimate and take care of your junk on the spot.
                                          </p>
                                        <div className="box-button-offer mb-30" ><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                           
                           
                        </div>
                    </div>






                                 










                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section pt-70 pb-70 bg-"style={{backgroundColor:'black',marginBottom:'50px'}}>
           
           <div className="container">
               <div className="box-get-quote">
                   <div className="get-quote-left">
                       <p className="font-3xl color-white mb-10 wow animate__animated animate__fadeIn">When you think Junk, think BinBear!
                           </p>
                       <h3 className="color-brand- wow animate__animated animate__fadeIn"style={{color:'orange'}}> With a few quick clicks, your waste is our commands!
                       </h3>
                   </div>
                   <div className="get-quote-right"><Link className="btn btn-get-quote wow animate__animated animate__fadeIn" href="/register" style={{ backgroundColor: '#FFA500', textAlign: 'center',
display: 'block', // Ensures the element behaves like a block for text alignment
padding: '10px', }}>
                       <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                           </path>
                       </svg>Contact us</Link></div>
               </div>
           </div>
       </section>



            </Layout>
        </>
    )
}