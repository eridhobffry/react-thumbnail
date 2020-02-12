import React from "react";
import { Ul, Li } from "../../styled/styled_main";

const ListImage = props => {
  const { imageList, setIndexShowImage } = props;

  return (
    <Ul>
      {imageList.map((image, index) => {
        return (
          <Li key={index}>
            <img
              src={image}
              width={100}
              height={100}
              onClick={() => setIndexShowImage(index)}
            />
          </Li>
        );
      })}
    </Ul>
  );
};

export default ListImage;
