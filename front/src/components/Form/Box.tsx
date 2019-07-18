import React, { FC, useCallback, FormEvent } from 'react';
import { Grid, Form, TextAreaProps } from 'semantic-ui-react';
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
    (event: FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => {
      event.preventDefault();
      onBodyChange(data.value as string);
    },
    [onBodyChange],
  );

  return (
    <Form.TextArea
      required
      name={name}
      data-cy={name}
      label="本文"
      value={body}
      rows={8}
      style={{ resize: 'vertical' }}
      maxLength={200}
      onInput={handleChange}
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
