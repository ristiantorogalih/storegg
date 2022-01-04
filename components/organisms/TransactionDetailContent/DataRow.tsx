import React from 'react';
import cx from 'classnames';

interface DataRowProps {
  label: string;
  value: string | number;
}
export default function DataRow(props: DataRowProps) {
  const { label, value } = props;
  const textClass = cx({
    'purchase-details': true,
    'color-palette-4': label === 'Total',
  });
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label} <span className={textClass}>{value}</span>
    </p>
  );
}
