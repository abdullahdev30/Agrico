import Hero from '../components/home_page/hero_section'
import data from "../data/home.json"
import SectionB from "../components/home_page/sectionB"
import Innovation from '../components/home_page/innovation_section'
import Experties from "../components/home_page/experties_section"
import About from '../components/home_page/aboutus_section'
import Blog from '../components/home_page/blogs'
import Whychooseus from '../components/home_page/whychooseus'
import Joinus from '../components/home_page/join_us'
import Footer from '../components/footer'

export default function Home() {
  return (
      <>
        <Hero data={data.heroSection} />
        <SectionB data={data.metricsBlock} />
        <Innovation data={data.innovationSection}/>
        <Experties data={data.expertiseSection}/>
        <About />
        <Blog data={data.blogSection}/>
        <Whychooseus/>
        <Joinus />
        <Footer />
      </>
  )
}
