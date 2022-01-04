import React from 'react';
import cx from 'classNames';

interface ButtonTabProps {
  title: string;
  active: boolean;
}

export default function ButtonTab(props: ButtonTabProps) {
  const { title, active } = props;
  const btnClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });
  return (
    <a data-filter="*" href="#" className={btnClass}>
      {title}
    </a>
  );
}
