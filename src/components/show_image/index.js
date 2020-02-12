import React from "react";

const ShowImage = props => {
  const { index, imageList } = props;

  return (
    <>
      <img width={500} height={500} src={imageList[index]} />
      <br />
    </>
  );
};

export default ShowImage;
