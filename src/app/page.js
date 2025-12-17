import ScrollFlipSection from "./animations/ScrollAnimationProvider";
import Hero from '../components/home_page/hero_section'
import SectionB from '../components/home_page/sectionB'
import Innovation from '../components/home_page/innovation_section'
import Experties from "../components/home_page/experties_section"
import About from '../components/home_page/aboutus_section'
import Blog from '../components/home_page/blogs'
import Whychooseus from '../components/home_page/whychooseus'
import Joinus from '../components/home_page/join_us'
import Footer from '../components/footer'
import data from "../data/home.json"

export default function Home() {
  return (
    <div className="scroll-container">
      {/* Hero - flip from top */}
      <ScrollFlipSection index={0} direction="up">
        <Hero data={data.heroSection} />
      </ScrollFlipSection>

      {/* SectionB - flip from bottom */}
      <ScrollFlipSection index={1} direction="down">
        <SectionB data={data.metricsBlock} />
      </ScrollFlipSection>

      {/* Innovation - flip from left */}
      <ScrollFlipSection index={2} direction="left">
        <Innovation data={data.innovationSection} />
      </ScrollFlipSection>

      {/* Experties - flip from right */}
      <ScrollFlipSection index={3} direction="right">
        <Experties data={data.expertiseSection} />
      </ScrollFlipSection>

      {/* About - flip from up */}
      <ScrollFlipSection index={4} direction="up">
        <About data={data.aboutSection} />
      </ScrollFlipSection>

      {/* Blog - flip from down */}
      <ScrollFlipSection index={5} direction="down">
        <Blog data={data.blogSection} />
      </ScrollFlipSection>

      {/* Why Choose Us - flip from left */}
      <ScrollFlipSection index={6} direction="left">
        <Whychooseus data={data.reasonsToChooseSection}/>
      </ScrollFlipSection>

      {/* Join Us - flip from right */}
      <ScrollFlipSection index={7} direction="right">
        <Joinus />
      </ScrollFlipSection>

      {/* Footer - flip from up */}
      <ScrollFlipSection index={8} direction="up">
        <Footer />
      </ScrollFlipSection>
    </div>
  );
}
