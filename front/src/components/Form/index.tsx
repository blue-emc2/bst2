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
        let position = TextPosition.CENTER;
        let text = '';
        const selector = `input[name="section${i + 1}"]`; // sectionは1から始まる
        let image = null;
        let imageUrl = '';

        if (positionType === TextPosition.CENTER) {
          const textEle = section.querySelector(selector) as HTMLInputElement;
          text = textEle !== null ? textEle.value : '';
        } else if (positionType === TextPosition.LEFT) {
          position = TextPosition.LEFT;
          const elemetns = section.querySelectorAll<HTMLInputElement>(selector);
          text = elemetns[0].value;
          const { files } = elemetns[1];
          if (files !== null && files[0] !== null) {
            // eslint-disable-next-line prefer-destructuring
            image = files[0];
            imageUrl = URL.createObjectURL(image);
          }
        } else if (positionType === TextPosition.RIGHT) {
          position = TextPosition.RIGHT;
          const elemetns = section.querySelectorAll<HTMLInputElement>(selector);
          text = elemetns[1].value;
          const { files } = elemetns[0];
          if (files !== null && files[0] !== null) {
            // eslint-disable-next-line prefer-destructuring
            image = files[0];
            imageUrl = URL.createObjectURL(image);
          }
        } else {
          throw new Error(`予期しないtypeです ->${positionType}`);
        }

        const params: Section = {
          textPosition: position,
          text,
          image,
          imageUrl,
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
