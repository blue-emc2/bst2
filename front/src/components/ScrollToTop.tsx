import { useEffect, FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
} & RouteComponentProps;

const ScrollToTop: FC<Props> = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default withRouter(ScrollToTop);
