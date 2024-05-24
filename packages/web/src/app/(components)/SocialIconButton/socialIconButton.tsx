"use client";
import React from "react";
import { Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";

type SocialIconButtonType = {
  imageSrc: StaticImageData;
  imageAlt: string;
};

export const SocialIconButton = (props: SocialIconButtonType) => {
  return (
    <Button
      onClick={() => {
        alert(`${props.imageAlt} clicked`);
      }}
      sx={{ m: 0, p: 0 }}
    >
      <Image
        src={props.imageSrc}
        alt={props.imageAlt}
        priority={false}
        width={50}
      />
    </Button>
  );
};
