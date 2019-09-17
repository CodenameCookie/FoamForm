import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "material-ui/TextField";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import asyncValidate from "./asyncValidate";
import validate from "./validate";
import Divider from "material-ui/Divider";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const renderRadioGroup2 = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
    style={{ display: "flex", flexDirection: "row" }}
  />
);

const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h3>Select type of foam</h3>

      <div>
        <Field name="foam" component={renderRadioGroup}>
          <RadioButton value="reflex" label="Salmon Reflex" price="1" />
          <RadioButton value="memory" label="Memory Foam" price="2" />
          <RadioButton value="reflex2" label="Salmon Reflex2" price="3" />
          <RadioButton value="memory3" label="Memory Foam3" price="4" />
        </Field>
      </div>
      <Divider />
      <h3>Select unit of measurement</h3>
      <div>
        <Field name="unit" component={renderRadioGroup2}>
          <RadioButton
            value="inches"
            label="Inches"
            price="2"
            style={{ display: "inline-block" }}
          />
          <RadioButton
            value="centimetres"
            label="Centremetres"
            price="2"
            style={{ display: "inline-block" }}
          />
          <RadioButton
            value="inches2"
            label="Inches2"
            price="2"
            style={{ display: "inline-block" }}
          />
          <RadioButton
            value="centimetres2"
            label="Centremetres2"
            price="2"
            style={{ display: "inline-block" }}
          />
        </Field>
      </div>
      <Divider />
      <h3>Dimensions of foam needed</h3>
      <div>
        <Field
          name="width"
          component={renderTextField}
          label="Width"
          type="number"
        />
      </div>
      <div>
        <Field
          name="length"
          component={renderTextField}
          label="Length"
          type="number"
        />
      </div>
      <div>
        <Field
          name="depth"
          component={renderTextField}
          label="Depth"
          type="number"
        />
      </div>
      <Divider />
      <h3>Submit</h3>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
        <Divider />
        <Divider />
      </div>
    </form>
  );
};

export default reduxForm({
  form: "MaterialUiForm", // a unique identifier for this form
  validate,
  asyncValidate
})(MaterialUiForm);

// https://codesandbox.io/s/W6YnZm1po - ORIGINAL EXAMPLE
// https://github.com/mui-org/material-ui/issues/2793 - radio button styling
// https://www.muicss.com/docs/v1/react/dividers - divider example
// https://material-ui.com/getting-started/templates/ - Templates for full site
// https://www.muicss.com/ - Lightweight learning
// https://bit.dev/ Premium collab componants
// https://material-ui.com/getting-started/supported-components/ - Material UI support compnants
// https://redux-form.com/8.2.2/ - Redux Form
