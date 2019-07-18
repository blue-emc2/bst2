import React, { FC, useCallback } from 'react';
import { Grid, Form, TextArea } from 'semantic-ui-react';
import InputImage from './InputImage';
import { TextPosition } from '../../types/LayoutProps';

export interface BoxProps {
  name: string;
  type: TextPosition;
  body: string;
  onBodyChange: (body: string) => void;
}

const InputText: FC<BoxProps> = ({ ...props }) => {
  const { name, body, onBodyChange } = props;
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onBodyChange(event.target.value);
    },
    [onBodyChange],
  );

  return (
    <Form.Field
      required
      control={TextArea}
      name={name}
      data-cy={name}
      label="本文"
      value={body}
      rows={8}
      style={{ resize: 'vertical' }}
      maxLength={200}
      onChange={handleChange}
    />
  );
};

const Box: FC<BoxProps> = ({ ...props }) => {
  const { name, type } = props;

  return (
    <>
      {type === TextPosition.CENTER ? (
        <Grid.Column
          centered="true"
          columns={1}
          data-position={type}
          id={`column-${name}`}
        >
          <InputText {...props} />
        </Grid.Column>
      ) : (
        <Grid columns={2} data-position={type} id={`column-${name}`}>
          {type === TextPosition.LEFT ? (
            <>
              <Grid.Column centered="true">
                <InputText {...props} />
              </Grid.Column>
              <Grid.Column centered="true">
                <InputImage {...props} />
              </Grid.Column>
            </>
          ) : null}
          {type === TextPosition.RIGHT ? (
            <>
              <Grid.Column centered="true">
                <InputImage {...props} />
              </Grid.Column>
              <Grid.Column centered="true">
                <InputText {...props} />
              </Grid.Column>
            </>
          ) : null}
        </Grid>
      )}
    </>
  );
};

export default Box;
