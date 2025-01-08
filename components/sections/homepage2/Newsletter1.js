
export default function Newsletter1() {
    return (
        <>
            <div className="section bg- d-block">
                <div className="container">
                    <div className="box-newsletter"style={{backgroundColor:'black',marginBottom:'70px'}}>
                        <h3 className="color-white mb-20 wow animate__animated animate__fadeIn">Get in Touch</h3>
                        <div className="row">
                            <div className="col-lg-5 mb-30">
                                <div className="form-newsletter wow animate__animated animate__fadeIn">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Your name *" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Your email *" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Weight" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Height" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="Message / Note" rows={5} defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
  <a
    href="/Booking"
    className="btn btn-brand-1-big"
    style={{ backgroundColor: 'orange', color: 'black', textDecoration: 'none', padding: '18px 20px', display: 'inline-block', textAlign: 'center',width:'100px',height:'50px' }}
  >
    Submit
  </a>
</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-7 mb-30">
                                <div className="d-flex box-newsletter-right">
                                    <div className="box-map-2 wow animate__animated animate__fadeIn">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.960389549842!2d-83.76408938441998!3d37.15364135542302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884352a00e70879f%3A0x1ad06ed33b7003c!2sIangar!5e0!3m2!1svi!2s!4v1678013229780!5m2!1svi!2s" height={242} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    </div>
                                    <ul className="list-info-footer">
                                        <li className="wow animate__animated animate__fadeIn">
                                            <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/address.svg" alt="transp" /></span>
                                            </div>
                                            <div className="cardInfo">
                                                <h6 className="font-sm-bold color-white">Address</h6>
                                                <p className="font-sm color-white">Headquarters in Frisco,Texas</p>
                                            </div>
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/email.svg" alt="transp" /></span>
                                            </div>
                                            <div className="cardInfo">
                                                <h6 className="font-sm-bold color-white">Email</h6>
                                                <p className="font-sm color-white">contact@binbears.com</p>
                                            </div>
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/phone.svg" alt="transp" /></span>
                                            </div>
                                            <div className="cardInfo">
                                                <h6 className="font-sm-bold color-white">Telephone</h6>
                                                <p className="font-sm color-white">214 901 4769
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
