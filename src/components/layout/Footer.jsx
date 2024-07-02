import React from "react";
import images from "../../constants/images";
import icons from "../../constants/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import UserLogin from "../../pages/login/Login_page/Index";

function Footer() {
  const navigate = useNavigate();
  const navigateToOng = () => {
    navigate("/Home/OnGoingCampaigns");
  };
  return (
    <>
      <div
        className="flex flex-col relative mt-[20rem] desktop:pt-[300px] desktop:px-[90px] max-desktop:pt-[240px] max-desktop:px-[48px] max-tablet:px-[17px] gap-[100px] max-tablet:gap-[20px] max-tablet:pt-[220px] desktop:pb-[60px] max-desktop:pb-[60px] max-tablet:pb-[12px]"
        style={{
          width: "100%",
          height: "100%",
          background: "#22262F",
          fontFamily: "satoshi",
        }}
      >
        <div className="flex mt-[140px] max-desktop:mt-[305px] desktop:max-w-[79%] desktop:w-full justify-center absolute -top-[50%] left-[50%] -translate-x-[50%] max-desktop:w-[81%] max-tablet:mt-[300px]">
          <div className="rounded-[20px] footer text-center desktop:p-[90px] max-desktop:px-[48px] max-desktop:py-[85px] max-tablet:px-[23px] max-tablet:py-[33px]">
            <p
              className="footer_text w-[100%] mx-auto text-[56px] max-desktop:text-[36px] max-tablet:text-[22px]"
              style={{ fontWeight: 700 }}
            >
              Ready to make an Impact? Join thousands of others today
            </p>
            <div className="flex justify-center my-10 mb-0 desktop:mt-[64px] gap-4 max-tablet:flex-col">
              <button
                className="px-[28px] max-desktop:px-[15px]"
                onClick={navigateToOng}
                style={{
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
                  className="text-[20px] max-tablet:text-[16px]"
                  style={{
                    color: "rgba(255, 255, 255, 0.90)",

                    fontFamily: "Satoshi ",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Support a Cause
                </div>
              </button>
              {localStorage.getItem("token") ? (
                <Link
                  to="/Home/Create-Campaign"
                  className="px-3 gap-[10px] max-tablet:gap-[0px]"
                  style={{
                    background:
                      "linear-gradient(93deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.50) 100%)",
                    borderRadius: 8,
                    border: "1px rgba(255, 255, 255, 0.10) solid",
                    backdropFilter: "blur(24px)",
                    justifyContent: "center",
                    alignItems: "center",

                    display: "inline-flex",
                  }}
                >
                  <div style={{ width: 32, height: 32, position: "relative" }}>
                    <img src={images.RocketLaunch2} alt="" />
                  </div>
                  <div
                    className="text-[20px] max-tablet:text-[16px] max-tablet:p-[16px] max-tablet:pl-[10px]"
                    style={{
                      color: "#383A42",

                      fontFamily: "Satoshi",
                      fontWeight: "700",
                      wordWrap: "break-word",
                    }}
                  >
                    Launch a Campaign
                  </div>
                </Link>
              ) : (
                <>
                  <div className=" max-desktop:hidden max-tablet:hidden">
                    <div
                      className=" gap-[10px] py-3  w-full"
                      style={{
                        background:
                          "linear-gradient(93deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.50) 100%)",
                        borderRadius: 8,
                        border: "1px rgba(255, 255, 255, 0.10) solid",
                        backdropFilter: "blur(24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px 20px",

                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 32, height: 32, position: "relative" }}
                      >
                        <img src={images.RocketLaunch2} alt="" />
                      </div>
                      <div
                        className="text-[20px] "
                        style={{
                          color: "#383A42",

                          fontFamily: "Satoshi",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        <UserLogin
                          text={"Launch Campaign"}
                          fontWeight={700}
                          size={"20px"}
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="desktop:hidden">
                    <Link
                      to="/Home/Login"
                      className="px-3 gap-[10px] max-tablet:gap-[0px] w-full h-full"
                      style={{
                        background:
                          "linear-gradient(93deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.50) 100%)",
                        borderRadius: 8,
                        border: "1px rgba(255, 255, 255, 0.10) solid",
                        backdropFilter: "blur(24px)",
                        justifyContent: "center",
                        alignItems: "center",

                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 32, height: 32, position: "relative" }}
                      >
                        <img src={images.RocketLaunch2} alt="" />
                      </div>
                      <div
                        className="text-[20px] max-tablet:text-[16px] max-tablet:p-[16px] max-tablet:pl-[10px] "
                        style={{
                          color: "#383A42",

                          fontFamily: "Satoshi",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        Launch a Campaign
                      </div>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between max-desktop:flex-wrap max-tablet:justify-start desktop:max-w-[1628px] desktop:m-auto">
          <div className="w-[30%] max-desktop:w-[100%] max-desktop:mb-[48px] max-tablet:mb-[20px] max-tablet:w-[100%]">
            <img
              className="desktop:w-[118px] pb-[16px]"
              src={images.FooterLogo}
              alt=""
            />
            <p
              className="desktop:w-[79%] desktop:text-[16px] max-tablet:text-[14px] max-desktop:w-[59%] max-tablet:w-[100%]"
              style={{
                color: "white",

                fontFamily: "Satoshi",
                fontWeight: "500",
                textTransform: "capitalize",
                wordWrap: "break-word",
              }}
            >
              FairSeed Technology Foundation is India's first Education focussed
              & technology based online crowdfunding platform dedicated to
              revolutionizing the way education is funded and accessible. Our
              mission is to bridge the financial gap in education by connecting
              passionate learners, educators, and educational institutions with
              a global community of generous donors and supporters.
            </p>
          </div>
          <div className="w-[15%] max-desktop:w-[35%] max-tablet:w-[50%]">
            <Link
              className="text-white font-bold"
              style={{
                fontSize: "1rem",
                fontFamily: "Satoshi",
                fontWeight: "700",
              }}
            >
              Contact Us
            </Link>
            <ul className="mt-3 pr-2">
              <li>
                <Link
                  className="text-white/80"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  to="#"
                >
                  Have questions or need assistance? Our dedicated support team
                  is here to help. Reach out to us at:
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "mailto:info@fairseed.org";
                    e.preventDefault();
                  }}
                  className="text-white/80"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                    background: "",
                    //   "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                    // "-webkit-background-clip": "text",
                    // "-webkit-text-fill-color": "transparent",
                    // "font-family": "Satoshi",
                  }}
                >
                  info@fairseed.org
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  to="tel:+918421061921"
                >
                  +918421061921
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[11%] max-desktop:w-[27%] max-desktop:mb-[48px] max-tablet:w-[36%] max-tablet:mb-[12px]">
            <Link
              className="text-white font-bold"
              style={{
                fontSize: "1rem",
                fontFamily: "Satoshi",
                fontWeight: "700",
              }}
            >
              Explore FairSeed
            </Link>
            <ul className="mt-3">
              <li>
                <Link
                  className="text-white/80"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  to="/Home/Terms-of-use"
                >
                  Terms of use
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  to="/Home/Privacy-Policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  to="/Home/Cookie-Policy"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  to="/Home/pricing-refund"
                >
                  Pricing & Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  to="/Home/FAQ's"
                >
                  FAQ's
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  to="/Home/Disclaimer"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-[17%] max-desktop:w-[38%] max-tablet:mt-1 max-tablet:w-[90%] max-tablet:mb-[20px]">
            <Link
              className="text-white font-bold"
              style={{
                fontSize: "1rem",
                fontFamily: "Satoshi",
                fontWeight: "700",
              }}
            >
              FairSeed Community
            </Link>
            <ul className="mt-3">
              <li>
                <Link
                  className="text-white/80"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  to="/Home/Founders"
                >
                  Founders
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  to="/Home/Our-Team"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  to="/Home/Our-Aspirations"
                >
                  Our Aspirations
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-end w-[24.5%] max-desktop:w-[54%] max-tablet:w-full">
            <div className="w-full ">
              <Link
                className="text-white  font-bold"
                style={{
                  fontSize: "1rem",
                  fontFamily: "Satoshi",
                  fontWeight: "700",
                }}
              >
                Newsletter
              </Link>
              <div className="flex mt-3 flex-row rounded-lg w-full h-[48px]">
                <input
                  className="text-[15px] pl-4 w-full"
                  aria-label="Demo input"
                  multiline={"true"}
                  placeholder="Enter your email"
                />
                <div
                  className="max-w-[122px] w-full"
                  style={{
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
                      fontSize: "1rem",
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
                className="text-white/80 mt-2 w-full text-[14px]"
                style={{
                  fontFamily: "Satoshi",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
              >
                Your email is safe with us, we don’t spam.
              </p>

              <p
                className="text-white mt-8 font-bold"
                style={{
                  fontSize: "1rem",
                  fontFamily: "Satoshi",
                  fontWeight: "700",
                }}
              >
                Follow Us
              </p>
              <div className="flex mt-2 flex-row">
                <Link
                  className="text-white/80 text-3xl"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  to="https://twitter.com/FairSeedTech"
                >
                  <img src={icons.FooterIconTw} />
                </Link>
                <Link
                  className="text-white/80 ml-3 text-2xl"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  to="https://www.instagram.com/fairseedtechfoundation/"
                >
                  <img src={icons.FooterIconIn} />
                </Link>
                <Link to="https://www.facebook.com/profile.php?id=61550906075110">
                  <div className="w-[33px] h-[32px] flex justify-center items-center bg-[#D9F5EE] rounded-full ml-3  ">
                    <FaFacebookF size={22} />
                  </div>
                </Link>
                <Link
                  className="text-white/80 ml-3 text-3xl"
                  style={{
                    fontFamily: "Satoshi",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                  to="#"
                >
                  <img src={icons.FooterIconYo} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <hr className="text-white/50 pb-2"></hr>
          <p className="text-white/40 text-1xl max-tablet:text-center">
            Copyright © Fairseed 2023
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
