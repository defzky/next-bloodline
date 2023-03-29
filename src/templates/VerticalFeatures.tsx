import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <>
    <Section
    // title="Bloodline"
    // description="A platform for information and education related to blood donation, aimed at benefiting the community."
    >
      <VerticalFeatureRow
        title="What did we do ?"
        description="Strives to connect individuals who are willing to donate their blood with patients in need of blood transfusions, and we ensure that the information we provide about blood requirements is accurate and reliable across all media platforms. Our objective is to spread factual information, avoiding any outdated or false information."
        image="/assets/images/heart.png"
        imageAlt="Second feature alt text"
      />
      <VerticalFeatureRow
        title="Vision"
        description="To become a trusted information and support platform for blood donors and recipients, in the effort to raise awareness and engagement in the community to save lives through blood donation."
        image="/assets/images/heart4.png"
        imageAlt="First feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Mission"
        description="(+) Provide accurate and up-to-date information about blood donation and the importance of donating blood.
        (+) Build an active and cohesive community of blood donors and recipients.
        (+) Provide a safe and reliable blood donor service for all parties involved.
        (+) Encourage active participation in the blood donation movement through awareness and education campaigns.."
        image="/assets/images/heart3.png"
        imageAlt="Third feature alt text"
      />
    </Section>
  </>
);

export { VerticalFeatures };
