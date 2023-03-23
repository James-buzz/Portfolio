import Link from 'next/link';

interface Props { }
const Footer: React.FC<Props> = () => {
  return (
    <div className="mt-12 w-full border-t border-gray-200 pt-8 pb-12 text-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-around px-2">
        <div className="flex items-center">
          <div className="mr-10">
            <div className="flex">
              © <div className="ml-1 font-bold">2022</div>
            </div>
            <Link href="/">
              <div className="inline link cursor-pointer">James.buzz</div>
            </Link>
          </div>
          <div className="mr-10">
            <div>
              <div className="font-bold">Social</div>
            </div>
            <Link href="https://github.com/James-buzz">
              <div className="inline link cursor-pointer">Github</div>
            </Link>
          </div>
          <div className="mr-10">
            <div>
              <div className="font-bold">Legal</div>
            </div>
            <div className="flex gap-4">
              <Link href="/legal/policy">
                <div className="inline link cursor-pointer">Privacy policy</div>
              </Link>
              <Link href="/legal/terms">
                <div className="inline link cursor-pointer">Terms and conditions</div>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
