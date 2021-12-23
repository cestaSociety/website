import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Are you intrested in cesta? Would you like to join?"
      subtitle="It costs one time ₹100 fee only."
      button={
        <Link href="https://github.com/cestasociety">
          <a>
            <Button>Grab your seat here</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
