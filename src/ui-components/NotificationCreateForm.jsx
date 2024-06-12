/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createNotification } from "../graphql/mutations";
const client = generateClient();
export default function NotificationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    primaryID: "",
    secondaryID: "",
    notification_type: "",
    read: false,
  };
  const [primaryID, setPrimaryID] = React.useState(initialValues.primaryID);
  const [secondaryID, setSecondaryID] = React.useState(
    initialValues.secondaryID
  );
  const [notification_type, setNotification_type] = React.useState(
    initialValues.notification_type
  );
  const [read, setRead] = React.useState(initialValues.read);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPrimaryID(initialValues.primaryID);
    setSecondaryID(initialValues.secondaryID);
    setNotification_type(initialValues.notification_type);
    setRead(initialValues.read);
    setErrors({});
  };
  const validations = {
    primaryID: [{ type: "Required" }],
    secondaryID: [{ type: "Required" }],
    notification_type: [],
    read: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          primaryID,
          secondaryID,
          notification_type,
          read,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createNotification.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "NotificationCreateForm")}
      {...rest}
    >
      <TextField
        label="Primary id"
        isRequired={true}
        isReadOnly={false}
        value={primaryID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              primaryID: value,
              secondaryID,
              notification_type,
              read,
            };
            const result = onChange(modelFields);
            value = result?.primaryID ?? value;
          }
          if (errors.primaryID?.hasError) {
            runValidationTasks("primaryID", value);
          }
          setPrimaryID(value);
        }}
        onBlur={() => runValidationTasks("primaryID", primaryID)}
        errorMessage={errors.primaryID?.errorMessage}
        hasError={errors.primaryID?.hasError}
        {...getOverrideProps(overrides, "primaryID")}
      ></TextField>
      <TextField
        label="Secondary id"
        isRequired={true}
        isReadOnly={false}
        value={secondaryID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              primaryID,
              secondaryID: value,
              notification_type,
              read,
            };
            const result = onChange(modelFields);
            value = result?.secondaryID ?? value;
          }
          if (errors.secondaryID?.hasError) {
            runValidationTasks("secondaryID", value);
          }
          setSecondaryID(value);
        }}
        onBlur={() => runValidationTasks("secondaryID", secondaryID)}
        errorMessage={errors.secondaryID?.errorMessage}
        hasError={errors.secondaryID?.hasError}
        {...getOverrideProps(overrides, "secondaryID")}
      ></TextField>
      <SelectField
        label="Notification type"
        placeholder="Please select an option"
        isDisabled={false}
        value={notification_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              primaryID,
              secondaryID,
              notification_type: value,
              read,
            };
            const result = onChange(modelFields);
            value = result?.notification_type ?? value;
          }
          if (errors.notification_type?.hasError) {
            runValidationTasks("notification_type", value);
          }
          setNotification_type(value);
        }}
        onBlur={() =>
          runValidationTasks("notification_type", notification_type)
        }
        errorMessage={errors.notification_type?.errorMessage}
        hasError={errors.notification_type?.hasError}
        {...getOverrideProps(overrides, "notification_type")}
      >
        <option
          children="Copilot"
          value="COPILOT"
          {...getOverrideProps(overrides, "notification_typeoption0")}
        ></option>
        <option
          children="Agent"
          value="AGENT"
          {...getOverrideProps(overrides, "notification_typeoption1")}
        ></option>
        <option
          children="Supervisor"
          value="SUPERVISOR"
          {...getOverrideProps(overrides, "notification_typeoption2")}
        ></option>
      </SelectField>
      <SwitchField
        label="Read"
        defaultChecked={false}
        isDisabled={false}
        isChecked={read}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              primaryID,
              secondaryID,
              notification_type,
              read: value,
            };
            const result = onChange(modelFields);
            value = result?.read ?? value;
          }
          if (errors.read?.hasError) {
            runValidationTasks("read", value);
          }
          setRead(value);
        }}
        onBlur={() => runValidationTasks("read", read)}
        errorMessage={errors.read?.errorMessage}
        hasError={errors.read?.hasError}
        {...getOverrideProps(overrides, "read")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
