import Image from 'next/image';
import Link from 'next/link';
import Moment from 'react-moment';

interface Props {
  title: string;
  date: string;
  image: any;
  slug: string;
}
const Card: React.FC<Props> = (props) => {
  return (
    <Link href={'/posts/' + props.slug}>
      <div className="mb-6">
        <div className="h-80">
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
        </div>
        <div className="mt-4 font-sans text-2xl">{props.title}</div>
        <div className="mt-2 font-serif">
          <Moment format={'DD MMMM, YYYY'}>{props.date}</Moment>
        </div>
      </div>
    </Link>
  );
};

export default Card;
