import Link from 'next/link';
import { FaLink } from 'react-icons/fa';

interface Props {
  as: string;
  children: React.ReactNode;
  slug: string;
}
const Heading: React.FC<Props> = (props) => {

  switch (props.as) {
    case "h1": {
      return (
        <div className="mt-6 mb-4 flex items-center gap-1" >
          <Link href={'#' + props.slug} className="">
            <div className="text-sm text-gray-400 hover:text-gray-700">
              <FaLink />
            </div>
          </Link>
          <h2 id={props.slug} className="font-sans text-3xl font-bold">
            {props.children}
          </h2>
        </div >
      );
    }
    case "h2": {
      return (
        <div className="mt-6 mb-4 flex items-center gap-1 ml-2" >
          <Link href={'#' + props.slug} className="">
            <h2 id={props.slug} className="font-sans text-gray-900 text-xl font-bold">
              {props.children}
            </h2>
          </Link>
        </div >
      );
    }
    default: {
      return (<></>)
    }
  }
};

export default Heading;
