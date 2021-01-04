import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 41.878113, lng: -87.629799 }}
    >
      <Marker position={{ lat: 41.91111, lng: -87.68888 }} />
      <Marker position={{ lat: 41.71111, lng: -87.68888 }} />
      <Marker position={{ lat: 41.81111, lng: -87.78888 }} />
      <Marker position={{ lat: 41.71111, lng: -87.58888 }} />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Gmap() {
  return (
    <div style={{ width: "35vw", height: "50vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCeWitmxNYBUyIoeZx5_7Jr2zl32YnfkuQ`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
