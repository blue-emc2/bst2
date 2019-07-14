/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState, useEffect, useCallback, useContext } from 'react';
import {
  Container,
  Header,
  Segment,
  Button,
  Icon,
  Form,
} from 'semantic-ui-react';
import { RouteComponentProps, withRouter } from 'react-router';
import { ThemeContext } from 'styled-components';
import SectionList from '../../containers/SectionList';
import { StroiesCreateApi } from '../../containers/StroiesCreateApi';
import { LayoutProps } from '../../types/LayoutProps';
import { MainContainer, ThemeWithP } from '../styled';
import { ThemeName, themes } from '../../theme/GrobalStyles';

const handleClickFormNew = ({ ...props }) => {
  const { history, characterName, userName, sections } = props;

  history.push('/new', { characterName, userName, sections });
};

type routerWithLayoutProps = RouteComponentProps & LayoutProps;

const Deliver: FC<routerWithLayoutProps> = ({ ...args }) => {
  const [loading, setLoading] = useState(false);
  const { history, characterName, userName, sections } = args;
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    if (loading) {
      const data: LayoutProps = {
        characterName,
        userName,
        sections,
        theme: themeContext.theme,
      };
      const createStroies = StroiesCreateApi(data);
      createStroies()
        .then(response => {
          themeContext.theme = themes.normal;
          const id = response.data as number;
          history.replace(`/story/${id}`);
        })
        .catch(reason => {
          console.error(reason);
        });
    }
  }, [characterName, history, loading, sections, themeContext.theme, userName]);

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

const Preview: FC<routerWithLayoutProps> = ({ ...args }) => {
  const { characterName, userName, sections } = args;
  const themeContext = useContext(ThemeContext);
  const [initThemeName, setThemeName] = useState(ThemeName.Normal);
  const handleThemeChange = useCallback(
    (value: ThemeName) => {
      setThemeName(value);

      switch (value) {
        case ThemeName.Normal:
          themeContext.theme = themes.normal;
          break;
        case ThemeName.Shadowbringers:
          themeContext.theme = themes.shadowbringers;
          break;
        default:
          themeContext.theme = themes.normal;
          break;
      }
    },
    [themeContext.theme],
  );

  return (
    <MainContainer
      background={themeContext.theme.background}
      color={themeContext.theme.color}
    >
      <Form inverted={themeContext.theme.background !== 'white'}>
        <Form.Group inline>
          <label>テーマ</label>
          <Form.Radio
            label="ノーマル"
            value={initThemeName}
            checked={initThemeName === ThemeName.Normal}
            onChange={() => handleThemeChange(ThemeName.Normal)}
          />
          <Form.Radio
            label="漆黒のヴィランズ"
            value={ThemeName.Shadowbringers}
            checked={initThemeName === ThemeName.Shadowbringers}
            onChange={() => handleThemeChange(ThemeName.Shadowbringers)}
          />
        </Form.Group>
      </Form>

      <Container text textAlign="center">
        <Header as="h1" data-test="charactername">
          <ThemeWithP title={themeContext.theme.titleColor}>
            {characterName}
          </ThemeWithP>
        </Header>

        <Header as="h3" data-test="username">
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
            onClick={() => {
              themeContext.theme = themes.normal; // テーマは引き継がない
              handleClickFormNew(args);
            }}
          >
            <Icon name="long arrow alternate left"></Icon>
            入力画面へ
          </Button>
        </Segment>
        <Segment textAlign="right" basic style={{ border: 0 }}>
          <Deliver {...args} theme={themeContext.theme} />
        </Segment>
      </Segment.Group>
    </MainContainer>
  );
};

export default withRouter(Preview);
