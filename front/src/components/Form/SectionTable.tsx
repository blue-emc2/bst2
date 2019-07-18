import React, { FC, SyntheticEvent, useReducer, Reducer } from 'react';
import { Grid, Button, Icon, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import {
  SectionListProps,
  Section,
  TextPosition,
} from '../../types/LayoutProps';
import SectionBar from './SectionBar';

// ここのstateは1つ前のイベントのオブジェクト
const reducer: Reducer<StateType, ActionType> = (state, action) => {
  switch (action.type) {
    case 'increment': {
      const updatedItems = [...state.items];
      const newId = state.items.slice(-1)[0].id + 1;
      if (updatedItems.length < 10) {
        updatedItems.push({
          id: newId,
          name: `section${state.items.length}`,
          body: '',
          textPosition: TextPosition.CENTER,
        });
      }

      return { ...state, items: updatedItems };
    }
    case 'decrement': {
      let updatedItems = [...state.items].filter(i => i.id !== action.barId);

      if (updatedItems.length < 1) {
        updatedItems = state.items;
      }

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

// TODO: 消したい
interface Item {
  id: number;
  name: string;
  body: string;
  textPosition: TextPosition;
}
interface StateType {
  items: Item[];
}

const SectionSegment = styled(Segment)`
  width: 100%;
`;

const SectionTable: FC<SectionListProps> = ({ sections }) => {
  const setInitialState = (initSections: Section[]) => {
    let initialState;

    if (initSections) {
      const i = initSections.map((value, index) => ({
        id: index + 1,
        name: `section${index + 1}`,
        body: value.body,
        textPosition: value.textPosition,
      }));

      initialState = {
        items: i,
      };
    } else {
      initialState = {
        items: [
          {
            id: 1,
            name: 'section1',
            body: '',
            textPosition: TextPosition.CENTER,
          },
        ],
      };
    }

    return initialState;
  };

  const initialState = setInitialState(sections);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Grid celled="internally" columns={2}>
        {state.items.map(item => (
          <SectionSegment key={item.id} data-cy={`inputSection${item.id}`}>
            <SectionBar
              name={`section${item.id}`}
              textPosition={item.textPosition}
            />

            <Segment floated="right" basic>
              {/* TODO: 消すときにホワンとさせたいかも */}
              <Button
                icon
                size="large"
                onClick={(e: SyntheticEvent) => {
                  e.preventDefault();
                  dispatch({ type: 'decrement', barId: item.id });
                }}
                data-cy={`minusCircle${item.id}`}
              >
                <Icon name="minus circle" />
              </Button>
            </Segment>
          </SectionSegment>
        ))}
      </Grid>
      <Segment textAlign="right" basic>
        <Button
          icon
          size="large"
          onClick={(e: SyntheticEvent) => {
            e.preventDefault();
            dispatch({ type: 'increment' });
          }}
          data-cy="plusCircle"
        >
          <Icon name="plus circle" />
        </Button>
      </Segment>
    </>
  );
};

export default SectionTable;
