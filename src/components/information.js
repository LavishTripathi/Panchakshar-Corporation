import "../css/information.css"

export default function Information(){
    return(
        <div className="additional-info">

              <div className="text-wrapper-23">Additional Information</div>
    
          
                <div className="info-column">
                    <div className="column">
                                          <p className="payment-terms info">
                      <span className="text-wrapper-20">Payment Terms</span><br />
                      <span className="text-wrapper-21">Accepted Methods:</span>
                      <span className="text-wrapper-17">
                        Telegraphic transfer, Bank Guarantee, Letter of credit,
                        NEFT/RTGS/IMPS, UPI, Cheque.<br />
                      </span>
                      <span className="text-wrapper-21">Advance Payment:</span>
                      <span className="text-wrapper-17">
                        Required for bulk orders.
                      </span>
                    </p>

                    <p className="sample-terms-sample info">
                      <span className="text-wrapper-20">Sample Terms<br /></span>
                      <span className="text-wrapper-21">Sample Availability: </span>
                      <span className="text-wrapper-17">Yes.<br /></span>
                      <span className="text-wrapper-21">Sample Policy:</span>
                      <span className="text-wrapper-17">
                        Contact us for detailed information regarding our sample
                        policy.
                      </span>
                    </p>

                                          <p className="delivery-terms info" >
                    <span className="text-wrapper-20">Delivery Terms:<br /></span>
                    <span className="text-wrapper-21">Packaging:</span>
                    <span className="text-wrapper-19">
                      Products are securely packaged in boxes &amp; bags. <br
                    /></span>
                    <span className="text-wrapper-21">Delivery Area:</span>
                    <span className="text-wrapper-19">
                      Pan-India and world wide coverage. <br
                    /></span>
                    <span className="text-wrapper-21">Lead Time:</span>
                    <span className="text-wrapper-19">
                      Varies based on order size and customization requirements.
                    </span>
                  </p>
        

                    </div>
                    <div className="column">
                                        <p className="return-and-exchange info" >
                    <span className="text-wrapper-20">Return and Exchange Policy:<br
                    /></span>
                    <span className="text-wrapper-17">
                      We prioritize customer satisfaction. For information on
                      returns and exchanges, please contact our customer service
                      team to discuss specific cases.
                    </span>
                  </p>
                    <p className="bulk-order-discounts info">
                      <span className="text-wrapper-20"
                        >Bulk Order Discounts:<br
                      /></span>
                      <span className="text-wrapper-17">
                        We offer competitive discounts on bulk orders. Please
                        reach out with your order details to receive a
                        customized quote. Please refer our export policy for
                        detailed information.
                      </span>
                    </p>

                      
                    </div>

                </div>




            <div className="button">
                <a href="https://drive.google.com/file/d/1yJ_IVuvfSUPi_E5MeIZ8w75EdHb2_xtI/view?usp=sharing">
                  <div className="div-wrapper">
                  <div className="text-wrapper-14">Read more</div>
                </div></a>
                <a href="https://docs.google.com/document/d/1iw0eeBgbF_KSXmiGU9H48iTOgoQNHpso/edit?usp=sharing&ouid=111726376474671795411&rtpof=true&sd=true"><div className="overlap-5">
                  <div className="text-wrapper-15">Privacy Policy</div>
                </div></a>
              </div>
        </div>        
    );
}