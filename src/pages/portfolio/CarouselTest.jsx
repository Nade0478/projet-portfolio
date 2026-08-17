import CarouselCaptureTest from "../../component/CarouselCaptureTest";

export default function CarouselTest() {
  const captures = [
    {
      name: "Test Lighthouse SEO",
      file: "/assets/capture-test-lighthouse-seo.png",
    },
    {
      name: "Test Postman API",
      file: "/assets/capture-test-postman.png",
    },
    {
      name: "Tests divers",
      file: "/assets/Capture-tests.png",
    },
  ];

  return <CarouselCaptureTest captures={captures} />;
}
