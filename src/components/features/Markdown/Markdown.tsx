import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import { useEffect } from 'react';
import Code from '../MDX/Code';
import Frame from '../MDX/Frame';
import Heading from '../MDX/Heading';
import Link from '../MDX/Link';
import Notice from '../MDX/Notice';
import Paragraph from '../MDX/Paragraph';

const components = {
  Heading,
  p: Paragraph,
  Link,
  Code,
  Frame,
  Image,
  Notice,
};

interface Props {
  content: any;
}
const Markdown: React.FC<Props> = (props) => {
  useEffect(() => {

  }, []);
  return (
    <div className="markdown">
      <MDXRemote {...props.content} components={components} />
    </div>
  );
};

export default Markdown;
