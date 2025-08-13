import Drag from "@/components/Drag";
import Heading from "@/components/Heading";
import NextImage from "@/components/NextImage";
import { dynamicBlurDataUrl } from "@/util/dynamicBlurDataUrl";

const IMAGES = ['https://images.unsplash.com/photo-1725161834533-0043db272fea', 'https://images.unsplash.com/photo-1753865220999-af2ab1d93a7f', 'https://images.unsplash.com/photo-1754813920333-c8d169ee4a49']

export default function Home() {
  return (
    <div className="bg-cyan-100 w-full flex flex-col items-center justify-center">
      <Heading />
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {IMAGES.map(async (url, id) => (
          <NextImage
            key={id}
            alt="unsplash-img"
            src={url}
            className="w-[20vw]"
            blurDataURL={await dynamicBlurDataUrl(url)}
          />
        ))}
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <Drag />
      </div>
    </div>
  );
}
