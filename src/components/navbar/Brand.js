import React from 'react'
import styled from "styled-components";

import pic2 from "../../pictures/donut.png";

const Brand = () => {
    return (
        <img src={pic2} className="donut.png" alt="pic2" height={50}/>
    )
}

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;