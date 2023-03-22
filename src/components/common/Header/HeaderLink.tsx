import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  prefix: string;
  link: string;
  icon: any;
}
const HeaderLink: React.FC<Props> = (props) => {
  const { asPath } = useRouter();
  return (
    <Link href={props.link}>
      <div
        className={classNames(
          'header-link mx-3 flex items-center gap-2 px-3 py-1 font-serif',
          asPath == props.link ? 'header-link-active' : ''
        )}
      >
        <div className="h-3 w-3">
          <Image
            className="relative hover:opacity-90"
            src={props.icon}
            alt={'icon'}
          />
        </div>
        <div>{props.prefix}</div>
      </div>
    </Link>
  );
};

export default HeaderLink;
