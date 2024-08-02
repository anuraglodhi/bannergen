"use client";

import { BannerConfig, bannerTemplates } from "@/banner-templates";
import Image from "next/image";
import { useState } from "react";
import { BannerContent, BannerImage } from "./BannerImage";
import { EditBannerTemplateBs } from "./EditBannerTemplateBs";

const defaultContent: BannerContent = {
  id: 0,
  title: "Banner Title",
  subtitle: "Banner Subtitle",
  cta: "Click Here",
  featureImage: "https://picsum.photos/1000/1000",
};

const defaultContents: BannerContent[] = [];
bannerTemplates.forEach(({ id }) =>
  defaultContents.push({ ...defaultContent, id, title: `Banner ${id}` })
);

export const Banners = () => {
  const [banners, setBanners] = useState<BannerConfig[]>(bannerTemplates);
  const [contents, setContents] = useState<BannerContent[]>(defaultContents);
  const [sheetIndex, setSheetIndex] = useState(0);
  const [isSheetActive, setIsSheetActive] = useState(false);

  function setInactive() {
    console.log("setInactive");
    setIsSheetActive(false);
  }

  function onEdit(values: BannerContent) {
    setContents((prevContents) =>
      prevContents.map((content) =>
        content.id === values.id ? values : content
      )
    );
  }

  function onClick(index: number) {
    setSheetIndex(index);
    setIsSheetActive(true);
  }

  return (
    <section className="flex flex-wrap justify-center gap-4">
      {banners.map((banner, index) => (
        <div className="relative" key={banner.id}>
          <div className="shadow-lg">
            <BannerImage banner={banner} content={contents[index]} />
          </div>
          <button
            className="absolute right-4 top-2 bg-gray-300 opacity-55 px-2"
            onClick={() => onClick(index)}
          >
            Edit
          </button>
        </div>
      ))}
      <EditBannerTemplateBs
        isActive={isSheetActive}
        content={contents[sheetIndex]}
        banner={banners[sheetIndex]}
        onEdit={onEdit}
        setInactive={setInactive}
      />
    </section>
  );
};
