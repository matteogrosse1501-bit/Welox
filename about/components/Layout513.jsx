"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { Fragment, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const data = [
  {
    heading: "01 Custom design",
    description: "Every UI element crafted with intention — precision-built for your brand.",
    image: { src: "/images/work-ecommerce.jpg", alt: "Custom web design" },
    imageMobile: { src: "/images/work-ecommerce.jpg", alt: "Custom web design" },
  },
  {
    heading: "02 Strategy first",
    description: "Research and positioning before a single pixel is placed.",
    image: { src: "/images/about-studio.jpg", alt: "Strategy session" },
    imageMobile: { src: "/images/about-studio.jpg", alt: "Strategy session" },
  },
  {
    heading: "03 Collaboration",
    description: "Close partnership at every stage, from brief to live.",
    image: { src: "/images/work-brand.jpg", alt: "Creative collaboration" },
    imageMobile: { src: "/images/work-brand.jpg", alt: "Creative collaboration" },
  },
  {
    heading: "04 Results",
    description: "Measurable outcomes — conversion, growth, and brand equity.",
    image: { src: "/images/work-fintech.jpg", alt: "Analytics and results" },
    imageMobile: { src: "/images/work-fintech.jpg", alt: "Analytics and results" },
  },
];

const n = data.length;

const useRelume = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const opacity0 = useTransform(scrollYProgress, [0, 0, 0.18, 0.25], [0, 1, 1, 0]);
  const y0      = useTransform(scrollYProgress, [0, 0, 0.15, 0.25], [100, 0, 0, -100]);
  const opacity1 = useTransform(scrollYProgress, [0.18, 0.25, 0.43, 0.5], [0, 1, 1, 0]);
  const y1       = useTransform(scrollYProgress, [0.15, 0.25, 0.4,  0.5], [100, 0, 0, -100]);
  const opacity2 = useTransform(scrollYProgress, [0.43, 0.5, 0.68, 0.75], [0, 1, 1, 0]);
  const y2       = useTransform(scrollYProgress, [0.4,  0.5, 0.65, 0.75], [100, 0, 0, -100]);
  const opacity3 = useTransform(scrollYProgress, [0.68, 0.75, 0.93, 1.0], [0, 1, 1, 0]);
  const y3       = useTransform(scrollYProgress, [0.65, 0.75, 0.9,  1.0], [100, 0, 0, -100]);

  const styles = [
    { opacity: opacity0, y: y0 },
    { opacity: opacity1, y: y1 },
    { opacity: opacity2, y: y2 },
    { opacity: opacity3, y: y3 },
  ];

  return { containerRef, styles };
};

const featureContent = [
  {
    heading: "Custom design, built right",
    description:
      "We believe websites should do more than impress — they should perform. Every project starts with a clear analysis of business goals and user needs, allowing us to craft digital experiences that are strategic, reliable, and designed to last.",
    mobileImage: "/images/work-ecommerce.jpg",
    mobileAlt: "Custom web design",
  },
  {
    heading: "Strategy before aesthetics",
    description:
      "We believe websites should do more than impress — they should perform. Every project starts with a clear analysis of business goals and user needs, allowing us to craft digital experiences that are strategic, reliable, and designed to last.",
    mobileImage: "/images/about-studio.jpg",
    mobileAlt: "Strategy and planning",
  },
  {
    heading: "Collaboration that matters",
    description:
      "We design websites that convert browsers into customers and customers into advocates for your brand.",
    mobileImage: "/images/work-brand.jpg",
    mobileAlt: "Creative collaboration",
  },
  {
    heading: "Results that speak loud",
    description:
      "We believe websites should do more than impress — they should perform. Every project starts with a clear analysis of business goals and user needs, allowing us to craft digital experiences that are strategic, reliable, and designed to last.",
    mobileImage: "/images/work-fintech.jpg",
    mobileAlt: "Analytics and results",
  },
];

export function Layout513() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const { containerRef, styles } = useRelume();

  return (
    <section
      ref={containerRef}
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-20">
          <div className="flex flex-col gap-y-16 md:sticky md:top-20 md:mt-20 md:h-[calc(100vh_-10rem)] md:justify-center">
            <div className="flex flex-col">
              <p className="mb-3 font-semibold md:mb-4">Why</p>
              <h2 className="mb-5 text-5xl font-bold leading-[1.2] md:mb-6 md:text-7xl lg:text-8xl">
                Built with intention
              </h2>
              <p className="md:text-md">
                We believe websites should do more than impress — they should
                perform. Every project starts with a clear analysis of business
                goals and user needs, allowing us to craft digital experiences
                that are strategic, reliable, and designed to last.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Services" variant="secondary">
                  Services
                </Button>
                <Button
                  title="Portfolio"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Portfolio
                </Button>
              </div>
            </div>
            <div className="relative flex flex-col justify-start gap-y-8">
              <AnimatePresence>
                {featureContent.map((item, index) => (
                  <Fragment key={index}>
                    <ConditionalRender condition={isMobile}>
                      <div>
                        <h5 className="mb-3 text-xl font-bold leading-tight">{item.heading}</h5>
                        <p>{item.description}</p>
                        <div className="mt-4 overflow-hidden rounded-sm">
                          <img
                            src={item.mobileImage}
                            alt={item.mobileAlt}
                            className="w-full object-cover aspect-[4/3]"
                          />
                        </div>
                      </div>
                    </ConditionalRender>
                    <ConditionalRender condition={isTablet}>
                      <motion.div
                        style={styles[index]}
                        initial={index === 0 ? { opacity: 0, y: 100 } : false}
                        animate={index === 0 ? { opacity: 1, y: 0 } : {}}
                        transition={index === 0 ? { duration: 0.5 } : {}}
                        className="md:absolute first:md:relative"
                      >
                        <h5 className="font-bold md:mb-4 md:text-2xl">{item.heading}</h5>
                        <p className="md:text-md">{item.description}</p>
                      </motion.div>
                    </ConditionalRender>
                  </Fragment>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="hidden md:grid md:grid-cols-1 md:gap-4">
            {data.map((item, index) => (
              <div key={index} className="h-screen overflow-hidden">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="size-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
