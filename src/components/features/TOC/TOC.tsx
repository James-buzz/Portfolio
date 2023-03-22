// @ts-nocheck
import { useHeadsObserver } from '@/hooks/useHeads';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState([]);
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3, h4')).map(
      (elem) => ({
        text: elem.innerText,
        id: elem.id,
      })
    );
    setHeadings(elements);
  }, []);
  const { activeId } = useHeadsObserver();
  return (
    <nav>
      <ul className="mt-2">
        {headings.map((heading) => (
          <li className="mt-3 font-serif" key={heading.text}>
            <a
              onClick={(evt) => {
                evt.preventDefault();
                document
                  .querySelector(`#${heading.id}`)
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              href={`#${heading.id}`}
              className={classNames(
                activeId === heading.id ? 'font-bold' : 'font-normal'
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
