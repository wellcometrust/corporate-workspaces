// @flow
import React, { Children, useEffect } from 'react';
import Link from 'next/link';
import cx from 'classnames';
//import withRouter from './withRouter';

const ActiveLink = ({
  router,
  children,
  href,
  activeClassName,
  ...otherProps
}) => {
  const child = Children.only(children);
  const className = cx(child.props.className, {
    [activeClassName]: router && router.pathname === href && activeClassName
  });

  // return process.env.ENV_TYPE !== 'd7' ? (
  //   <Link href={href} {...otherProps}>
  //     {React.cloneElement(child, { className })}
  //   </Link>
  // ) : (
  //   React.cloneElement(child, { className })
  // );
  return (
    React.cloneElement(child, { className })
  );
};

// export default withRouter(ActiveLink);

export default ActiveLink;
