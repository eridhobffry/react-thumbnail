import React, { useState, Fragment } from "react";

const AppShowImage = () => {
  const image1 = require("../assets/images/image1.jpg");
  const image2 = require("../assets/images/image2.jpg");
  const image3 = require("../assets/images/image3.jpg");
  const image4 = require("../assets/images/image4.jpg");

  const [indexShowImage, setIndexShowImage] = useState(0);
  const [imageList, setImageList] = useState([image1, image2, image3, image4]);

  const onClickImage = () => {};

  return (
    <Fragment>
      <img width={500} height={500} src={imageList[indexShowImage]} /> <br />
      <ul>
        {imageList.map((image, index) => {
          return (
            <li>
              <img
                src={image}
                width={100}
                height={100}
                onClick={() => setIndexShowImage(index)}
              />
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default AppShowImage;
