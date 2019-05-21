/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState } from 'react';
import {
  Form,
  Container,
  Grid,
  Image,
  Button,
  Icon,
  Menu,
  GridRow,
  GridColumn,
} from 'semantic-ui-react';

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

const InputLayoutChangeMenuRow: FC<{}> = () => (
  <GridRow>
    <GridColumn>
      <Menu>
        <Menu.Item header>レイアウトを選択</Menu.Item>
        <Menu.Item>文章のみ</Menu.Item>
        <Menu.Item>文章と画像</Menu.Item>
        <Menu.Item>画像と文章</Menu.Item>
      </Menu>
    </GridColumn>
  </GridRow>
);

const PreviewButton = () => <Button content="プレビューする" />;

interface RowEventProps {
  onDeleteRow?: () => void;
  onAddRow?: () => void;
}

const AppendRowButton: FC<RowEventProps> = ({ onAddRow = () => {} }) => {
  return (
    <Button icon onClick={onAddRow}>
      <Icon name="plus circle" />
    </Button>
  );
};

const DeleteRowButton: FC<RowEventProps> = ({ onDeleteRow = () => {} }) => {
  return (
    <Button icon onClick={onDeleteRow}>
      <Icon name="minus circle" />
    </Button>
  );
};

const SectionRow: FC<{}> = () => {
  return (
    <Grid.Row>
      <Grid.Column width={8}>
        <Form.Field>
          <input />
        </Form.Field>
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      </Grid.Column>
    </Grid.Row>
  );
};

const SectionBar: FC<{}> = () => (
  <Grid divided>
    <InputLayoutChangeMenuRow />
    <SectionRow />
  </Grid>
);

const SectionTable: FC<{}> = () => {
  const [size, setSize] = useState(1);

  const increment = () => {
    const newSize = size + 1;
    if (newSize > 10) {
      return;
    }
    setSize(newSize);
  };

  const decrement = () => {
    const newSize = size - 1;
    if (newSize < 1) {
      return;
    }
    setSize(newSize);
  };

  return (
    <Grid celled="internally" columns={2}>
      {Array.from(Array(size).keys()).map((i: number) => (
        <SectionBar key={i} />
      ))}
      <AppendRowButton onAddRow={increment} />
      <DeleteRowButton onDeleteRow={decrement} />
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
