import React from 'react';
import FooterItemNavTitle from '../../atoms/footer';
interface FooterItemProps {
  heading: string;
}

export default function FooterItem(props: FooterItemProps) {
  const { heading } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{heading}</p>
      <ul className="list-unstyled">
        <FooterItemNavTitle navtitle="About Us" link="#" />
        <FooterItemNavTitle navtitle="About Us" link="#" />
        <FooterItemNavTitle navtitle="About Us" link="#" />
      </ul>
    </div>
  );
}
