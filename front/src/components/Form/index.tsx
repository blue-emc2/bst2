/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, SyntheticEvent } from 'react';
import { Form, Container, Button } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
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
  return (
    <Button basic type="submit">
      プレビュー
    </Button>
  );
};

const StoryForm: FC<RouteComponentProps> = ({ history }) => {
  const store = useLayoutStore();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    store(e.target);
    history.push('/preview');
  };

  return (
    <Container style={{ marginTop: '7em' }}>
      <Form onSubmit={e => handleSubmit(e)}>
        <CharacterNameInputForm />
        <AuthorInputForm />
        <SectionTable />
        <PreviewButton />
      </Form>
    </Container>
  );
};

export default withRouter(StoryForm);
