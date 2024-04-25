import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
  return (
    <MapContainer
      center={[41.54840789567615, 0.9125148310713985]} // Coordenadas para Londres
      zoom={13}
      style={{ height: '50px', width: '50px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      />
      <Marker position={[41.54840789567615, 0.9125148310713985]}>
        <Popup>
          ¡Este es un marcador en Londres!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
