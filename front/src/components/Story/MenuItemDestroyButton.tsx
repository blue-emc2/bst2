import React, { FC } from 'react';
import { Menu } from 'semantic-ui-react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import StoriesDestoryApi from '../../containers/StoriesDestoryApi';

type Props = {
  id: string;
} & RouteComponentProps;

const MenuItemDestroyButton: FC<Props> = ({ id, history }) => {
  const handleDestory = (storyId: string) => {
    const destory = StoriesDestoryApi(storyId);

    destory()
      .then(() => {
        history.push('/home');
      })
      .catch(reason => {
        console.error(reason);
        history.push('/home');
      });
  };

  return (
    <Menu.Item as="a" onClick={() => handleDestory(id)}>
      削除
    </Menu.Item>
  );
};

export default withRouter(MenuItemDestroyButton);
