/* eslint-disable import/no-extraneous-dependencies */
import React, { MouseEvent } from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Radios, Form, Fieldset, Button, Input } from '../src';

const stories = storiesOf('Radios', module);

stories
  .addDecorator(centered)
  .add('Standard', () => (
    <Fieldset>
      <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
      <Radios
        name="example"
        hint="This includes changing your last name or spelling your name differently."
      >
        <Radios.Radio id="example-1" value="yes">
          Yes
        </Radios.Radio>
        <Radios.Radio id="example-2" value="no" checked>
          No
        </Radios.Radio>
      </Radios>
    </Fieldset>
  ))
  .add('Inline', () => (
    <Fieldset>
      <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
      <Radios
        name="example"
        inline
        hint="This includes changing your last name or spelling your name differently."
      >
        <Radios.Radio id="example-1" value="yes">
          Yes
        </Radios.Radio>
        <Radios.Radio id="example-2" value="no" checked>
          No
        </Radios.Radio>
      </Radios>
    </Fieldset>
  ))
  .add('Disabled', () => (
    <Fieldset>
      <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
      <Radios
        name="example"
        hint="This includes changing your last name or spelling your name differently."
      >
        <Radios.Radio disabled id="example-1" value="yes">
          Yes
        </Radios.Radio>
        <Radios.Radio disabled id="example-2" value="no">
          No
        </Radios.Radio>
      </Radios>
    </Fieldset>
  ))
  .add('With a divider', () => (
    <Fieldset>
      <Fieldset.Legend>How do you want to sign in?</Fieldset.Legend>
      <Radios name="example" id="example-divider">
        <Radios.Radio value="government-gateway">Use Government Gateway</Radios.Radio>
        <Radios.Radio value="nhsuk-login">Use NHS.UK login</Radios.Radio>
        <Radios.Divider>or</Radios.Divider>
        <Radios.Radio value="create-account">Create an account</Radios.Radio>
      </Radios>
    </Fieldset>
  ))
  .add('With hint on items', () => (
    <Fieldset>
      <Fieldset.Legend>How do you want to sign in?</Fieldset.Legend>
      <Radios name="example" id="example-divider">
        <Radios.Radio
          value="government-gateway"
          hint="You&#39;ll have a user ID if you've registered for self-assessment or filed a tax return online before."
        >
          Use Government Gateway
        </Radios.Radio>
        <Radios.Radio
          value="nhsuk-login"
          hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
        >
          Use NHS.UK login
        </Radios.Radio>
      </Radios>
    </Fieldset>
  ))
  .add('Without Fieldset', () => (
    <Radios name="colours" id="colours">
      <Radios.Radio value="red">Red</Radios.Radio>
      <Radios.Radio value="green">Green</Radios.Radio>
      <Radios.Radio value="blue">Blue</Radios.Radio>
    </Radios>
  ))
  .add('With Error (Boolean)', () => {
    const [error, setError] = React.useState<boolean>(true);
    return (
      <>
        <Fieldset>
          <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
          <Radios
            name="example"
            error={error}
            hint="This includes changing your last name or spelling your name differently."
          >
            <Radios.Radio id="example-1" value="yes">
              Yes
            </Radios.Radio>
            <Radios.Radio id="example-2" value="no" checked>
              No
            </Radios.Radio>
          </Radios>
        </Fieldset>
        <Button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setError(!error);
          }}
        >
          Toggle Error
        </Button>
      </>
    );
  })
  .add('With Error (String)', () => {
    const [error, setError] = React.useState('Please select an option');
    return (
      <>
        <Fieldset>
          <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
          <Radios
            name="example"
            error={error}
            hint="This includes changing your last name or spelling your name differently."
          >
            <Radios.Radio id="example-1" value="yes">
              Yes
            </Radios.Radio>
            <Radios.Radio id="example-2" value="no" checked>
              No
            </Radios.Radio>
          </Radios>
        </Fieldset>
        <Input value={error} onChange={e => setError(e.currentTarget.value)} />
      </>
    );
  });
