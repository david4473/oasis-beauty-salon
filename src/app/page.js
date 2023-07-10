import Hero from "@/components/Hero";
import Explore_section from "@/components/explore_section";
import Pinned from "@/components/pinned_section";
import Section_three from "@/components/section_three";
import Section_two from "@/components/section_two";
import Testimonial_section from "@/components/testimonial_section";
import Video_section from "@/components/video_section";

export default function Home() {
  return (
    <div>
      <Hero />
      <Pinned />
      <Section_two />
      <Section_three />
      <Explore_section />
      <Testimonial_section />
      <Video_section />
    </div>
  );
}
