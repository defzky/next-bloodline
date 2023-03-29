import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-white">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          {/* <Link href="/">
            <a>GitHub</a>
          </Link> */}
        </li>
        <li>
          {/* <Link href="/">
            <a>Sign in</a>
          </Link> */}
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Share the '}
            <span className="text-rose-600">love</span>
            {', donate blood with\n'}
            <span className="text-rose-600">Bloodline</span>
          </>
        }
        description="A platform for information and education related to blood donation, aimed at benefiting the community."
        button={
          <Link href="/">
            <a>
              <Button xl>Blood donor application</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
