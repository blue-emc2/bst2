/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, SyntheticEvent, useState, ChangeEvent } from 'react';
import { Form, Container, Button, Input } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import SectionTable from './SectionTable';
import { useLayoutStore } from '../../containers/App';

const PreviewButton: FC<{}> = () => {
  return (
    <Button basic type="submit">
      プレビュー
    </Button>
  );
};

const StoryForm: FC<RouteComponentProps> = ({ history }) => {
  const [personalData, setPersonalData] = useState({});
  const store = useLayoutStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonalData({
      ...personalData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    store(e.target);
    history.push('/preview');
  };

  return (
    <Container style={{ marginTop: '7em' }}>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Field
          control={Input}
          name="charactername"
          label="キャラクター名"
          placeholder="キャラクター名"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <Form.Field
          control={Input}
          name="username"
          label="作者"
          placeholder="作者"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <SectionTable />
        <PreviewButton />
      </Form>
    </Container>
  );
};

export default withRouter(StoryForm);
