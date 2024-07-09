import type { MetaFunction } from "@remix-run/node";
import Navigation from "~/components/navigation";
import AucklandSkyline from "../../public/images/auckland-skyline.webp";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans m-0 p-0">
      {/* <Navigation /> */}
      <section className="h-[100vh]">
        <img
          className="h-[100vh] w-full object-cover grayscale brightness-50"
          src={AucklandSkyline}
          alt=""
        />
        <div className="absolute text-white left-0 top-0 h-[100vh] gap-4 w-full flex flex-col justify-center items-center">
          <h3 className="text-3xl font-semibold">James Dylan White</h3>
          <h4 className="text-2xl">Full Stack Software Engineer</h4>
        </div>
      </section>
      {/*
      <AboutMe/>
      <Portfolio/>
      <Technologies/>
      <Footer /> */}
    </div>
  );
}
