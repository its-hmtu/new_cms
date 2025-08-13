import { CloseOutlined } from "@ant-design/icons";
import { Input as AntInput, Form } from "antd";
import groupClassNames from "classnames";
import Label from "../Label";
import { generateRequiredRules, toCapitalize } from "@/utils/form/common";

export const Input = ({
  width = "100%",
  label,
  name,
  required = false,
  clearIconSize = 18,
  rules,
  initialValue,
  validateTrigger,
  validateDebounce,
  validateFirst = true,
  dependencies,
  restField,
  ...rest
}) => {
  return (
    <Form.Item
      validateTrigger={validateTrigger}
      validateDebounce={validateDebounce}
      name={name}
      rules={generateRequiredRules(required, rules)}
      className="m-0"
      initialValue={initialValue}
      validateFirst={validateFirst}
      dependencies={dependencies}
      {...restField}
    >
      <BaseInput
        width={width}
        name={name}
        label={label}
        required={required}
        clearIconSize={clearIconSize}
        {...rest}
      />
    </Form.Item>
  );
};

export const BaseInput = ({
  value,
  onChange = () => {},
  required,
  label,
  name,
  width,
  clearIconSize,
  defaultValue,
  onBlur = () => {},
  className,
  classNames,
  autoTrim = true,
  capitalize = false,
  type = "text",
  ...rest
}) => {

  const hasValue = true;

  return (
    <Label name={`${name}`} label={label} active={hasValue} required={required}>
      <AntInput
        style={{ width }}
        className={groupClassNames("gt-input", className)}
        type={type}
        allowClear={{
          clearIcon: <CloseOutlined style={{ fontSize: clearIconSize }} />,
        }}
        value={value}
        onChange={(e) => {
          onChange(e); 
        }}
        onBlur={(e) => {
          onBlur(e);
          const value = e.target.value;
          const trimValue = value?.trim();
          const needTrim = autoTrim && trimValue !== value;
          // if (needTrim && capitalize) setState(toCapitalize(trimValue));
          // else if (needTrim && !capitalize) setState(trimValue);
          // else if (!needTrim && capitalize) setState(toCapitalize(value));
        }}
        // classNames={{
        //   ...classNames,
        //   input: groupClassNames(
        //     capitalize ? "capitalize" : undefined,
        //     classNames?.input
        //   ),
        // }}
        {...rest}
      />
    </Label>
  );
};
