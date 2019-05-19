/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState } from 'react';
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

interface RowEventProps {
  decrement?: () => void;
  increment?: () => void;
}

const AppendRowButton: FC<RowEventProps> = ({ increment = () => {} }) => {
  return (
    <Button icon onClick={increment}>
      <Icon name="plus circle" />
    </Button>
  );
};

const DeleteRowButton: FC<RowEventProps> = ({ decrement = () => {} }) => {
  return (
    <Button icon onClick={decrement}>
      <Icon name="minus circle" />
    </Button>
  );
};

const SectionRow: FC<{}> = () => {
  return (
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
};

const SectionTable: FC<{}> = () => {
  const [size, setSize] = useState(1);

  const increment = () => {
    setSize(size + 1);
  };

  const decrement = () => {
    setSize(size - 1);
  };

  return (
    <Grid celled="internally">
      {Array.from(Array(size).keys()).map((i: number) => (
        <SectionRow key={i} />
      ))}
      <AppendRowButton {...increment} />
      <DeleteRowButton {...decrement} />
    </Grid>
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
