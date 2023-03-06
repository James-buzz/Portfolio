import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  image: any;
  link: string;
  subtitle: string;
}
const SocialLink: React.FC<Props> = (props: Props) => {
  return (
    <Link href={props.link}>
      <div className="h-40">
        <div className="relative h-full">
          <Image
            quality={100}
            style={{ objectFit: 'cover', objectPosition: 'left' }}
            fill
            className="rounded-xl saturate-50 transition-all duration-200 hover:scale-105 hover:saturate-100"
            alt={props.title}
            src={props.image}
          />
        </div>
        <div className="mt-3 font-sans text-2xl">{props.title}</div>
        <div className="mt-2 font-serif text-sm">{props.subtitle}</div>
      </div>
    </Link>
  );
};

export default SocialLink;
