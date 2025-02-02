import Hero from '../_components/Hero';
import Sheet from '../_components/Sheet';

type Props = {
  children: React.ReactNode;
};

export default function NewsLayout({ children }: Prpos) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>;
    </>
  );
}
