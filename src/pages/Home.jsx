import { Hero, Tags, Videos } from '../components/Home';
import Feature from '../components/ui/Feature';
export default function Home() {
  return (
    <>
      <Feature>
        <Hero />
        <Tags />
        <Videos />
      </Feature>
    </>
  );
}
