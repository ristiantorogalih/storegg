import React from 'react';

interface FooterItemNavTitleProps {
  navtitle: string;
  link: string;
}

export default function FooterItemNavTitle(props: FooterItemNavTitleProps) {
  const { navtitle, link } = props;
  return (
    <li className="mb-6">
      <a href={link} className="text-lg color-palette-1 text-decoration-none">
        {navtitle}
      </a>
    </li>
  );
}
