import {
  component$,
  useStylesScoped$,
  // useStore,
  // useClientEffect$,deprecated
  // useVisibleTask$,
} from "@builder.io/qwik";
// import { isServer, isBrowser } from "@builder.io/qwik/build";
import styles from "./mainBanner.css?inline";
import { BannerImgStepper } from "~/integrations/react/mui";

export default component$(() => {
  useStylesScoped$(styles);
  // const store = useStore({ count: 0 });

  // useVisibleTask$(() => {
  //   // Only runs in the client
  //   const timer = setInterval(() => {
  //     maxSteps > store.count ? store.count++ : (store.count = 0);
  //   }, changeTime);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // });

  //, left: `-${store.count}00vw`
  return (
    <mainbanner>
      <BannerImgStepper client:visible/>
    </mainbanner>
  );
});
