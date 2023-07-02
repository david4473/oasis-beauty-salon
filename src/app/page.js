import Hero from "@/components/Hero";
import Pinned from "@/components/pinned_section";
import Section_three from "@/components/section_three";
import Section_two from "@/components/section_two";

export default function Home() {
  return (
    <div>
      <Hero />
      <Pinned />
      <Section_two />
      <Section_three />
    </div>
  );
}
