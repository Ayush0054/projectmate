import { FC } from 'react';
import { motion } from 'framer-motion';
import { ButtonProps } from './Button.interface';

export const Button: FC<ButtonProps> = ({
  type = 'button',
  onClick,
  isDisabled,
  haveAnimation = true,
  className,
  children,
}) => (
  <motion.button
    whileTap={haveAnimation ? { scale: 0.9 } : ''}
    onClick={onClick}
    type={type}
    layout
    className={`items-center rounded-md bg-green-900 text-green-100 ring-green-800 transition-all hover:opacity-75 focus:ring ${className} ${
      isDisabled && 'cursor-default bg-opacity-40 opacity-60'
    }`}
    disabled={isDisabled}
  >
    {children}
  </motion.button>
);
