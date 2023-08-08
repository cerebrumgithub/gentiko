import PublicLayout from "components/layouts/PublicLayout";
import Carousel from "components/carousel/Carousel";
import Testimonial from "components/testimonial/Testimonial";
import home from "@/styles/Home.module.css";
import Script from "next/script";

function Facebook() {
  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script strategy="lazyOnload">
        {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "YOUR_PAGE_ID");
            chatbox.setAttribute("attribution", "biz_inbox");
      
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v17.0'
              });
            };
      
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        `}
      </Script>
    </div>
  );
}

export function Facebook();

const wait = (ms) => new Promise ((resolve) => setTimeout(resolve,ms));
export default function Home() {
  return (
    <PublicLayout>
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-F13KLVV0CG" />
        <Script id="google-analytics">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-F13KLVV0CG');
          `}
        </Script>
      </div>
      <Carousel/>    
        <div className={`${home.dividerParent} flex justify-center`}>
            <div className={`${home.divider}`} style={{width: '20%', backgroundColor: '#B64248'}}></div>
            <div className={`${home.divider} bg-red-900`} style={{width: '20%'}}></div>
            <div className={`${home.divider}`} style={{width: '20%', backgroundColor: '#B64248'}}></div>
        </div>
        <div className={`${home.main}`}>
          <div className={`${home.bg}`}>
            <img src="/img/waterMark.png" alt="product"/>
          </div>
          <div className={`flex justify-center ${home.mainTitle}`}>
              <h3 className={`${home.spacing}`}>start life with the landscape of valuable flora extracts</h3>
          </div>
          {/* new update */}
          <div className={home.ingrSM}>
            <div className={`flex justify-center`}>
              <div style={{maxWidth: '70%'}}>
                  <div className="grid grid-cols-4">

                      <div className="md:col-start-3 md:col-end-5 m-auto col-start-1 col-end-6">
                        <img src="/img/sangkap/berry.png" alt="Gentiko Product" style={{ maxHeight: '400px'}}/>
                      </div>
                      <div className={`md:col-start-1 md:col-span-2 my-auto md:mx-8 col-start-1 col-end-6`}>
                        <h4 className={`${home.title}`}>Bilberry (Bilberry)</h4>
                        <p className={`text-red-900 ${home.description}`}>Repair and restore cells in the body for anti-aging Contains flavonoids which is a substance that has antioxidant activity and LDL cholesterol</p>
                      </div>
                      
                  </div>
              </div>
            </div>
            <div className={`flex justify-center my-3`}>
              <div style={{maxWidth: '70%'}}>
                  <div className="grid grid-cols-4">
                    
                      <div className="md:col-start-3 md:col-end-5 m-auto col-start-1 col-end-6">
                        <img src="/img/sangkap/mushroom.png" alt="product" style={{maxHeight: '400px'}}/>
                      </div>
                      <div className={`md:col-start-1 md:col-span-2 my-4 md:mx-8 col-start-1 col-end-6`}>
                        <h4 className={`${home.title}`}>Red Reishi Mushroom</h4>
                        <p className={`text-red-900 ${home.description}`}>Valuable artmor to prevent deterioration of various systems in the body The best quality in Hunan Province</p>
                      </div>
                      
                  </div>
              </div>
            </div>
            <div className={`flex justify-center my-3`}>
              <div style={{maxWidth: '70%'}}>
                  <div className="grid grid-cols-4">
                    
                      <div className="md:col-start-3 md:col-end-5 m-auto col-start-1 col-end-6">
                        <img src="/img/sangkap/wood.png" alt="product" style={{maxHeight: '400px'}}/>
                      </div>
                      <div className={`md:col-start-1 md:col-span-2 my-4 md:mx-8 col-start-1 col-end-6`}>
                        <h4 className={`${home.title}`}>French pine bark extract</h4>
                        <p className={`text-red-900 ${home.description}`}>Super precious extract from Maritime pine bark, France. Highly effective antioxidant properties 20 times higher than vitamin C and 50 times higher than vitamin E. Helps with anti-aging. and relieve symptoms caused by allergies</p>
                      </div>
                      
                  </div>
              </div>
            </div>
            <div className={`flex justify-center my-3`}>
              <div style={{maxWidth: '70%'}}>
                  <div className="grid grid-cols-4">
                    
                      <div className="md:col-start-3 md:col-end-5 m-auto col-start-1 col-end-6">
                        <img src="/img/sangkap/ginseng.png" alt="product" style={{maxHeight: '400px'}}/>
                      </div>
                      <div className={`md:col-start-1 md:col-span-2 my-4 md:mx-8 col-start-1 col-end-6`}>
                        <h4 className={`${home.title}`}>Korean ginseng</h4>
                        <p className={`text-red-900 ${home.description}`}>The legend of &ldquo;elixir&ldquo; helps reduce cholesterol, fat in the blood, control blood sugar levels. Stimulate the immune system in the body supreme king of herbs</p>
                      </div>
                      
                  </div>
              </div>
            </div>
          </div>
          {/* end new update */}
          <div className={home.ingrMD}>
            <div className="flex justify-center">
                <div className={`my-auto ${home.prodDescript}`}>
                    <h4 className={`${home.title}`}>Bilberry (Bilberry)</h4>
                    <p className={`text-red-900 ${home.description}`}>Repair and restore cells in the body for anti-aging Contains flavonoids which is a substance that has antioxidant activity and LDL cholesterol</p>
                </div>
                <div className={`my-auto ${home.prodImg}`}>
                  <img src="/img/sangkap/berry.png" alt="product" style={{maxHeight: '400px'}}/>
                </div>
            </div>
            <div className="flex justify-center">
                <div className={`my-auto ${home.prodImg}`}>
                  <img src="/img/sangkap/mushroom.png" alt="product" style={{maxHeight: '400px'}}/>
                </div>
                <div className={`h-auto my-auto mx-8 ${home.prodDescript}`}>
                    <h4 className={`${home.title}`}>Red Reishi Mushroom</h4>
                    <p className={`text-red-900 ${home.description}`}>Valuable artmor to prevent deterioration of various systems in the body The best quality in Hunan Province</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className={`h-auto my-auto ${home.prodDescript}`}>
                    <h4 className={`${home.title}`}>French pine bark extract</h4>
                    <p className={`text-red-900 ${home.description}`}>Super precious extract from Maritime pine bark, France. Highly effective antioxidant properties 20 times higher than vitamin C and 50 times higher than vitamin E. Helps with anti-aging. and relieve symptoms caused by allergies</p>
                </div>
                <div className={`my-auto ${home.prodImg}`}>
                  <img src="/img/sangkap/wood.png" alt="product" style={{maxHeight: '400px'}}/>
                </div>
            </div>
            <div className="flex justify-center">
                <div className={`my-auto ${home.prodImg}`}>
                  <img src="/img/sangkap/ginseng.png" alt="product" style={{maxHeight: '400px'}}/>
                </div>
                <div className={`h-auto my-auto ml-8 ${home.prodDescript}`}>
                    <h4 className={`${home.title}`}>Korean ginseng</h4>
                    <p className={`text-red-900 ${home.description}`}>The legend of &ldquo;elixir&ldquo; helps reduce cholesterol, fat in the blood, control blood sugar levels. Stimulate the immune system in the body supreme king of herbs</p>
                </div>
            </div>
          </div>
          <div id="prod" className={`flex justify-center my-16`}>
              <button className={`${home.orderBtn}`}>ORDER NOW</button>
          </div>
          <div className={`flex justify-center ${home.secondTitle}`}>
              <h3 className={`${home.spacing} ${home.bigTitle}`}>Take care before the disease starts</h3>
          </div>
          <div className={`flex justify-center`}>
              <p className={`text-red-900 ${home.description} ${home.spacing}`}>Innovative immune therapy supplements with the wisdom of Chinese herbs Stimulate 20 types of immunity</p>
          </div>
          <div className={`flex justify-center`}>
              <img src="/img/product/gentikoProd.png" alt="Gentiko Product" style={{maxWidth: '70%'}}/>
          </div>
          <div className={`flex justify-center mt-8`}>
              <p style={{maxWidth: '70%', textAlign: 'justify'}} className={`text-red-900 ${home.description}`}>The immune system in the body gradually deteriorates as the age changes. Symptoms, fatigue, insomnia, allergies, diabetes are some of the warning signs of a weakened immune system. Immune strengthening preparations Therefore, it is necessary to help prevent And reduce the risk of illness that can spread to form a serious disease</p>
          </div><br></br>
          <div className={`flex justify-center`}>
            <p style={{maxWidth: '70%', textAlign: 'justify'}} className={`text-red-900 ${home.description}`}>Start taking care at the cellular level. Strengthen the shield before the immune system deteriorates. Let the body quickly recover back to health. Be prepared to deal with an illness that strikes you at any moment.</p>
          </div>
          <div className={`flex justify-center my-16`}>
            <div style={{maxWidth: '70%'}}>
                <div className="grid grid-cols-4">
                    <div className="md:col-start-1 md:col-span-2 my-auto md:mx-8 col-start-1 col-end-6">
                      <img src="/img/gallery/1.png" alt="Gentiko Product" style={{ minHeight: '18vh'}}/>
                    </div>
                    <div className="md:col-start-3 md:col-end-5 mx-auto col-start-1 col-end-6">
                      <h4 className={`${home.title}`}>proved by the past Selected by current</h4>
                      <p className={`text-red-900 ${home.description}`}>Through the selection of plants from the ancient Chinese herbal knowledge book for a long time with rigorous research methodology until there are only 20 types of substances that have the best effect on restoring the immune system</p>
                    </div>
                </div>
            </div>
          </div>
          <div className={`flex justify-center my-16`}>
            <div style={{maxWidth: '70%'}}>
                <div className="grid grid-cols-4">
                    <div className="md:col-start-1 md:col-span-2 my-auto md:mx-8 col-start-1 col-end-6">
                      <img src="/img/gallery/2.png" alt="Gentiko Product" style={{ minHeight: '18vh'}}/>
                    </div>
                    <div className="md:col-start-3 md:col-end-5 mx-auto col-start-1 col-end-6">
                      <h4 className={`${home.title}`}>proven by experiment Certification with real use</h4>
                      <p className={`text-red-900 ${home.description}`}>More than 20 valuable substances were theoretically transferred to real treatment trials on volunteers with immune problems. for many reasons across the ages around the world Until confirming that it can help improve the health of the volunteers.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className={`flex justify-center my-16`}>
            <div style={{maxWidth: '70%'}}>
                <div className="grid grid-cols-4">
                    <div className="md:col-start-1 md:col-span-2 my-auto md:mx-8 col-start-1 col-end-6">
                      <img src="/img/gallery/3.png" alt="Gentiko Product" style={{ minHeight: '18vh'}}/>
                    </div>
                    <div className="md:col-start-3 md:col-end-5 mx-auto col-start-1 col-end-6">
                      <h4 className={`${home.title}`}>Proven by leading researchers Guaranteed by world-class standards</h4>
                      <p className={`text-red-900 ${home.description}`}>To solve this critical issue of health, the NUTRI ACTIVE CORPORATION lab collaborates with experienced health researchers. for effective research and development Until being certified to various standards There are accepted research results published in many journals.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className={`${home.testimonialMargin}`}>
            <div className={`${home.testimonial}`}>
              <div className={`${home.testimonialChild}`}>
                <Testimonial/>
              </div>
            </div>
          </div>
          <div className={`flex justify-center ${home.grayTitle}`}>
              <h3 className={`${home.spacing}`}>Guaranteed results with international research leaders</h3>
          </div>
          <div className={`flex justify-center mt-8 ${home.grayTitle}`}>
              <div className={`${home.spacing}`}>
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
