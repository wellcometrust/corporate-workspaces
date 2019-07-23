import React, { Children } from 'react';
import Link from 'next/link';

const LinkWrapper = ({ children, href, otherProps }) => {
  const child = Children.only(children);
  const CompType = child.type;

  // if (process.env.ENV_TYPE === 'd7') {
  //   return <CompType href={href}>{child.props.children}</CompType>;
  // }
  return <CompType href={href}>{child.props.children}</CompType>;

  // return (
  //   <Link href={href} {...otherProps}>
  //     {children}
  //   </Link>
  // );
};

export default LinkWrapper;
