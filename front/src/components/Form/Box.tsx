import React, { FC } from 'react';
import { Grid, Form, Input } from 'semantic-ui-react';
import InputImage from './InputImage';
import { TextPosition } from '../../types/LayoutProps';

export interface BoxProps {
  name: string;
  type: TextPosition;
}

const InputText: FC<BoxProps> = ({ name }) => (
  <Form.Field control={Input} name={name} data-cy={name} />
);

const Box: FC<BoxProps> = ({ ...args }) => {
  const { name, type } = args;

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
          {type === TextPosition.LEFT ? (
            <>
              <Grid.Column centered="true">
                <InputText {...args} />
              </Grid.Column>
              <Grid.Column centered="true">
                <InputImage {...args} />
              </Grid.Column>
            </>
          ) : null}
          {type === TextPosition.RIGHT ? (
            <>
              <Grid.Column centered="true">
                <InputImage {...args} />
              </Grid.Column>
              <Grid.Column centered="true">
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
