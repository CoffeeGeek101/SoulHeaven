import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { BaggageClaim, GalleryVerticalEnd, Globe2, PackageOpen } from "lucide-react";

export default function Home() {

  const feature = [
    {
      title : "Curated Collections",
      icon : PackageOpen,
      des : "Sole Haven takes the guesswork out of shoe shopping by offering meticulously curated collections that cater to diverse tastes and occasions. From timeless classics to the latest trends, our marketplace presents a thoughtfully selected range of footwear"
    },
    {
      title : "Inclusive Variety",
      icon : GalleryVerticalEnd,
      des : "Embracing the belief that diversity is the essence of style, Sole Haven boasts an inclusive variety of brands, designers, and styles. Whether you're seeking international labels, emerging local artisans, or sustainable options"
    },
    {
      title : "Express Delivery Service",
      icon : BaggageClaim,
      des : " At Sole Haven, we understand the excitement of acquiring the perfect pair promptly. Our commitment to customer satisfaction extends to our swift and reliable Express Delivery Service."
    },
    {
      title : "Style Discovery Hub",
      icon : Globe2,
      des : "Beyond a transactional platform, Sole Haven serves as a style discovery hub, providing inspiration and guidance. Our blog, trend alerts, and expert advice sections keep you informed about the latest fashion insights"
    }
  ]

  return (
    <>
      <MaxWidthWrapper >
        <div className="flex flex-col items-center py-20 gap-6">
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl  text-center">
            Your marketplace for high-quality{" "}
            <span className="text-violet-600">Kicks</span>.
          </h1>
          <p className="font-normal text-center text-gray-500 text-sm">
            Welcome to the vibrant realm of Sole Haven, where every step is a
            statement and every stride tells a story. As you step into our
            virtual marketplace, the air is infused with the intoxicating scent
            of new possibilities, and the landscape is adorned with an eclectic
            array of footwear wonders.
          </p>
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <Button variant={"default"} size={"default"}>
              Browse Trending
            </Button>
            <Button variant={"secondary"} size={"default"}>
              Browse Trending &rarr;
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="bg-slate-100 border-t ">
        <MaxWidthWrapper className="py-20">
          <div className="flex flex-col lg:flex-row gap-10">
            {
              feature.map((item, index)=> (
                <div className="flex flex-col gap-3 items-center flex-1" key={index}>
                 <item.icon/>
                <div className="flex flex-col gap-2 items-center">
                  <p className="font-bold text-nowrap">{item.title}</p>
                  <p className="text-center text-sm text-gray-600">{item.des}</p>
                </div>
                </div>
              ))
            }
          </div>
        </MaxWidthWrapper>
      </div>  
    </>
  );
}
