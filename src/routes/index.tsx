import { component$ } from "@builder.io/qwik";
import { qwikify$ } from "@builder.io/qwik-react";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import Testimonials from "../components/testimonials/testimonials";
import Features from "../components/features/features";
import MainBanner from "../components/main-banner/mainBanner";
import DevicesIcon from "@mui/icons-material/Devices";
import LaptopIcon from "@mui/icons-material/Laptop";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WebIcon from "@mui/icons-material/Web";
export const MUIDevicesIcon = qwikify$(DevicesIcon);
export const MUILaptopIcon = qwikify$(LaptopIcon);
export const MUIPhoneAndroidIcon = qwikify$(PhoneAndroidIcon);
export const MUIPhoneIphoneIcon = qwikify$(PhoneIphoneIcon);
export const MUIWebIcon = qwikify$(WebIcon);

export default component$(() => {
  return (
    <div>
      <h1>
        Bienvenido a NexaSoft <MUIDevicesIcon />
        <MUILaptopIcon />
        <MUIPhoneAndroidIcon />
        <MUIPhoneIphoneIcon />
        <MUIWebIcon />
        <span class="lightning">⚡️</span>
      </h1>
      <Link class="mindblow" href="/flower/">
        Blow my mind 🤯
      </Link>
      <MainBanner />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Bienvenido a NexaSoft",
  meta: [
    {
      name: "description",
      content: "NexaSoft, el futuro en soluciones de software.",
    },
  ],
};
