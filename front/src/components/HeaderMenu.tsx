import React, { FC } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HeaderMenu: FC<{}> = ({ ...props }) => {
  const { children } = props;

  return (
    <Menu size="large">
      <Container text>
        <Menu.Item as={Link} to="/home" active data-cy="home">
          トップ
        </Menu.Item>
        {children}
      </Container>
    </Menu>
  );
};

export default HeaderMenu;

// eslint-disable-next-line no-lone-blocks
{
  /* <Menu size="large">
<Container>
  <Menu.Item as={Link} to="/home" active data-cy="home">
    トップ
  </Menu.Item>
  <Menu.Item>削除</Menu.Item>
  <Menu.Item position="right">
    <Button as="a">Log in</Button>
  </Menu.Item>
</Container>
</Menu> */
}
