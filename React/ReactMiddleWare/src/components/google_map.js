import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { compose, withProps } from "recompose";

const GoogleMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: props.lat, lng: props.lon }}
  ></GoogleMap>
));

export default GoogleMapComponent;
