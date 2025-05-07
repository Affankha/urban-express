import Layout from "../components/layout/Layout";
import About from "../components/sections/home1/About";
import Banner from "../components/sections/home1/Banner";
import WhyChooseUs from "../components/sections/home1/WhyChooseUs";
import Service from "../components/sections/home1/Service";
import Work from "../components/sections/home1/Work";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <About />
        <Service />
        <WhyChooseUs />
        <Work /> 
      </Layout>
    </>
  );
}
