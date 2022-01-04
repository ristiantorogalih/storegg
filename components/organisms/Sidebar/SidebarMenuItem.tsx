import Image from 'next/image';
import React from 'react';
import cx from 'classnames';
import Link from 'next/link';

interface SidebarMenuProps {
  title: string;
  icon:
    | 'ic-menu-overview'
    | 'ic-menu-transaction'
    | 'ic-menu-message'
    | 'ic-menu-card'
    | 'ic-menu-reward'
    | 'ic-menu-setting'
    | 'ic-menu-logout';
  active?: boolean;
  href: string;
}
export default function SidebarMenuItem(props: Partial<SidebarMenuProps>) {
  const { title, icon, active, href } = props;
  const ClassItem = cx({
    item: true,
    active,
    'mb-30': true,
  });
  return (
    <div className={ClassItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
