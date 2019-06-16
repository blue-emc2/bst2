import React, { FC } from 'react';
import { Grid, Form, Input } from 'semantic-ui-react';

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
  type: FillTypeEnum;
  left?: InputTypeEnum;
  right?: InputTypeEnum;
}

interface InputProp {
  name: string;
}

const InputText: FC<InputProp> = ({ name }) => (
  <Form.Field control={Input} name={name} data-cy={name} />
);

const InputImage: FC<InputProp> = ({ name }) => (
  <Form.Field control={Input} type="file" name={name} data-cy={name} />
);

const Box: FC<BoxProps> = ({ name, type, left, right }) => {
  return (
    <>
      {type === FillTypeEnum.FILL ? (
        <Grid.Column centered="true" columns={1}>
          <InputText name={name} />
        </Grid.Column>
      ) : (
        <Grid columns={2}>
          {left === InputTypeEnum.Text ? (
            <>
              <Grid.Column centered="true">
                <InputText name={name} />
              </Grid.Column>
              <Grid.Column centered="true">
                <InputImage name={name} />
              </Grid.Column>
            </>
          ) : null}
          {right === InputTypeEnum.Text ? (
            <>
              <Grid.Column centered="true">
                <InputImage name={name} />
              </Grid.Column>
              <Grid.Column centered="true">
                <InputText name={name} />
              </Grid.Column>
            </>
          ) : null}
        </Grid>
      )}
    </>
  );
};

export default Box;
