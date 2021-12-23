import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/cestasociety">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/cestasociety/website">
            <a>Edit me</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern updated club for\n'}
            <span className="text-primary-500">Developers</span>
          </>
        }
        description="A club which will try to train your technical side of the coding."
        button={
          <Link href="https://github.com/cestasociety">
            <a>
              <Button xl>Grab your seat here</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
