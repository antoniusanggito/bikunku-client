import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { ReactNode } from "react";

interface MapProps {
  children: ReactNode;
}

export default function Map(props: MapProps) {
  const { children } = props;

  return (
    <div className="w-full">
      <div className="h-[100%] w-full" id="map">
        <MapContainer
          center={[-6.366375, 106.829468]}
          zoom={16}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[-6.366375, 106.829468]}>
            <Popup>Hey ! you found me</Popup>
          </Marker>

        </MapContainer>
      </div>
      <div className="bg-blue-200">{children}</div>
    </div>
  );
}