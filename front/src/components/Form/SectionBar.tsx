import React, { FC, useState, SyntheticEvent } from 'react';
import { Grid, Menu, GridRow, GridColumn } from 'semantic-ui-react';
import { TextPosition } from '../../types/LayoutProps';
import Box from './Box';

const InputlayoutRow = ({ ...props }) => {
  const { activeItem, name, body, onBodyChange } = props;

  return (
    <Grid.Row>
      {activeItem === TextPosition.CENTER ? (
        <Box
          name={name}
          body={body}
          type={TextPosition.CENTER}
          onBodyChange={onBodyChange}
        />
      ) : null}
      {activeItem === TextPosition.LEFT ? (
        <Box
          name={name}
          body={body}
          type={TextPosition.LEFT}
          onBodyChange={onBodyChange}
        />
      ) : null}
      {activeItem === TextPosition.RIGHT ? (
        <Box
          name={name}
          body={body}
          type={TextPosition.RIGHT}
          onBodyChange={onBodyChange}
        />
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

// TODO: 消したい
interface SectionBarProps {
  name: string;
  imageUrl?: string;
  textPosition: TextPosition;
}

const SectionBar: FC<SectionBarProps> = ({ ...props }) => {
  const { textPosition } = props;

  const [activeItem, setActiveItem] = useState(
    textPosition || TextPosition.CENTER,
  );
  const [storeBody, setStoreBody] = useState('');

  const handleMenuChange = (e: SyntheticEvent, type: TextPosition) => {
    e.preventDefault();
    setActiveItem(type);
  };

  const handleBodyChange = (newBody: string) => {
    setStoreBody(newBody);
  };

  const menuItems = [
    { name: '文章のみ', type: TextPosition.CENTER },
    { name: '文章と画像', type: TextPosition.LEFT },
    { name: '画像と文章', type: TextPosition.RIGHT },
  ].map((value, index) => (
    <Menu.Item
      key={index.toString()}
      name={value.type}
      active={activeItem === value.type}
      data-cy={value.type}
      onClick={(e: SyntheticEvent) => handleMenuChange(e, value.type)}
    >
      {value.name}
    </Menu.Item>
  ));

  return (
    <Grid divided>
      <InputLayoutChangeMenu>{menuItems}</InputLayoutChangeMenu>
      <InputlayoutRow
        activeItem={activeItem}
        body={storeBody}
        onBodyChange={handleBodyChange}
        {...props}
      />
    </Grid>
  );
};

export default SectionBar;
