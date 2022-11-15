import React from 'react';
import * as L from 'leaflet';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { StyledMap } from './Footer.style';
import { divIcon } from 'leaflet';

const Map: React.FC = () => {
  const address = {
    lat: 45.746,
    lon: 4.842,
    address: 'Place Jean Macé - 69007 LYON',
  };

  const googleMapUrl = encodeURI(
    `https://www.google.com/maps/search/?api=1&query=${address.address}`,
  );

  const icon = divIcon({
    className: `marker-icon`,
    iconSize: L.point(32, 32),
    iconAnchor: L.point(20, 31),
    html: `<div>
            <img src="https://unpkg.com/leaflet@1.3.4/dist/images/marker-icon-2x.png" alt="marker" style="filter: hue-rotate(150deg)"></div>`,
    popupAnchor: L.point(0, 0),
  });

  return (
    <StyledMap>
      <MapContainer
        center={[45.751, 4.842]}
        zoom={12}
        zoomControl={false}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution={''}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          minZoom={2}
          maxZoom={18}
        />
        <Marker position={[address.lat, address.lon]} icon={icon}>
          <Popup>
            <strong style={{ fontSize: '0.9rem' }}>{address.address}</strong>

            <a href={googleMapUrl} target="_blank" rel="noreferrer">
              Se rendre dans mon quartier
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </StyledMap>
  );
};

export default Map;
