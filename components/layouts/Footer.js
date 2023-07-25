import footer from "@/styles/Footer.module.css";
import CustomLink from "/components/custom/links/CustomLink";
import Image from "next/image";
const Footer = () => {


  return (
    <> 
        <div className="grid grid-cols-6 w-full">
            <div className="col-span-5 h-10 bg-red-900"></div>
            <div className="col-span-1 h-10" style={{backgroundColor: '#F0D59B'}}></div>
        </div>
        <footer className={`${footer.footer}`}>
            <div className={`flex justify-center my-16`}>
                <div style={{maxWidth: '70%'}}>
                    <div className="grid grid-cols-3 mid:gap-4">
                        <div className="md:col-span-1 col-start-1 col-end-4">
                            <Image src="/img/smLogo.png" alt="Logo" width={1000} height={1000}/><br/>
                            <p className={`${footer.des}`}>All in one dietary supplement product.</p>
                        </div>
                        <div className="md:col-span-1 col-start-1 col-end-4 mx-auto md:text-start">
                            <ul className={`${footer.ul}`}>
                                <li>
                                    <CustomLink  href='/'>HOME</CustomLink>
                                </li>
                                <li>
                                    <CustomLink  href='#product'>Product</CustomLink>
                                </li>
                                <li>
                                    <CustomLink  href='/prices'>Prices</CustomLink>
                                </li>
                                <li>
                                    <CustomLink  href='/ccontactUs'>Contact us</CustomLink>
                                </li>
                            </ul>
                        </div>
                        <div className="md:col-span-1 col-start-1 col-end-4">
                            <ul className={`${footer.ul2}`}>
                                <li>
                                    <h2 className="text-xl font-bold">Email Us!</h2>
                                </li>
                                <li>
                                    Email us at gentiko.office@gmail.com for more info.
                                </li>
                                <li>
                                    {/* 
                                    <div className={`${footer.inputGroup}`}>
                                        <input type="email" className={`${footer.input}`} id="Email" name="Email" placeholder="gentiko.office@gmail.com" autoComplete="off"/>
                                        <button className={`${footer.buttonSubmit}`} type="submit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex justify-center my-10 ${footer.social}`}>
                <div style={{maxWidth: '70%'}}>
                    <div className="grid grid-cols-6">
                        <div className="col-start-1 col-span-1">
                            <div className="flex justify-start">
                                <div className="bg-white rounded-full p-3 mr-5">
                                    <a target="_blank" href="https://www.facebook.com/GentikoPhilippines">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4E070A" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                        </svg>
                                    </a>
                                </div>
                                
                                <div className="bg-white rounded-full p-3 mr-5">
                                    <a target="_blank" href="https://www.tiktok.com/@gentiko.ph">
                                        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg"><path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/></svg>
                                    </a>
                                </div>
                                
                                <div className="bg-white rounded-full p-3 mr-5">
                                    <a target="_blank" href="https://www.instagram.com/gentiko.ph/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4E070A" className="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex justify-center my-16 ${footer.contactInfo}`}>
                <div className={`${footer.contactChild}`}>
                    <div className="grid grid-cols-3 mid:gap-4">
                        <div className="md:col-span-1 col-start-1 col-end-4 p-5" style={{backgroundColor: '#BD555B'}}>
                            <div className="flex justify-start">
                                <div className="my-auto mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p>Phone</p>
                                    <p>+63 (917) 162 80 08</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-1 col-start-1 col-end-4 p-5" style={{backgroundColor: '#C5686D'}}>
                            <div className="flex justify-center">
                                <div className="my-auto mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p>Location</p>
                                    <p>2nd Floor Megastar Building, Quezon Ave, QC Philippines </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-1 col-start-1 col-end-4 p-5" style={{backgroundColor: '#BD555B'}}>
                            <div className="flex justify-start">
                                <div className="my-auto mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p>Email</p>
                                    <p>gentiko.sales@gentiko.ph</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${footer.info}`}>
                <div className={`${footer.copyright}`}>GENTIKO © Designed by Cerebrum Design Studio | Copyrights 2023</div>
            </div>
        </footer>
    </>
  );
};
export default Footer;


