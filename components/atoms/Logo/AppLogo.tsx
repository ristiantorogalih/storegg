import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface AppLogoProps {
  width: number;
  height: number;
  alt: string;
}

export default function AppLogo(props: AppLogoProps) {
  const { width, height, alt } = props;
  return (
    <Link href="/">
      <a className="navbar-brand">
        <Image src="/icon/logo.svg" width={width} height={height} alt={alt} />
      </a>
    </Link>
  );
}
