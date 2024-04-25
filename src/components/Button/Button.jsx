import clsx from 'clsx';
import '../../styles/Button.css';

export const Button = ({ variant, children }) => {
  return <button className={clsx('button', variant)}>{children}</button>;
};
