import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-rose-600 inline-flex items-center ${fontStyle}`}>
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
