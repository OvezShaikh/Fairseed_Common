import React, { useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";
import images from "../../../constants/images";
import SecondaryButton from "../../../components/inputs/secondaryButton";
import Card from "../../../components/layout/Card";
import icons from "../../../constants/icons";
import Navigation from "../../../components/layout/Navigation/Index";
import axios from "axios";
import CountrySelect from "../../../components/inputs/countrySelect";
import OptionsButton from "../../../components/inputs/OptionsButton/Index";
import NoCampaign from "./NoCampaign";
import FilterField from "../../../components/inputs/FilterField/Index";
import "./CampaignsByCategory.css";



function Index() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [categoryCampaignList, setCategoryCampaignList] = useState([]);
  const [categoryDetail, setCategoryDetail] = useState(null);

  const [userList, setUserList] = useState([]);
  const [visibleCards, setVisibleCards] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);


  const [showOptions, setShowOptions] = useState(false);


  const [categoryDataFromChild, setCategoryDataFromChild] = useState('');
  const [locationDataFromChild, setLocationDataFromChild] = useState('');


  const filterToggle = () => {

    setShowOptions(!showOptions);
  };


  const receiveCategoryFromChild = (categoryData) => {



    console.log("DATA FROM CHILD Category ", categoryData);
    setCategoryDataFromChild(categoryData);


  };

  const receiveLocationFromChild = (locationData) => {



    console.log("DATA FROM CHILD Location ", locationData);
    setLocationDataFromChild(locationData);


  };


  const filteredUserList = Array.from(
    new Set(
      categoryCampaignList.filter((item) => {







        const isDataMatch = (((categoryDataFromChild.length === 0) && (locationDataFromChild.length === 0)) || ((categoryDataFromChild.includes(item.category.name)) && (locationDataFromChild.length === 0))) || (((locationDataFromChild.includes(item.location)) && (categoryDataFromChild.length === 0))) || ((categoryDataFromChild.includes(item.category.name)) && (locationDataFromChild.includes(item.location)));

        return isDataMatch;
      }).map((item) => item.id)
    )
  ).map((id) => categoryCampaignList.find((item) => item.id === id));



  const fetchUserList = async () => {
    try {
      const perPage = 100;
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/campaign/category?page=${page}&limit=${perPage}`
      );
      const res = response.data;
      console.log(res, "cards");
      console.log(res.rows, "------------------->");

      if (Array.isArray(res.rows)) {
        setTotalPages(res.pages_count);
        setUserList([...userList, ...res.rows]);
        setData(res.rows);

      }
      //  else {
      //   console.error("Invalid data structure. Expected an array:");
      // }
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, [page]);

  const fetchCategoryDetail = async () => {
    const perPage = 4;
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/campaign/category?category=${id}&page=${page}&limit=${perPage}`
    );
    if (Array.isArray(res.data.rows)) {
      setTotalPages(res.data.pages_count);
      setCategoryCampaignList([...categoryCampaignList, ...res.data.rows]);
      setCategoryDetail(res.data.category_data);
    } else {
      console.error("Invalid data structure. Expected an array:", res.data);
    }
    // console.log(res.data.rows);
    // setCategoryCampaignList(res.data.rows)   
  };
  useEffect(() => {
    fetchCategoryDetail();
  }, [page]);
  console.log(data, ",================dstatatatatata ")
  return (
    <div>
      <Navbar />
      <div className="flex flex-col ">
        <Navigation
          label={"ReligiousEducationCampaigns"}
          heading={categoryDetail?.name}
        />
        <div className="flex flex-col justify-center  pt-32 px-[20px] items-center ">
          {categoryCampaignList?.length > 0 ? (
            <div className="flex flex-col justify-center items-center " >
              <div className="flex w-[100%]  justify-start items-center text-center pl-3">
                <div className="flex  gap-3">




                  <SecondaryButton
                    sx={{
                      padding: "12px 18px",
                      borderRadius: "40px",
                    }}
                  >
                    <img src={images.TrendUp} alt="" />
                    <h1 className="pl-2 font-[satoshi] text-[18px] text-[#383A42] font-semibold">
                      Trending
                    </h1>
                  </SecondaryButton>
                  <SecondaryButton
                    sx={{
                      padding: "12px 18px",
                      borderRadius: "40px",
                    }}
                  >
                    <img src={images.WarningCircle} alt="" />
                    <h1 className="pl-2 font-[satoshi] text-[18px] text-[#383A42] font-semibold">
                      Newly Added
                    </h1>
                  </SecondaryButton>
                  <SecondaryButton
                    sx={{
                      padding: "12px 18px",
                      borderRadius: "40px",
                    }}
                  >
                    <img src={images.HandCoins2} alt="" />
                    <h1 className="pl-2 font-[satoshi] text-[18px] text-[#383A42] font-semibold">
                      Almost Funded
                    </h1>
                  </SecondaryButton>
                  <SecondaryButton
                    sx={{
                      padding: "12px 18px",
                      borderRadius: "40px",
                    }}
                  >
                    <img src={images.MegaphoneSimple} alt="" />
                    <h1 className="pl-2 font-[satoshi] text-[18px] text-[#383A42] font-semibold">
                      NGO Initiatives
                    </h1>
                  </SecondaryButton>
                  <SecondaryButton
                    sx={{
                      padding: "12px 18px",
                      borderRadius: "40px",
                    }}
                  >
                    <img src={images.Alarm} alt="" />
                    <h1 className="pl-2 font-[satoshi] text-[18px] text-[#383A42] font-semibold">
                      Expiring Soon
                    </h1>
                  </SecondaryButton>
                  <SecondaryButton
                    sx={{
                      padding: "12px 18px",
                      borderRadius: "40px",
                    }}
                  >
                    <img src={images.SedalCheck} className="w-6 h-6" alt="" />
                    <h1 className="pl-2 font-[satoshi] text-[18px] text-[#383A42] font-semibold">
                      Zakat Eligible
                    </h1>
                  </SecondaryButton>

                </div>


                <button
                  className="flex items-center ml-2 px-3 py-1.5 max-w-[115px] gap-x-[12px] max-desktop:px-[20px] max-desktop:py-[17px] max-tablet:py-[6px]"
                  style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}

                  onClick={filterToggle}

                >
                  <img src={images.Funnel} />
                  {/* <img src={images.Filter} /> */}
                  <p className="text-[18px]" style={{
                    background:
                      "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                    "font-family": 'Satoshi',
                    "font-weight": "700",
                  }
                  }>Filter</p>
                </button>
                
              </div>
              <div id="filter-location">
              {showOptions && (

<FilterField sendCategoryToParent={receiveCategoryFromChild} sendLocationToParent={receiveLocationFromChild} />


)}</div>
              <div className="gap-4 pt-[2rem] flex flex-wrap w-full justify-center">

                {filteredUserList?.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      username={item.user.username}
                      title={item.title}
                      og_id={item.id}
                      cardImage={item.campaign_image}
                      goalAmount={item.goal_amount}
                      fundRaised={item.fund_raised}
                      daysLeft={item.days_left}
                      userCount={item.donor_count}
                      location={item.location}
                    />
                  );
                })}

              </div>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page >= totalPages}
                className="pt-[68px]"
                style={{
                  width: "fit-content",
                  textAlign: "center",
                  color: "#FF9F0A",
                  fontSize: 24,
                  fontFamily: "Satoshi",
                  fontWeight: "500",
                  textDecoration: "underline",
                  wordWrap: "break-word",
                  background:
                    "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                  textDecoration: "underline",
                  position: "relative",
                  display: page >= totalPages ? "none" : "block",

                }}
              >
                <p className="gradient-button mb-0 align-middle">Load More</p>
              </button>

            </div>
          ) : (
            <div>
              {/* <h1 className="z-40"> No data Found</h1> */}
              {<NoCampaign />}
            </div>
          )}
        </div>
        {/* <NoCampaign /> */}
      </div>

      <Footer />
    </div>
  );
}

export default Index;