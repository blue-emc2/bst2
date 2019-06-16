/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, FormEvent } from 'react';
import { Form, Container, Button, Input } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import SectionTable from './SectionTable';
import { LayoutProps, LayoutType } from '../../App';

const PreviewButton = () => {
  return (
    <Button basic type="submit">
      プレビュー
    </Button>
  );
};

type FromProps = {
  onPreview: ({ characterName }: LayoutProps) => void;
} & RouteComponentProps;

const StoryForm: FC<FromProps> = ({ onPreview, history }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 送信用のパラメーターを作成する
    const layout: LayoutProps = {
      characterName: '',
      userName: '',
      sections: [],
    };
    const form = new FormData(e.target as HTMLFormElement);
    form.forEach((value, name) => {
      if (name === 'characterName' || name === 'userName') {
        layout[name] = value as string;
      }

      if (/section/.test(name)) {
        layout.sections.push({
          layoutType: LayoutType.Text,
          body: value as string,
        });
      }
    });
    onPreview(layout);
    history.push('/preview');
  };

  return (
    <Container style={{ marginTop: '7em' }}>
      <Form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <Form.Field
          required
          control={Input}
          name="characterName"
          label="キャラクター名"
          placeholder="キャラクター名"
        />
        <Form.Field
          control={Input}
          name="userName"
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
