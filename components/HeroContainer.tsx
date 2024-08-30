import {Hero} from '@primer/react-brand';

export const HeroContainer = () => {
  return (
    <>
      <Hero className="hero" data-color-mode="dark">
        <Hero.Heading size="display">Discover or get&nbsp;Discovered</Hero.Heading>
        <Hero.Description size="300">
          Find interesting projects to work on this weekend or get found by talent across PSG College of Technology to collaborate on your next big thing
          <br /><br />
          Explore a repository or a submission below to get started!
        </Hero.Description>
      </Hero>
    </>
  );
};
