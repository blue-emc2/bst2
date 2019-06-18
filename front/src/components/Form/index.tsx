/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, FormEvent } from 'react';
import { Form, Container, Button } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import SectionTable from './SectionTable';
import { TextPosition, Section, LayoutProps } from '../../types/LayoutProps';

const characterNameFromInput = () => {
  const characterNameEle = document.querySelector<HTMLInputElement>(
    'input[name="characterName"]',
  );
  const characterName = characterNameEle === null ? '' : characterNameEle.value;

  return characterName;
};

const userNameFromInput = () => {
  const userNameEle = document.querySelector<HTMLFormElement>(
    'input[name="userName"]',
  );
  const userName = userNameEle === null ? '' : userNameEle.value;

  return userName;
};

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
      characterName: characterNameFromInput(),
      userName: userNameFromInput(),
      sections: [],
    };

    const sectionIndexes = Array.from(Array(10), (_, i) => i + 1);
    // 存在するセクションを抜き出す
    const sectionArray = sectionIndexes.map(value =>
      document.getElementById(`column-section${value}`),
    );

    const sections: Section[] = [];
    // for inはダメで、旧来のやりかたはOKなんだ...
    for (let i = 0; i < sectionArray.length; i += 1) {
      const section = sectionArray[i];
      if (section !== null) {
        const positionType = section.dataset.position;
        const position = TextPosition.CENTER;
        let text = '';

        if (positionType === TextPosition.CENTER) {
          const textEle = section.querySelector(
            `input[name="section${i + 1}"]`, // sectionは1から始まる
          ) as HTMLInputElement;
          text = textEle !== null ? textEle.value : '';
        } else {
          throw new Error(`予期しないtypeです ->${positionType}`);
        }

        const params: Section = {
          textPosition: position,
          text,
        };
        sections.push(params);
      }
    }

    layout.sections = sections;

    onPreview(layout);
    history.push('/preview');
  };

  return (
    <Container style={{ marginTop: '7em' }}>
      <Form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <Form.Input
          required
          name="characterName"
          label="キャラクター名"
          placeholder="キャラクター名"
        />
        <Form.Input name="userName" label="作者" placeholder="作者" />
        <SectionTable />
        <PreviewButton />
      </Form>
    </Container>
  );
};

export default withRouter(StoryForm);
