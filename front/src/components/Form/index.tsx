/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  FC,
  FormEvent,
  SyntheticEvent,
  useState,
  useCallback,
} from 'react';
import { Form, Container, Button, Segment } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import SectionTable from './SectionTable';
import { TextPosition, Section, LayoutProps } from '../../types/LayoutProps';
import { MainContainer } from '../styled';

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
    <Segment basic textAlign="center">
      <Button primary type="submit" size="large">
        プレビュー
      </Button>
    </Segment>
  );
};

type FromProps = {
  onPreview: ({ characterName }: LayoutProps) => void;
} & RouteComponentProps;

const StoryForm: FC<FromProps> = ({ onPreview, ...props }) => {
  const { history, location } = props;

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
        const selector = `textarea[name="section${i + 1}"]`; // sectionは1から始まる
        const imageSelector = `input[name="section${i + 1}"]`;

        let position = TextPosition.CENTER;
        let body;
        let image;
        let imageUrl = '';

        // TODO else ifは共通化できる
        if (positionType === TextPosition.CENTER) {
          const textEle = section.querySelector(selector) as HTMLInputElement;
          body = textEle !== null ? textEle.value : '';
        } else if (positionType === TextPosition.LEFT) {
          position = TextPosition.LEFT;
          const textElement = section.querySelector<HTMLTextAreaElement>(
            selector,
          );
          body = textElement ? textElement.value : '';
          const file = section.querySelector<HTMLInputElement>(imageSelector);

          if (file && file.files && file.files.length > 0) {
            image = file.files[0];
            imageUrl = URL.createObjectURL(image);
          }
        } else if (positionType === TextPosition.RIGHT) {
          position = TextPosition.RIGHT;
          const textElement = section.querySelector<HTMLTextAreaElement>(
            selector,
          );
          body = textElement ? textElement.value : '';
          const file = section.querySelector<HTMLInputElement>(imageSelector);
          if (file && file.files && file.files.length > 0) {
            image = file.files[0];
            imageUrl = URL.createObjectURL(image);
          }
        } else {
          throw new Error(`予期しないtypeです ->${positionType}`);
        }

        const params: Section = {
          textPosition: position,
          body,
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

  // プレビューから戻って来た時に値がある想定
  const { state } = location;

  const [name, setName] = useState(state ? state.characterName : '');
  const handleCharacterNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [],
  );

  const [userName, setUserName] = useState(state ? state.userName : '');
  const handleUserNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(event.target.value);
    },
    [],
  );

  return (
    <MainContainer>
      {/* もしかしてFormいらない説？ */}
      <Form
        encType="multipart/form-data"
        onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <Segment basic>
          <Form.Input
            required
            name="characterName"
            label="キャラクター名"
            placeholder="キャラクター名"
            value={name}
            data-cy="inputCharacterName"
            width={12}
            onChange={handleCharacterNameChange}
          />
          <Form.Input
            name="userName"
            label="作者"
            placeholder="作者"
            value={userName}
            data-cy="inputUserName"
            width={12}
            onChange={handleUserNameChange}
          />
        </Segment>
        <Container fluid>
          <SectionTable sections={state ? state.sections : undefined} />
        </Container>
        <PreviewButton />
      </Form>
    </MainContainer>
  );
};

export default withRouter(StoryForm);
