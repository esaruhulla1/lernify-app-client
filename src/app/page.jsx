import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";
import Faq from "@/components/Home/Faq";
import HowItWorks from "@/components/Home/HowItWorks";
import Newsletter from "@/components/Home/Newsletter";
import TopInstructors from "@/components/Home/TopInstructors";
import UpcomingBatches from "@/components/Home/UpcomingBatches";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Categories></Categories>
      <UpcomingBatches></UpcomingBatches>
      <WhyChooseUs></WhyChooseUs>
      <TopInstructors></TopInstructors>
      <Faq></Faq>
      <Newsletter></Newsletter>
      {/* <HowItWorks></HowItWorks> */}
    </div>
  );
}
