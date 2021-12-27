import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="We are Cesta there are our super powers!"
    description="To know what we provide or how we manage to create events and provide opportunities to all the students who are willing to study."
  >
      <VerticalFeatureRow
      title="Events and hackathons"
      description="We bring you some fresh baked hand-made events and hackathon, Designed by in-house experts. Participating in these will give you technical perk to withstand in the modern world."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="What more we provide?"
      description="We provide digital verifiable certificate directly linked to your email. You can submit these to anywhere. We also provide Open Badge as a alternative of certificates."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="How you manage?"
      description="We charge one-time fee of ₹100 from all the students and then using that we provide opportunity to you students to grow."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
