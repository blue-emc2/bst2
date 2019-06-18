import React, { FC } from 'react';
import { Grid, Form, Input } from 'semantic-ui-react';
import InputImage from './InputImage';
import { TextPosition } from '../../types/LayoutProps';

export enum FillTypeEnum {
  FILL = 'fill',
  SEPARATE = 'separate',
}

export enum InputTypeEnum {
  Text = 'Text',
  Image = 'Image',
}

export interface BoxProps {
  name: string;
  type: TextPosition;
  left?: InputTypeEnum;
  right?: InputTypeEnum;
}

export interface InputProp {
  name: string;
  type: TextPosition;
}

const InputText: FC<InputProp> = ({ name }) => (
  <Form.Field control={Input} name={name} data-cy={name} />
);

const Box: FC<BoxProps> = ({ ...args }) => {
  const { name, type, left, right } = args;

  return (
    <>
      {type === TextPosition.CENTER ? (
        <Grid.Column
          centered="true"
          columns={1}
          data-position={type}
          id={`column-${name}`}
        >
          <InputText {...args} />
        </Grid.Column>
      ) : (
        <Grid columns={2} data-position={type} id={`column-${name}`}>
          {left === InputTypeEnum.Text ? (
            <>
              <Grid.Column centered="true" data-left={InputTypeEnum.Text}>
                <InputText {...args} />
              </Grid.Column>
              <Grid.Column centered="true" data-right={InputTypeEnum.Image}>
                <InputImage {...args} />
              </Grid.Column>
            </>
          ) : null}
          {right === InputTypeEnum.Text ? (
            <>
              <Grid.Column centered="true" data-left={InputTypeEnum.Image}>
                <InputImage {...args} />
              </Grid.Column>
              <Grid.Column centered="true" data-right={InputTypeEnum.Text}>
                <InputText {...args} />
              </Grid.Column>
            </>
          ) : null}
        </Grid>
      )}
    </>
  );
};

export default Box;
