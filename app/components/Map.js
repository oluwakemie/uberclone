import React from "react";
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2FpbGViIiwiYSI6ImNsZXZnNTF0NzA2YW8zcm80bXFibW16eDcifQ.CWet-QKeMJXv-X2mbO547Q";

const Map = (props) => {

  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
        
    }); 

    if(props.pickupCoordinates){
    addToMap(map, props.pickupCoordinates) 
    }
    if(props.dropoffCoordinates){
      addToMap(map, props.dropoffCoordinates)
    }
    if(props.pickupCordinates && props.dropoffCoordinates){
      map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates
      ], {
        padding: 60
      })
    }

  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
  }

  return <Wrapper id="map">Map</Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2
`;
