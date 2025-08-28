import Drag from "@/components/Drag";
import Heading from "@/components/Heading";
import NextImage from "@/components/NextImage";
import { IMAGES } from "@/constant/images";
import { getImageWithBlurURL } from "./action";

export default async function Home() {

  const imgArr = await getImageWithBlurURL(IMAGES);

  return (
    <div className="bg-cyan-100 w-full flex flex-col items-center justify-center">
      <Heading />
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {imgArr?.map(async (ele, id) => (
          <NextImage
            key={id}
            alt="unsplash-img"
            src={ele?.imgUrl}
            className="w-[20vw]"
            blurDataURL={ele?.blurUrl}
          />
        ))}
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <Drag />
      </div>
    </div>
  );
}
