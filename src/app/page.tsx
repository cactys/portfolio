import { AboutAuthor } from '@/components/AboutAuthor/AboutAuthor';
import { AboutProject } from '@/components/AboutProject/AboutProject';
import { Navigation } from '@/components/Navigation/Navigation';
import { Promo } from '@/components/Promo/Promo';
import { Techs } from '@/components/Techs/Techs';

export default function Home() {
  return (
    <>
      <Promo />
      <Navigation />
      <AboutProject />
      <Techs />
      <AboutAuthor />
    </>
  );
}
