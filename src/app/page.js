import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import HomeOptions from "@/components/HomeOptions";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <HomeOptions/>
      <Footer/>
    </>
  )
}