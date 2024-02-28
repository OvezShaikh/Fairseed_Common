import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";

const MembersByCountries = () => {
  return (
    <>
      {/* <div className="rounded-lg shadow-lg"> */}

    
    <div>
      <p className={"mb-3 text-lg font-semibold"}>Members by Countries: </p>

        <VectorMap
          map={worldMill}
          containerStyle={{
            width: "90%",
            height: "70%",
          }}
          series={{
            regionStyle: {
              initial: {
                fill: "#ff5566",
                stroke: "#676767",
                strokeWidth: 2.5,
                fillOpacity: 1,
              },
            },
          }}
          backgroundColor="#a3a3a3"
          />
          </div>
          {/* </div> */}
    </>
  );
};

export default MembersByCountries;
