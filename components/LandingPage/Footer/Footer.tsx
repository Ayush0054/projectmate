import Link from 'next/link';
import { icons } from './data';

const Icons = icons.map((social) => {
  return {
    id: social.id,
    link: social.link,
    name: social.name,
  };
});

export const Footer = () => {
  return (
    <div className="border-t border-gray-700 px-4">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between gap-4 py-8 md:flex-row md:gap-0">
        <ul className="flex w-full flex-row items-center justify-between gap-4 md:w-auto lg:justify-center">
          {Icons.map((social) => {
            return (
              <li key={social.id} className="">
                <a
                  href={social.link}
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <div className="text-gray-400 hover:text-gray-300">
                    {social.name}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
        <a href="#" className="text-base text-gray-400 hover:text-gray-300">
          MIT License
        </a>
        <Link href="#" className="text-base text-gray-400 hover:text-gray-300">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};
