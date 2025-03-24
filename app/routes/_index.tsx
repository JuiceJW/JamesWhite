import type { MetaFunction } from "@remix-run/node";
import Navigation from "~/components/navigation";
import AucklandSkyline from "../../public/images/auckland-skyline.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: "James White" },
    { name: "description", content: "Full Stack Software Engineer" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans m-0 p-0">
      <Navigation />
      <section className="h-[100vh]">
        <img
          className="h-[100vh] w-full object-cover grayscale brightness-50"
          src={AucklandSkyline}
          alt=""
        />
        <div className="absolute text-white left-0 top-0 h-[100vh] gap-4 w-full flex flex-col justify-center items-center">
          <h3 className="text-4xl lg:text-6xl font-semibold">
            James Dylan White
          </h3>
          <h4 className="text-2xl lg:text-4xl">Full Stack Software Engineer</h4>
        </div>
      </section>

      <section id="about-me" className="container mx-auto my-16 ">
        <div className="flex flex-col gap-16 p-4">
          <h1 className="text-6xl font-normal">Welcome.</h1>

          <div className="flex flex-col gap-4">
            <p className="text-xl">
              I am James White, a full stack software engineer based in
              Auckland, New Zealand.
            </p>

            <p className="text-xl">
              Bringing four years of comprehensive experience in full-stack
              development to the table, I have honed my skills across a diverse
              range of programming languages and frameworks. My expertise spans
              JavaScript, TypeScript, and Kotlin, enabling me to craft and
              deploy scalable software solutions efficiently. My journey in the
              tech industry has been marked by a relentless pursuit of knowledge
              and a deep commitment to developing applications that not only
              meet but exceed user expectations.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="container mx-auto my-16 ">
        <div className="flex flex-col gap-16 p-4">
          <h1 className="text-6xl font-normal">Experience.</h1>

          <p className="text-xl">
            Here are a few of the companies I have worked with.
          </p>

          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl">
                Youdooh Limited{" "}
                <span className="text-2xl text-gray-700">
                  October 2024 - Present
                </span>
              </h2>
              <p className="text-xl">
                I work with a team of three developers to enhance and refine an industry-leading software platform that connects over 3,000 digital advertising screens in New Zealand and 4,000 in Australia, making Digital Out-of-Home (DOOH) advertising more accessible for small and medium-sized businesses.
                <br />
                One of my key contributions has been designing, building, and implementing a preview system that allows users to see how their ad will appear on a billboard before purchasing the space. This feature improves user confidence and streamlines the ad booking process. In addition to adding new features, I also focus on refactoring existing systems to improve performance, maintainability, and scalability.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl">
                Inugo Systems Limited{" "}
                <span className="text-2xl text-gray-700">
                  January 2022 - October 2024
                </span>
              </h2>
              <p className="text-xl">
                I optimized database queries, reducing load times by 90%, making the system significantly faster and more efficient. I worked as part of a team of five full-stack developers to modernize a legacy parking permit system, replacing thousands of paper permits with a digital solution.
                <br />
                This role involved working with international teams across the UK, Australia, the US, and New Zealand. I also mentored junior developers, guiding them through caching strategies, GraphQL, Next.js, and Node.js to help them get up to speed. Additionally, I stepped into an interim team lead position, conducting regular reviews and mentoring a small team. This experience helped me develop my leadership skills as I prepare for a senior role.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl">
                Trail Limited{" "}
                <span className="text-2xl text-gray-700">
                  January 2021 - December 2021
                </span>
              </h2>
              <p className="text-xl">
                I worked closely with the Product Manager to implement software improvements that supported over 400 financial advisers, ensuring the platform was both user-friendly and effective.
                <br />
                A key part of my role was leading the development of features to maintain compliance with new 2021 government regulations. I was also responsible for the weekly build and deployment process, working with C#, SQL Migrations, and Azure app services to ensure smooth updates and system reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="portfolio" className="container mx-auto my-16">
        <div className="flex flex-col gap-16 p-4">
          <h1 className="text-6xl font-normal">Portfolio.</h1>

          <p className="text-xl">
            Here are a few of the projects I have worked on.
          </p>
        </div>
      </section>

      <section id="technologies" className="container mx-auto my-16">
        <div className="flex flex-col gap-16 p-4">
          <h1 className="text-6xl font-normal">Technologies.</h1>

          <p className="text-xl">
            Here are a few of the technologies I have worked with.
          </p>
        </div>
      </section> */}

      <section id="contact" className="container mx-auto my-16">
        <div className="flex flex-col gap-16 p-4">
          <h1 className="text-6xl font-normal">Contact.</h1>

          <p className="text-xl">
            Get in touch with me through linkedin on the bottom right.
          </p>
        </div>
      </section>

      <footer>
        <div className="container mx-auto">
          <div className="flex justify-end items-center p-4">
            <div className="flex gap-4">
              <span className="justify-self-center self-center">
                © James White 2024
              </span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/jamesdylanwhite/"
                className="hover:text-[#0a66c2] transition-colors duration-300"
              >
                <FaLinkedin size={48} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JuiceJW"
                className="hover:text-[#4078c0] transition-colors duration-300"
              >
                <FaGithub size={48} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/*
      <Portfolio/>
      <Technologies/>
      <Footer /> */}
    </div>
  );
}
