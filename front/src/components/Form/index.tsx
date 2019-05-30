/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, FormEvent } from 'react';
import { Form, Container, Button, Input } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import SectionTable from './SectionTable';
import { LayoutProps } from '../../App';

const PreviewButton = () => {
  return (
    <Button basic type="submit">
      プレビュー
    </Button>
  );
};

type FromProps = {
  onPreview: ({ charactername }: LayoutProps) => void;
} & RouteComponentProps;

const StoryForm: FC<FromProps> = ({ onPreview, history }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    onPreview({
      charactername: form.get('charactername') as string,
      username: form.get('username') as string,
    });
    history.push('/preview');
  };

  return (
    <Container style={{ marginTop: '7em' }}>
      <Form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <Form.Field
          control={Input}
          name="charactername"
          label="キャラクター名"
          placeholder="キャラクター名"
        />
        <Form.Field
          control={Input}
          name="username"
          label="作者"
          placeholder="作者"
        />
        <SectionTable />
        <PreviewButton />
      </Form>
    </Container>
  );
};

export default withRouter(StoryForm);
