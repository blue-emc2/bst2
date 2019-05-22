/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import { Form, Container, Button } from 'semantic-ui-react';
import SectionTable from './SectionTable';

const CharacterNameInputForm: FC<{}> = () => (
  <Form.Field>
    <label>
      キャラクター名
      <input type="text" placeholder="キャラクター名" />
    </label>
  </Form.Field>
);

const AuthorInputForm: FC<{}> = () => (
  <Form.Field>
    <label>
      作者
      <input type="text" placeholder="作者" />
    </label>
  </Form.Field>
);

const PreviewButton = () => <Button content="プレビューする" />;

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
