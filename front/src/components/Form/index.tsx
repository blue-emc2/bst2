/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, SyntheticEvent } from 'react';
import { Form, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SectionTable from './SectionTable';
import { useLayoutStore } from '../../containers/App';

const CharacterNameInputForm: FC<{}> = () => (
  <Form.Field>
    <label>
      キャラクター名
      <input type="text" placeholder="キャラクター名" name="charactername" />
    </label>
  </Form.Field>
);

const AuthorInputForm: FC<{}> = () => (
  <Form.Field>
    <label>
      作者
      <input type="text" placeholder="作者" name="username" />
    </label>
  </Form.Field>
);

const PreviewButton: FC<{}> = () => {
  const store = useLayoutStore();

  const handleClick = (e: SyntheticEvent) => {
    store({});
  };

  return (
    <Button basic onClick={e => handleClick(e)}>
      <Link to="/preview">プレビュー</Link>
    </Button>
  );
};

const StoryForm: FC<{}> = () => {
  return (
    <Container style={{ marginTop: '7em' }}>
      <Form>
        <CharacterNameInputForm />
        <AuthorInputForm />
        <SectionTable />
        <PreviewButton />
      </Form>
    </Container>
  );
};

export default StoryForm;
