import React from "react";
import { IconProps } from "@radix-ui/react-icons/dist/types";

export type IconComponent = React.FC<IconProps>;

export type IconPropsExtended = {
  Icon: IconComponent;
  size?: "small" | "medium" | "large";
  className?: string;
};

const Icon = ({
  Icon,
  size = "medium",
  className,
  ...props
}: IconPropsExtended) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  };

  return <Icon className={`${sizeClasses[size]} ${className}`} {...props} />;
};

export default Icon;
