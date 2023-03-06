import Image from 'next/image';
import AboutIcon from '../../../public/assets/icons/about.svg';
import HomeIcon from '../../../public/assets/icons/home.svg';
import PostsIcon from '../../../public/assets/icons/posts.svg';
import BeeIcon from '../../../public/assets/svg/bee.svg';
import HeaderLink from './HeaderLink';

interface Props { }
const Header: React.FC<Props> = () => {
  const navbarItems = [
    {
      prefix: 'Home',
      link: '/',
      icon: HomeIcon,
    },
    {
      prefix: 'Posts',
      link: '/posts',
      icon: PostsIcon,
    },
    {
      prefix: 'About',
      link: '/about',
      icon: AboutIcon,
    },
    // {
    //   prefix: 'Uses',
    //   link: '/uses',
    //   icon: UsesIcon,
    // },
  ];
  return (
    <nav className="relative">
      <div className="flex flex-wrap items-center justify-center">
        <div>
          <Image src={BeeIcon} alt="website icon" className="w-8 text-black duration-300 hover:rotate-180 transition-all" />
        </div>
        <div className="flex items-center">
          {navbarItems.map((item, key) => (
            <HeaderLink
              key={key}
              prefix={item.prefix}
              link={item.link}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
