import React, { useState } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css"

const MembersByCountries = () => {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  return (
    <div className='p-7 border border-black rounded-lg'>
      <MapContainer
        center={mapPosition}
        zoom={6}
        // scrollWheelZoom={true}
        // className={"h-[100%]"}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}
export default MembersByCountries