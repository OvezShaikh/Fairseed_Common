import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";

const MembersByCountries = () => {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  return (
    <div className="rounded-lg shadow-md ">
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "90%",
          height: "90%",
        }}
        series={{
          regionStyle: {
            initial: {
              fill: '#ff5566',
              stroke: "#676767",
              strokeWidth: 2.5,
              fillOpacity: 1
            }
          }
        }}
        backgroundColor="#a3a3a3"
      />
    </div>
  );
};

export default MembersByCountries;
