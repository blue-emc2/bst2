import React, { FC, useState, SyntheticEvent } from 'react';
import { Grid, Menu, GridRow, GridColumn } from 'semantic-ui-react';
import { TextPosition } from '../../types/LayoutProps';
import Box from './Box';

const InputlayoutRow = ({ ...props }) => {
  const { activeItem, name, body } = props;

  return (
    <Grid.Row>
      {activeItem === 'text_only' ? (
        <Box name={name} body={body} type={TextPosition.CENTER} />
      ) : null}
      {activeItem === 'left_text' ? (
        <Box name={name} body={body} type={TextPosition.LEFT} />
      ) : null}
      {activeItem === 'right_text' ? (
        <Box name={name} body={body} type={TextPosition.RIGHT} />
      ) : null}
    </Grid.Row>
  );
};

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
  body?: string;
}

const SectionBar: FC<SectionBarProps> = ({ ...props }) => {
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
      <InputlayoutRow activeItem={activeItem} {...props} />
    </Grid>
  );
};

export default SectionBar;
