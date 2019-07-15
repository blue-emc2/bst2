import React, { FC, useState } from 'react';
import { Menu, Confirm } from 'semantic-ui-react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import StoriesDestoryApi from '../../containers/StoriesDestoryApi';

type Props = {
  id: string;
} & RouteComponentProps;

const MenuItemDestroyButton: FC<Props> = ({ id, history }) => {
  const [opened, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  const handleDestory = (storyId: string) => {
    const destory = StoriesDestoryApi(storyId);

    destory()
      .then(() => {
        close();
        history.push('/home');
      })
      .catch(reason => {
        console.error(reason);
        history.push('/home');
      });
  };

  const open = () => {
    setOpen(true);
  };
  const destroy = () => {
    handleDestory(id);
  };

  return (
    <>
      <Menu.Item as="a" onClick={open}>
        削除
      </Menu.Item>
      <Confirm
        open={opened}
        onCancel={close}
        onConfirm={destroy}
        content="この物語を削除してよろしいですか？"
      />
    </>
  );
};

export default withRouter(MenuItemDestroyButton);
