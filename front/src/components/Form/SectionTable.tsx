import React, { FC, useState, SyntheticEvent } from 'react';
import {
  Grid,
  GridRow,
  GridColumn,
  Menu,
  SemanticICONS,
  Button,
  Icon,
  Form,
  Image,
  Segment,
} from 'semantic-ui-react';

interface RowEventButtonProps {
  iconName: SemanticICONS;
  onClickHandler: () => void;
}

const RowEventButton: FC<RowEventButtonProps> = ({
  iconName,
  onClickHandler = () => {},
}) => (
  <Button icon onClick={onClickHandler}>
    <Icon name={iconName} />
  </Button>
);

const InputText = (props: { index: number }) => {
  const { index } = props;

  return (
    <GridColumn width={16}>
      <Form.Field>
        <input name={`text${index}`} />
      </Form.Field>
    </GridColumn>
  );
};

const TextAndImage = () => (
  <>
    <Grid.Column width={8}>
      <Form.Field>
        <input />
      </Form.Field>
    </Grid.Column>
    <Grid.Column width={8}>
      <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
    </Grid.Column>
  </>
);

const ImageAndText = () => (
  <>
    <Grid.Column width={8}>
      <Form.Field>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      </Form.Field>
    </Grid.Column>
    <Grid.Column width={8}>
      <input />
    </Grid.Column>
  </>
);

interface RowProps {
  activeItem: string;
  index: number;
}

const InputlayoutRow = ({ activeItem, index }: RowProps) => (
  <Grid.Row>
    {activeItem === 'text_only' ? <InputText index={index} /> : null}
    {activeItem === 'left_text' ? <TextAndImage /> : null}
    {activeItem === 'right_text' ? <ImageAndText /> : null}
  </Grid.Row>
);

interface MenuRowProps {
  handleItemClick: (e: SyntheticEvent, activeItem: string) => void;
  activeItem: string;
}

const InputLayoutChangeMenuRow: FC<MenuRowProps> = ({
  activeItem,
  handleItemClick,
}) => {
  return (
    <GridRow>
      <GridColumn>
        <Menu>
          <Menu.Item header>レイアウトを選択</Menu.Item>
          <Menu.Item
            name="text_only"
            active={activeItem === 'text_only'}
            onClick={(e: SyntheticEvent) => handleItemClick(e, 'text_only')}
          >
            文章のみ
          </Menu.Item>
          <Menu.Item
            name="left_text"
            active={activeItem === 'left_text'}
            onClick={(e: SyntheticEvent) => handleItemClick(e, 'left_text')}
          >
            文章と画像
          </Menu.Item>
          <Menu.Item
            name="right_text"
            active={activeItem === 'right_text'}
            onClick={(e: SyntheticEvent) => handleItemClick(e, 'right_text')}
          >
            画像と文章
          </Menu.Item>
        </Menu>
      </GridColumn>
    </GridRow>
  );
};

interface SectionBarProps {
  index: number;
}
const SectionBar: FC<SectionBarProps> = ({ index }) => {
  const [activeItem, setActiveItem] = useState('text_only');

  const handleItemClick = (e: SyntheticEvent, item: string) => {
    e.preventDefault();
    setActiveItem(item);
  };

  return (
    <Grid divided>
      <InputLayoutChangeMenuRow
        activeItem={activeItem}
        handleItemClick={handleItemClick}
      />
      <InputlayoutRow activeItem={activeItem} index={index} />
    </Grid>
  );
};

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
    <>
      <Grid celled="internally" columns={2}>
        {Array.from(Array(size).keys()).map((i: number) => (
          <SectionBar key={i} index={i} />
        ))}
      </Grid>
      <Segment textAlign="right">
        <RowEventButton iconName="plus circle" onClickHandler={increment} />
        <RowEventButton iconName="minus circle" onClickHandler={decrement} />
      </Segment>
    </>
  );
};

export default SectionTable;
