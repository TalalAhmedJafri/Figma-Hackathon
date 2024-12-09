
import About from "@/components/About";
import Blog from "@/components/Blog";
import Chef from "@/components/Chef";
import Clients from "@/components/Clients";
import FoodCategory from "@/components/FoodCategory";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <FoodCategory/>
      <WhyChooseUs/>
      <Clients/>
      <Menu/>
      <Chef/>
      <Testimonials/>
      <Process/>
      <Blog/>
      <Footer/>
    </div>
  );
}
