import React, { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Navigation from "../../components/layout/Navigation/Index";
import Footer from "../../components/layout/Footer";
import { useGetAll } from "../../Hooks";
import { useParams } from "react-router-dom";

function KnowingFairseed({ title, content, navbar, footer }) {
  const { slug } = useParams();
  const { data: contentData } = useGetAll({
    key: `/admin-dashboard/slug/${slug}`,
    select: (data) => data?.data?.data,
  });
  console.log(contentData?.show_navbar, "<====contentData.navbar");

  return (
    <div className="flex flex-col justify-center items-center">
      {contentData?.show_navbar && <Navbar />}
      <div className="w-full pb-4">
        <Navigation label={contentData?.title} heading={contentData?.title} />
      </div>

      <div
        className="pt-12 flex flex-col  text-start text-ellipsis   max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[370px] gap-[10px] px-10 max-desktop:px-2 desktop:text-[28px] text-[satoshi] max-tablet:px-2"
        dangerouslySetInnerHTML={{ __html: contentData?.content }}
      ></div>
      {contentData?.show_footer && <Footer />}
    </div>
  );
}

export default KnowingFairseed;
