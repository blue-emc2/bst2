/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import { Form, Container, Grid, Image, Button, Icon } from 'semantic-ui-react';

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

const AppendRowButton = () => (
  <Button icon>
    <Icon name="plus" />
  </Button>
);

const SectionRow: FC<{}> = () => (
  <Grid.Row>
    <Grid.Column width={3}>
      <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
    </Grid.Column>
    <Grid.Column width={10}>
      <Form.Field>
        <input />
      </Form.Field>
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
    </Grid.Column>
  </Grid.Row>
);

const SectionTable: FC<{}> = () => (
  <Grid celled="internally">
    <SectionRow />
    <AppendRowButton />
  </Grid>
);

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
