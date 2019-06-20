import React, {
  FC,
  useState,
  SyntheticEvent,
  useReducer,
  Reducer,
} from 'react';
import {
  Grid,
  GridRow,
  GridColumn,
  Menu,
  Button,
  Icon,
  Segment,
} from 'semantic-ui-react';
import Box from './Box';
import { TextPosition } from '../../types/LayoutProps';

interface RowProps {
  activeItem: string;
  name: string;
}

const InputlayoutRow = ({ activeItem, name }: RowProps) => (
  <Grid.Row>
    {activeItem === 'text_only' ? (
      <Box name={name} type={TextPosition.CENTER} />
    ) : null}
    {activeItem === 'left_text' ? (
      <Box name={name} type={TextPosition.LEFT} />
    ) : null}
    {activeItem === 'right_text' ? (
      <Box name={name} type={TextPosition.RIGHT} />
    ) : null}
  </Grid.Row>
);

const InputLayoutChangeMenu: FC<{}> = ({ children }) => {
  return (
    <GridRow>
      <GridColumn>
        <Menu>
          <Menu.Item header>レイアウトを選択</Menu.Item>
          {children}
        </Menu>
      </GridColumn>
    </GridRow>
  );
};

interface SectionBarProps {
  name: string;
}
const SectionBar: FC<SectionBarProps> = ({ name }) => {
  const [activeItem, setActiveItem] = useState('text_only');

  const handleMenuChange = (e: SyntheticEvent, type: string) => {
    e.preventDefault();
    setActiveItem(type);
  };

  const menuItems = [
    { body: '文章のみ', type: 'text_only' },
    { body: '文章と画像', type: 'left_text' },
    { body: '画像と文章', type: 'right_text' },
  ].map((value, index) => (
    <Menu.Item
      key={index.toString()}
      name={value.type}
      active={activeItem === value.type}
      data-cy={value.type}
      onClick={(e: SyntheticEvent) => handleMenuChange(e, value.type)}
    >
      {value.body}
    </Menu.Item>
  ));

  return (
    <Grid divided>
      <InputLayoutChangeMenu>{menuItems}</InputLayoutChangeMenu>
      <InputlayoutRow activeItem={activeItem} name={name} />
    </Grid>
  );
};

// ここのstateは1つ前のイベントのオブジェクト
const reducer: Reducer<StateType, ActionType> = (state, action) => {
  switch (action.type) {
    case 'increment': {
      const updatedItems = [...state.items];
      const newId = state.items.length + 1;
      updatedItems.push({
        id: newId,
        name: `section${state.items.length}`,
      });

      return { ...state, items: updatedItems };
    }
    case 'decrement': {
      const updatedItems = [...state.items].filter(i => i.id !== action.barId);

      return { ...state, items: updatedItems };
    }
    default: {
      return state;
    }
  }
};

type ActionType =
  | { type: 'reset' }
  | { type: 'decrement'; barId: number }
  | { type: 'increment' };

interface Item {
  id: number;
  name: string;
}
interface StateType {
  items: Item[];
}

const SectionTable: FC<{}> = () => {
  const initialState = {
    items: [
      {
        id: 1,
        name: 'section1',
      },
    ],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Grid celled="internally" columns={2}>
        {state.items.map((item: { id: number }) => (
          <Segment key={item.id.toString()}>
            <SectionBar name={`section${item.id}`} />

            {/* TODO: 消すときにホワンとさせたいかも */}
            <Button
              icon
              onClick={(e: SyntheticEvent) => {
                e.preventDefault();
                dispatch({ type: 'decrement', barId: item.id });
              }}
            >
              <Icon name="minus circle" />
            </Button>
          </Segment>
        ))}
      </Grid>
      <Segment textAlign="right">
        <Button
          icon
          onClick={(e: SyntheticEvent) => {
            e.preventDefault();
            dispatch({ type: 'increment' });
          }}
        >
          <Icon name="plus circle" />
        </Button>
      </Segment>
    </>
  );
};

export default SectionTable;
