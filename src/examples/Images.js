import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import img from "../images/connectBcg.jpeg";
import Img from "gatsby-image";

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} alt="Basic image" className="basic" />
      </article>
      <article>
        <h3>fixed image/blur</h3>
      </article>
      <article>
        <h3>fluid image/svg</h3>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Images;
