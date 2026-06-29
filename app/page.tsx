import Landing from '@/components/sections/landing';
import Features from "@/components/sections/features";
import Reviews from '@/components/sections/reviews';
import Numbers from '@/components/sections/numbers';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>

      <Landing/>

      <Features/>

      <Reviews/>

      <Numbers/>

      <Footer/>
    </div>
  );
}
