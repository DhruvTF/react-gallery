import React from "react";
import Card from "react-bootstrap/Card";
import "./ImagesCard.css";

export default function ImagesCard({ image }) {
  const url = `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
  return (
    <Card style={{}}>
      <Card.Img
        variant="top"
        src={url}
        style={{
          objectFit: "cover",
          width:"100%",
          height:"100%"
        }}
      />
    </Card>
  );
}
