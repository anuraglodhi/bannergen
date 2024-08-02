import { useEffect, useState } from "react";
import { BannerContent, BannerImage } from "./BannerImage";
import { BannerConfig } from "@/banner-templates";
import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";

export const EditBannerTemplateBs = ({
  isActive,
  content,
  banner,
  onEdit,
  setInactive,
}: {
  isActive: boolean;
  content: BannerContent;
  banner: BannerConfig;
  onEdit: (values: BannerContent) => void;
  setInactive: () => void;
}) => {
  const [values, setValues] = useState(content);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const debouncedSearchText = useDebounce(searchText, 500);

  function setValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    setValues(content);
  }, [content]);

  useEffect(() => {
    if (debouncedSearchText === "") {
      return;
    }

    async function search() {
      try {
        const response = await fetch(`/api/search?q=${debouncedSearchText}`);
        const data = await response.json();

        const urls = data.results.map((result: any) => result.urls.regular);
        setSearchResults(urls);
      } catch (error) {
        console.error(error);
      }
    }

    search();
  }, [debouncedSearchText]);

  function handleSubmit() {
    onEdit(values);
    setInactive();
  }

  function setImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setValues({ ...values, featureImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div
      className={`fixed h-full inset-0 flex items-center justify-center ${
        isActive ? "top-0" : "top-[100vh]"
      }
      transition-all
      `}
      style={{
        transitionDuration: "0.5s",
      }}
      onClick={setInactive}
    >
      {isActive && (
        <div
          className="border border-slate-900 bg-white p-4 rounded-lg top-[50vh] w-5/6 flex flex-col gap-2 z-20 shadow-lg max-w-lg max-h-[80vh] overflow-y-auto "
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h2 className="text-2xl">Edit Banner Content</h2>
          <div className="flex items-center justify-center">
            <div className="shadow-lg">
              <BannerImage banner={banner} content={values} />
            </div>
          </div>
          <label htmlFor="title" className="text-sm text-neutral-500">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={setValue}
            id="title"
            className="border border-neutral-300 p-2 rounded-md"
            onFocus={(e) => e.target.select()}
          />
          <label htmlFor="subtitle" className="text-sm text-neutral-500">
            Subtitle
          </label>
          <input
            type="text"
            name="subtitle"
            value={values.subtitle}
            onChange={setValue}
            id="subtitle"
            className="border border-neutral-300 p-2 rounded-md"
            onFocus={(e) => e.target.select()}
          />
          <label htmlFor="cta" className="text-sm text-neutral-500">
            Button
          </label>
          <input
            type="text"
            name="cta"
            value={values.cta}
            onChange={setValue}
            id="cta"
            className="border border-neutral-300 p-2 rounded-md"
            onFocus={(e) => e.target.select()}
          />
          <label htmlFor="featureImage" className="text-sm text-neutral-500">
            Feature Image
          </label>
          <div>
            <input
              type="file"
              name="featureImage"
              onChange={setImage}
              id="featureImage"
            />
            <div className="text-center text-neutral-500">or</div>
            <div>
              <input
                type="text"
                name="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                id="search"
                placeholder="Search for an image"
                className="border border-neutral-300 p-2 rounded-md w-full"
                onFocus={(e) => e.target.select()}
              />
            </div>
            <div className="flex gap-2 my-2 overflow-auto">
              {searchResults && searchResults.map((url) => (
                <Image
                  key={url}
                  src={url}
                  width={200}
                  height={200}
                  alt="search result"
                  className="w-20 rounded-full aspect-square object-cover"
                  onClick={() => {
                    setValues({ ...values, featureImage: url });
                    setSearchText("");
                  }}
                />
              ))}
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="p-4 bg-yellow-400 rounded-lg"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};
