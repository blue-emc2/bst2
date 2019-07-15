import React, { FC, useState } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Container, Segment, Header, List, Grid } from 'semantic-ui-react';
import { ThemeProvider } from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import StoryForm from './components/Form';
import Preview from './components/Preview';
import Story from './components/Story';
import { LayoutProps, TextPosition, Section } from './types/LayoutProps';
import { GlobalStyle, themes } from './theme/GrobalStyles';

// ---------------------------------------
// 共通interface定義
// 本当は型定義ファイルが良いのだろうが
// 作るのがめんどくさそうなのでここに定義する
export enum LayoutType {
  Text = 'Text',
  LeftText = 'LeftText',
  RightText = 'RightText',
}

export interface LayoutProps extends SectionListProp {
  characterName: string;
  userName: string;
}

export interface SectionListProp {
  sections: Section[];
}

// ---------------------------------------

const theme = {
  theme: themes.normal,
};

// ---------------------------------------

const App: FC<{}> = () => {
  const initialValue = {
    characterName: '',
    userName: '',
    sections: [
      {
        textPosition: TextPosition.CENTER,
        body: '',
      },
    ],
  };
  const [layout, setLayout] = useState<LayoutProps>(initialValue);

  const handleOnSubmit = ({ ...args }) => {
    const { characterName, userName, sections } = args;
    setLayout({
      characterName,
      userName,
      sections,
    });
  };

  return (
    <div style={{ background: '#f9fafb' }}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <main role="main">
          <Switch>
            <Route
              path="/new"
              render={() => <StoryForm onPreview={handleOnSubmit} />}
            />
            <Route path="/preview" render={() => <Preview {...layout} />} />
            <Route path="/story/:id" component={Story} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
            <Redirect to="/" />;
          </Switch>
        </main>
      </ThemeProvider>

      <footer>
        <Segment vertical style={{ padding: '5em 0em' }}>
          <Container textAlign="center">
            <Grid divided stackable>
              <Grid.Column width={3}>
                <Header as="h4" content="About" />
                <List link>
                  <List.Item>
                    <Link to="/about">bstについて</Link>
                  </List.Item>
                  <List.Item as="a">作者</List.Item>
                  <List.Item as="a">問い合わせ</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={10}>
                <p>
                  記載されている会社名・製品名・システム名などは、各社の商標、または登録商標です。
                </p>
                <p>
                  Copyright (C) 2010 - 2019 SQUARE ENIX CO., LTD. All Rights
                  Reserved.
                </p>
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </footer>
    </div>
  );
};

export default App;
