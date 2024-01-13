import React from "react";
import images from "../../constants/images";
import { TiSocialTwitter } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";
import { RiPinterestLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";
import icons from "../../constants/icons";

function Footer() {
  return (
    <>
      <div
        className="flex flex-col  relative mt-[20rem]"
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 300,
          paddingBottom: 60,
          paddingLeft: 90,
          paddingRight: 90,
          background: "#22262F",
          gap: 100,
          fontFamily:'satoshi'
        }}
      >
        <div className="flex mt-[140px] justify-center absolute  -top-[50%] left-[50%] -translate-x-[50%]">
          <div className="footer  text-center">
            <p className="footer_text w-[80%] ml-28 text-[56px]" style={{fontWeight:700}}>
              Ready to make an Impact? Join thousands of others today
            </p>
            <div className="flex justify-center my-10 gap-4">
              <button
                style={{
                  paddingLeft: 28,
                  paddingRight: 28,
                  paddingTop: 16,
                  paddingBottom: 16,
                  background: "rgba(194.44, 51.85, 51.85, 0.90)",
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  display: "inline-flex",
                }}
              >
                <div style={{ width: 32, position: "relative" }}>
                  <img src={images.coins2} alt="" />
                </div>
                <div
                  style={{
                    color: "rgba(255, 255, 255, 0.90)",
                    fontSize: 20,
                    fontFamily: "Satoshi ",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Support a Cause
                </div>
              </button>
              <button
                className="px-3"
                style={{
                 
                  background:
                    "linear-gradient(93deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.50) 100%)",
                  borderRadius: 8,
                  border: "1px rgba(255, 255, 255, 0.10) solid",
                  backdropFilter: "blur(24px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  display: "inline-flex",
                }}
              >
                <div  style={{ width: 32, height: 32, position: "relative" }}>
                  <img src={images.RocketLaunch2} alt=""/>
                </div>
                <div
                  style={{
                    color: "#383A42",
                    fontSize: 20,
                    fontFamily: "Satoshi",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Launch a Campaign
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 justify-between">
          <div className="col-span-4">
            <img className="  w-[25%] pb-3" src={images.FooterLogo} />
            <p
              style={{
                width: "100%",
                color: "white",
                fontSize: 13,
                fontFamily: "Satoshi",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              Be it for a personal need, social cause or a creative idea -
              <br></br> you can count on us for the project that you want to{" "}
              <br></br>raise funds for.
            </p>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <a
                  className="text-white font-bold"
                  style={{
                    fontSize: 16,
                    fontFamily: "Satoshi",
                    fontWeight: "700",
                  }}
                >
                  Quik Link
                </a>
                <ul className="mt-3">
                  <li>
                    <a
                      className="text-white/80"
                      style={{
                        fontFamily: "Satoshi",
                        fontWeight: "400",
                        textTransform: "capitalize",
                      }}
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white/80"
                      style={{
                        fontFamily: "Satoshi",
                        fontWeight: "400",
                        textTransform: "capitalize",
                      }}
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white/80"
                      style={{
                        fontFamily: "Satoshi",
                        fontWeight: "400",
                        textTransform: "capitalize",
                      }}
                      href="#"
                    >
                      Blog Post
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white/80"
                      style={{
                        fontFamily: "Satoshi",
                        fontWeight: "400",
                        textTransform: "capitalize",
                      }}
                      href="#"
                    >
                      Photo Gallery
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-4">
                <a
                  className="text-white font-bold"
                  style={{
                    fontSize: 16,
                    fontFamily: "Satoshi",
                    fontWeight: "700",
                  }}
                >
                  Get In Touch
                </a>
                <ul className="mt-3">
                  <li>
                    <a
                      className="text-white/80"
                      style={{
                        fontFamily: "Satoshi",
                        fontWeight: "400",
                        textTransform: "capitalize",
                      }}
                      href="#"
                    >
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white/80"
                      style={{
                        fontFamily: "Satoshi",
                        fontWeight: "400",
                        textTransform: "capitalize",
                      }}
                      href="#"
                    >
                      Our services
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-4">
                <a
                  className="text-white font-bold"
                  style={{
                    fontSize: 16,
                    fontFamily: "Satoshi",
                    fontWeight: "700",
                  }}
                >
                  Address
                </a>
                <p
                  className="text-white/80 mt-3 w-[70%]"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                >
                  2464 Royal Ln. Mesa, New Jersey 45463
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 flex justify-end">
            <div className="w-fit ">
              <a
                className="text-white  font-bold"
                style={{
                  fontSize: 16,
                  fontFamily: "Satoshi",
                  fontWeight: "700",
                }}
              >
                Newsletter
              </a>
              <div className="flex mt-3 flex-row rounded-lg w-[40%] h-10">
                <input
                  className="text-[15px] pl-4"
                  aria-label="Demo input"
                  multiline
                  placeholder="Enter your email"
                />
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 1,
                    paddingBottom: 12,
                    background: "#219D80",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                    display: "inline-flex",
                  }}
                >
                  <button
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontFamily: "Satoshi",
                      fontWeight: "700",
                      textTransform: "capitalize",
                      wordWrap: "break-word",
                    }}
                    className="pt-2"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <p
                className="text-white/80 mt-2 w-full"
                style={{
                  fontFamily: "Satoshi",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
              >
                Your email is safe with us,we don’t spam.
              </p>

              <p
            
                className="text-white mt-3 font-bold"
                style={{
                  fontSize: 16,
                  fontFamily: "Satoshi",
                  fontWeight: "700",
                }}
              >
                Follow Us
              </p>
              <div className="flex mt-2 flex-row">
                <a
                  className="text-white/80 text-3xl"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  href="#"
                >
                  <img src={icons.FooterIconTw} />
                </a>
                <a
                  className="text-white/80 ml-3 text-2xl"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  href="#"
                >
                  <img src={icons.FooterIconIn} />
                </a>
                <a
                  className="text-white/80 ml-3  text-3xl"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  href="#"
                >
                  <img src={icons.FooterIconPi} />
                </a>
                <a
                  className="text-white/80 ml-3 text-3xl"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  href="#"
                >
                  <img src={icons.FooterIconYo} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="text-white/50 pb-2"></hr>
          <p className="text-white/40 text-1xl">Copyright © Fairseed 2023</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
