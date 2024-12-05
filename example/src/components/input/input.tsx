import { Input } from "@ds.e/react";
import React from "react";

function InputExample() {
  const [value, setValue] = React.useState({
    largePrimaryDefault: "",
    largePrimaryDefault1: "",
    largePrimaryDefault2: "",
    largePrimaryDefault3: "",
    largePrimarySuccess: "",
    largePrimaryWarning: "",
    largePrimaryInfo: "",
    largePrimaryError: "",
    largeSecondaryDefault: "",
    largeSecondaryDefault1: "",
    largeSecondaryDefault2: "",
    largeSecondaryDefault3: "",
    largeSecondarySuccess: "",
    largeSecondaryWarning: "",
    largeSecondaryInfo: "",
    largeSecondaryError: "",
    mediumPrimaryDefault: "",
    mediumPrimaryDefault1: "",
    mediumPrimaryDefault2: "",
    mediumPrimaryDefault3: "",
    mediumPrimarySuccess: "",
    mediumPrimaryWarning: "",
    mediumPrimaryInfo: "",
    mediumPrimaryError: "",
    mediumSecondaryDefault: "",
    mediumSecondaryDefault1: "",
    mediumSecondaryDefault2: "",
    mediumSecondaryDefault3: "",
    mediumSecondarySuccess: "",
    mediumSecondaryWarning: "",
    mediumSecondaryInfo: "",
    mediumSecondaryError: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: key, value } = e.target;

    setValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <h3 className="h3 semibold text-gray-900">Inputs</h3>

      <div className="mt-14">
        {/* <ul className="flex gap-16 justify-end mb-4"> */}
        <ul className="grid-col-2 mb-10 justify-items-center justify-self-end w-11_12">
          <li className="">Large</li>
          <li className="">Medium</li>
        </ul>

        <div className="flex gap-10 justify-between">
          <div className="flex flex-col gap-23 mt-14">
            <div className="flex flex-col gap-25">
              <div className="my-2">Default</div>
              <div className="my-2">Hover</div>
              <div className="my-2">Focus</div>
              <div className="my-2">Disabled</div>
              <div className="my-2">success</div>
              <div className="my-2">info</div>
              <div className="my-2">warning</div>
              <div className="my-2">error</div>
            </div>
          </div>

          <div className="grid-col-4 row-gap-7 border-primary-md border-dashed border-rounded p-2 w-full">
            <div className="flex flex-col gap-8 align-start py-4">
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largePrimaryDefault}
                  name="largePrimaryDefault"
                  className="input-large-primary-default"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largePrimaryDefault1}
                  name="largePrimaryDefault1"
                  className="input-large-primary-default"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largePrimaryDefault2}
                  name="largePrimaryDefault2"
                  className="input-large-primary-default"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largePrimaryDefault3}
                  name="largePrimaryDefault3"
                  className="input-large-primary-default"
                  disabled={true}
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largePrimarySuccess}
                  name="largePrimarySuccess"
                  successText="Success Text"
                  success={true}
                  className="input-large-primary-success"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largePrimaryInfo}
                  name="largePrimaryInfo"
                  className="input-large-primary-info"
                  info={true}
                  infoText="Info Text"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largePrimaryWarning}
                  name="largePrimaryWarning"
                  warningText="Warning Text"
                  warning={true}
                  className="input-large-primary-warning"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largePrimaryError}
                  name="largePrimaryError"
                  errorText="Error Text"
                  className="input-large-primary-error"
                  error={true}
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 align-start py-4">
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largeSecondaryDefault}
                  name="largeSecondaryDefault"
                  className="input-large-secondary-default"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largeSecondaryDefault1}
                  name="largeSecondaryDefault1"
                  className="input-large-secondary-default"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largeSecondaryDefault2}
                  name="largeSecondaryDefault2"
                  className="input-large-secondary-default"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largeSecondaryDefault3}
                  name="largeSecondaryDefault3"
                  className="input-large-secondary-default"
                  disabled={true}
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largeSecondarySuccess}
                  name="largeSecondarySuccess"
                  successText="Success Text"
                  success={true}
                  className="input-large-secondary-success"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largeSecondaryInfo}
                  name="largeSecondaryInfo"
                  className="input-large-secondary-info"
                  info={true}
                  infoText="Info Text"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largeSecondaryWarning}
                  name="largeSecondaryWarning"
                  warningText="Warning Text"
                  warning={true}
                  className="input-large-secondary-warning"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.largeSecondaryError}
                  name="largeSecondaryError"
                  errorText="Error Text"
                  className="input-large-secondary-error"
                  error={true}
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 align-end justify-between py-4">
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumPrimaryDefault}
                  name="mediumPrimaryDefault"
                  className="input-medium-primary-default"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumPrimaryDefault1}
                  name="mediumPrimaryDefault1"
                  className="input-medium-primary-default"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumPrimaryDefault2}
                  name="mediumPrimaryDefault2"
                  className="input-medium-primary-default"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumPrimaryDefault3}
                  name="mediumPrimaryDefault3"
                  className="input-medium-primary-default"
                  disabled={true}
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumPrimarySuccess}
                  name="mediumPrimarySuccess"
                  successText="Success Text"
                  success={true}
                  className="input-medium-primary-success"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumPrimaryInfo}
                  name="mediumPrimaryInfo"
                  className="input-medium-primary-info"
                  info={true}
                  infoText="Info Text"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumPrimaryWarning}
                  name="mediumPrimaryWarning"
                  warningText="Warning Text"
                  warning={true}
                  className="input-medium-primary-warning"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumPrimaryError}
                  name="mediumPrimaryError"
                  errorText="Error Text"
                  className="input-medium-primary-error"
                  error={true}
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 align-end justify-between py-4">
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumSecondaryDefault}
                  name="mediumSecondaryDefault"
                  className="input-medium-secondary-default"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumSecondaryDefault1}
                  name="mediumSecondaryDefault1"
                  className="input-medium-secondary-default"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumSecondaryDefault2}
                  name="mediumSecondaryDefault2"
                  className="input-medium-secondary-default"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumSecondaryDefault3}
                  name="mediumSecondaryDefault3"
                  className="input-medium-secondary-default"
                  disabled={true}
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumSecondarySuccess}
                  name="mediumSecondarySuccess"
                  successText="Success Text"
                  success={true}
                  className="input-medium-secondary-success"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumSecondaryInfo}
                  name="mediumSecondaryInfo"
                  className="input-medium-secondary-info"
                  info={true}
                  infoText="Info Text"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumSecondaryWarning}
                  name="mediumSecondaryWarning"
                  warningText="Warning Text"
                  warning={true}
                  className="input-medium-secondary-warning"
                />
              </div>
              <div>
                <Input
                  label="Label"
                  placeholder="Placeholder"
                  helperText="Helper Text"
                  type="text"
                  onChange={onChange}
                  onFocus={() => {}}
                  onBlur={() => {}}
                  value={value.mediumSecondaryError}
                  name="mediumSecondaryError"
                  errorText="Error Text"
                  className="input-medium-secondary-error"
                  error={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputExample;
