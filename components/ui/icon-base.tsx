import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type IconBaseProps = {
  bgColor: string;
  icon: IconDefinition;
};

export default function IconBase({
  bgColor,
  icon,
}: IconBaseProps): React.JSX.Element {
  return (
    <div
      className="mr-3 flex h-12 w-12 items-center justify-center rounded-lg"
      style={{ backgroundColor: bgColor }}
    >
      <FontAwesomeIcon 
        icon={icon} 
        className="text-xl text-white" 
      />
    </div>
  );
}
