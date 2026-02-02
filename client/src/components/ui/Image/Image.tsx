import { styled } from "@linaria/react";
import React from "react";

const ImageFrame = styled.img`
  display: flex;
  flex-direction: column; //element from up => down
  width: 100px;
  height: 100px;
  border:solid;
  border-radius:20px;
`;
interface ImageFrameProps {
  src: string;
  alt?: string;
}

const Image = ({ src, alt }: ImageFrameProps) => {
  return <ImageFrame src={src} alt={alt ?? "exercise"} />;
};

export default Image;
