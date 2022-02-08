import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="We are Cesta there are our super powers!"
    description="To know what we provide or how we manage to create events and provide opportunities to all the students who are willing to study. Join our discord, link in footer"
  >
      <VerticalFeatureRow
      title="Who manage CESTA?"
      description="Cesta is managed by some of the greatest student in the history of DTC. They have bone chilling skills which they showcase when they need."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="What more we provide?"
      description="We bring you some fresh baked hand-made events and hackathon, Designed by in-house experts. Participating in these will give you technical perk to withstand in the modern world. We provide digital verifiable certificate directly linked to your email. You can submit these to anywhere. We also provide Open Badge as a alternative of certificates."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Who are the sponsors?"
      description="Most of the time by students, ₹100 paid by all the members when they joined. There are other sponsors also, Which may be listed here."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
