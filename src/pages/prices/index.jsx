import PublicLayout from "components/layouts/PublicLayout";
import Testimonial from "components/testimonial/Testimonial";
import home from "@/styles/Home.module.css";
import price from "@/styles/Price.module.css";
import { useState } from "react";
export default function Prices() {
  let [count, setCount] = useState(1);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if(count >= 2)
    {
      count = count - 1;
      setCount(count);
    }
  }
  return (
    <PublicLayout>
        <div style={{position: "relative"}}>
            <div className={`${price.mobilePriceImg}`}>
              <img className={`block w-full`}
                  src="/img/carousel/mobile.png"
                  alt="Wild Landscape" />
                <div className={`${price.orderFormMobile}`}>
                  <input className={`${price.inputMobile}`} name="fullname" placeholder="Fullname" type="text" />
                  <input className={`${price.inputMobile}`} name="contact" placeholder="Contact Number" type="text" />
                  <input className={`${price.inputMobile}`} name="address" placeholder="Address" type="text" />
                  <textarea className={`${price.inputMobile} ${price.textarea}`} name="msg" placeholder="Message" type="text" rows={5}/>
                  <div className="flex justify-between w-full px-5 pt-5">
                       <div>
                          <button className={`${price.minus}`} onClick={decrementCount}>-</button>
                          <button className={`${price.num}`}>{count}</button>
                          <button className={`${price.plus}`} onClick={incrementCount}>+</button>
                       </div>
                      <button className={`${price.orderBtn2}`}>ORDER NOW</button>
                  </div>                      
              </div>
            </div>
            <div className={`${price.webPriceImg}`}>
              <img className={`block w-full`}
                    src="/img/carousel/caro2.png"
                    alt="Wild Landscape" />
              <div className={`${price.orderForm}`}>
                  <div>
                    <input className={`${home.input}`} name="fullname" placeholder="Fullname" type="text" />
                    <input className={`${home.input}`} name="contact" placeholder="Contact Number" type="text" />
                    <input className={`${home.input}`} name="address" placeholder="Address" type="text" />
                    <textarea className={`${home.input} ${price.textarea}`} name="msg" placeholder="Message" type="text" rows={5}/>
                    
                    <div className="flex justify-end w-full float-right">
                      <div className="w-50">
                        <button className={`${price.minus}`} onClick={decrementCount}>-</button>
                        <button className={`${price.num}`}>{count}</button>
                        <button className={`${price.plus}`} onClick={incrementCount}>+</button>
                      </div>                    
                      <button className={`${price.orderBtn2} ml-10 mr-4`}>ORDER NOW</button>
                    </div>
                  </div>
              </div>
            </div>
            
        </div>
        <div className={`${price.dividerParent} flex justify-center`}>
            <div className={`${price.divider}`} style={{width: '20%', backgroundColor: '#B64248'}}></div>
            <div className={`${price.divider} bg-red-900`} style={{width: '20%'}}></div>
            <div className={`${price.divider}`} style={{width: '20%', backgroundColor: '#B64248'}}></div>
        </div>
        <div className={`${home.main}`}>
          <div className={`${home.bg}`}>
            <img src="/img/waterMark.png" alt="product"/>
          </div>          
          <div className={`text-center my-12 ${price.prices}`}>
              <p className={home.des}>1 box price PHP3680.00</p>
          </div>
          <div className={`flex justify-center`}>
              <img src="/img/product/gentikoProd.png" alt="Gentiko Product" style={{maxWidth: '70%'}}/>
          </div>

          <div className={`flex justify-center my-16`}>
              <button className={`${home.orderBtn}`}>ORDER NOW</button>
          </div>
          
          <div className={`${home.testimonialMargin}`}>
            <div className={`${home.testimonial}`}>
              <div className={`${home.testimonialChild}`}>
                <Testimonial/>
              </div>
            </div>
          </div>
          <div className={`flex justify-center ${home.grayTitle}`}>
              <h3 style={{maxWidth: '70%', textAlign: 'center'}}>Guaranteed results with international research leaders</h3>
          </div>
          <div className={`flex justify-center mt-8 ${home.grayTitle}`}>
              <div style={{maxWidth: '70%', textAlign: 'center'}}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="mx-8 md:col-span-1 col-span-2">
                    <img className="m-auto" src="/img/testimonial/tree.png" alt="Gentiko Product" style={{ minHeight: '15vh'}}/>
                    <p>Performance certified by research centers Anti-Aging Medicine Naturimax Biotech Corporation (Finland)</p>
                  </div>
                  <div className="mx-8 md:col-span-1 col-span-2">
                    <img className="m-auto" src="/img/testimonial/bio.png" alt="Gentiko Product" style={{ minHeight: '15vh'}}/>
                    <p>Use CALLUS STEMCELL extract, the best of anti-aging with plant stem cells. The world&lsquo;s latest technology invented and imported from Germany</p>
                  </div>
                </div>
              </div>
          </div><br/><br/>
        </div>
    </PublicLayout>
  )
}
