import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Code from '../MDX/Code';
import Frame from '../MDX/Frame';
import Heading from '../MDX/Heading';
import Link from '../MDX/Link';
import Paragraph from '../MDX/Paragraph';

const components = {
  Heading,
  p: Paragraph,
  Link,
  Code,
  Frame,
  Image,
};

interface Props {
  content: any;
}
const Markdown: React.FC<Props> = (props) => {
  return (
    <div className="markdown">
      <MDXRemote {...props.content} components={components} />
    </div>
  );
};

export default Markdown;
