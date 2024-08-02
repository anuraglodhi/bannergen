import { BannerConfig } from "@/banner-templates";
import Image from "next/image";
import { useEffect, useState } from "react";

export type BannerContent = {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  featureImage: string;
}

export const BannerImage = ({ banner, content }: { banner: BannerConfig, content: BannerContent }) => {
  
  return (
    <div className="relative w-80 aspect-video overflow-hidden">
      <Image
        src={banner.backgroundImage}
        alt=""
        width={900}
        height={1600}
        className="max-w-full absolute -z-10"
      />
      <h2 className="absolute" style={banner.title.style}>
        {content.title}
      </h2>
      <p className="absolute" style={banner.subtitle.style}>
        {content.subtitle}
      </p>
      <Image
        src={content.featureImage}
        alt=""
        width={500}
        height={500}
        className="absolute object-cover"
        style={banner.featureImage.style}
      />
      <button className="absolute" style={banner.cta.style}>{content.cta}</button>
    </div>
  );
};
