
import {
  MapContainer,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MembersByCountries = () => {
  return (
    <div className='p-7 '>
      <MapContainer center={[48.8566, 2.3522]} zoom={2}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </MapContainer>
    </div>
  )
}
export default MembersByCountries
