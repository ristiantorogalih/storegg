import React from 'react';

interface HeadingFooterProps {
  heading: string;
}

export default function HeadingFooter(props: HeadingFooterProps) {
  const { heading } = props;
  return <p className="text-lg fw-semibold color-palette-1 mb-12">{heading}</p>;
}
