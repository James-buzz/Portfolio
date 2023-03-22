import NextLink from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
}
const Link: React.FC<Props> = (props) => {
  return (
    <NextLink className="link" href={props.href}>
      {props.children}
    </NextLink>
  );
};

export default Link;
