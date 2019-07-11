/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState, useEffect } from 'react';
import {
  Container,
  Header,
  Segment,
  Button,
  Icon,
  Form,
} from 'semantic-ui-react';
import { RouteComponentProps, withRouter } from 'react-router';
import SectionList from '../../containers/SectionList';
import { StroiesCreateApi } from '../../containers/StroiesCreateApi';
import { LayoutProps } from '../../types/LayoutProps';
import { MainContainer } from '../styled';

const handleClickFormNew = ({ ...props }) => {
  const { history, characterName, userName, sections } = props;

  history.push('/new', { characterName, userName, sections });
};

type routerWithLayoutProps = RouteComponentProps & LayoutProps;

const Deliver: FC<routerWithLayoutProps> = ({ ...args }) => {
  const [loading, setLoading] = useState(false);
  const { history, characterName, userName, sections } = args;

  useEffect(() => {
    if (loading) {
      const data: LayoutProps = {
        characterName,
        userName,
        sections,
      };
      const createStroies = StroiesCreateApi(data);
      createStroies()
        .then(response => {
          const id = response.data as number;
          history.replace(`/story/${id}`);
        })
        .catch(reason => {
          console.error(reason);
        });
    }
  }, [characterName, history, loading, sections, userName]);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <>
      {loading ? (
        <Button basic loading>
          登録中...
        </Button>
      ) : (
        <Button icon labelPosition="right" primary onClick={handleClick}>
          <Icon name="long arrow alternate right"></Icon>
          公開する
        </Button>
      )}
    </>
  );
};

const handleThemeChange = () => {};

const Preview: FC<routerWithLayoutProps> = ({ ...args }) => {
  const { characterName, userName, sections } = args;

  return (
    <MainContainer>
      <Form>
        <Form.Group inline>
          <label>テーマ</label>
          <Form.Radio
            label="ノーマル"
            value="sm"
            defaultChecked
            onChange={handleThemeChange}
          />
          <Form.Radio label="漆黒のヴィランズ" value="md" />
        </Form.Group>
      </Form>

      <Container text textAlign="center">
        <Header as="h1" data-test="charactername">
          {characterName}
        </Header>
      </Container>

      <Container text>
        <Header as="h1" data-test="username">
          {userName}
        </Header>
      </Container>

      <SectionList sections={sections} />

      <Segment.Group horizontal style={{ border: 0 }}>
        <Segment basic>
          <Button
            icon
            labelPosition="left"
            secondary
            onClick={e => handleClickFormNew(args)}
          >
            <Icon name="long arrow alternate left"></Icon>
            入力画面へ
          </Button>
        </Segment>
        <Segment textAlign="right" basic style={{ border: 0 }}>
          <Deliver {...args} />
        </Segment>
      </Segment.Group>
    </MainContainer>
  );
};

export default withRouter(Preview);
