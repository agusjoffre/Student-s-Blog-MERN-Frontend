import Hero from './Hero/Hero';
import CallToAction from './CTA/CallToAction';
import BlogSection from './BlogSection/BlogSection';
import './home.css';

export default function Home() {
  return (
    <div className="main-home">
      <Hero />
      <BlogSection from="UnBlogDeHistoria" />
      <CallToAction />
      <BlogSection from="de la Comunidad" />
    </div>
  );
}
