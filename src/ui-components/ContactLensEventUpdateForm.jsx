/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getContactLensEvent } from "../graphql/queries";
import { updateContactLensEvent } from "../graphql/mutations";
const client = generateClient();
export default function ContactLensEventUpdateForm(props) {
  const {
    id: idProp,
    contactLensEvent: contactLensEventModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ruleName: "",
    actionName: "",
    instanceArn: "",
    contactArn: "",
    agentArn: "",
    queueArn: "",
    timestamp: "",
  };
  const [ruleName, setRuleName] = React.useState(initialValues.ruleName);
  const [actionName, setActionName] = React.useState(initialValues.actionName);
  const [instanceArn, setInstanceArn] = React.useState(
    initialValues.instanceArn
  );
  const [contactArn, setContactArn] = React.useState(initialValues.contactArn);
  const [agentArn, setAgentArn] = React.useState(initialValues.agentArn);
  const [queueArn, setQueueArn] = React.useState(initialValues.queueArn);
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = contactLensEventRecord
      ? { ...initialValues, ...contactLensEventRecord }
      : initialValues;
    setRuleName(cleanValues.ruleName);
    setActionName(cleanValues.actionName);
    setInstanceArn(cleanValues.instanceArn);
    setContactArn(cleanValues.contactArn);
    setAgentArn(cleanValues.agentArn);
    setQueueArn(cleanValues.queueArn);
    setTimestamp(cleanValues.timestamp);
    setErrors({});
  };
  const [contactLensEventRecord, setContactLensEventRecord] = React.useState(
    contactLensEventModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getContactLensEvent.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getContactLensEvent
        : contactLensEventModelProp;
      setContactLensEventRecord(record);
    };
    queryData();
  }, [idProp, contactLensEventModelProp]);
  React.useEffect(resetStateValues, [contactLensEventRecord]);
  const validations = {
    ruleName: [{ type: "Required" }],
    actionName: [{ type: "Required" }],
    instanceArn: [{ type: "Required" }],
    contactArn: [{ type: "Required" }],
    agentArn: [{ type: "Required" }],
    queueArn: [{ type: "Required" }],
    timestamp: [{ type: "Required" }],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          ruleName,
          actionName,
          instanceArn,
          contactArn,
          agentArn,
          queueArn,
          timestamp,
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
            query: updateContactLensEvent.replaceAll("__typename", ""),
            variables: {
              input: {
                id: contactLensEventRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ContactLensEventUpdateForm")}
      {...rest}
    >
      <TextField
        label="Rule name"
        isRequired={true}
        isReadOnly={false}
        value={ruleName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ruleName: value,
              actionName,
              instanceArn,
              contactArn,
              agentArn,
              queueArn,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.ruleName ?? value;
          }
          if (errors.ruleName?.hasError) {
            runValidationTasks("ruleName", value);
          }
          setRuleName(value);
        }}
        onBlur={() => runValidationTasks("ruleName", ruleName)}
        errorMessage={errors.ruleName?.errorMessage}
        hasError={errors.ruleName?.hasError}
        {...getOverrideProps(overrides, "ruleName")}
      ></TextField>
      <TextField
        label="Action name"
        isRequired={true}
        isReadOnly={false}
        value={actionName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ruleName,
              actionName: value,
              instanceArn,
              contactArn,
              agentArn,
              queueArn,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.actionName ?? value;
          }
          if (errors.actionName?.hasError) {
            runValidationTasks("actionName", value);
          }
          setActionName(value);
        }}
        onBlur={() => runValidationTasks("actionName", actionName)}
        errorMessage={errors.actionName?.errorMessage}
        hasError={errors.actionName?.hasError}
        {...getOverrideProps(overrides, "actionName")}
      ></TextField>
      <TextField
        label="Instance arn"
        isRequired={true}
        isReadOnly={false}
        value={instanceArn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ruleName,
              actionName,
              instanceArn: value,
              contactArn,
              agentArn,
              queueArn,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.instanceArn ?? value;
          }
          if (errors.instanceArn?.hasError) {
            runValidationTasks("instanceArn", value);
          }
          setInstanceArn(value);
        }}
        onBlur={() => runValidationTasks("instanceArn", instanceArn)}
        errorMessage={errors.instanceArn?.errorMessage}
        hasError={errors.instanceArn?.hasError}
        {...getOverrideProps(overrides, "instanceArn")}
      ></TextField>
      <TextField
        label="Contact arn"
        isRequired={true}
        isReadOnly={false}
        value={contactArn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ruleName,
              actionName,
              instanceArn,
              contactArn: value,
              agentArn,
              queueArn,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.contactArn ?? value;
          }
          if (errors.contactArn?.hasError) {
            runValidationTasks("contactArn", value);
          }
          setContactArn(value);
        }}
        onBlur={() => runValidationTasks("contactArn", contactArn)}
        errorMessage={errors.contactArn?.errorMessage}
        hasError={errors.contactArn?.hasError}
        {...getOverrideProps(overrides, "contactArn")}
      ></TextField>
      <TextField
        label="Agent arn"
        isRequired={true}
        isReadOnly={false}
        value={agentArn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ruleName,
              actionName,
              instanceArn,
              contactArn,
              agentArn: value,
              queueArn,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.agentArn ?? value;
          }
          if (errors.agentArn?.hasError) {
            runValidationTasks("agentArn", value);
          }
          setAgentArn(value);
        }}
        onBlur={() => runValidationTasks("agentArn", agentArn)}
        errorMessage={errors.agentArn?.errorMessage}
        hasError={errors.agentArn?.hasError}
        {...getOverrideProps(overrides, "agentArn")}
      ></TextField>
      <TextField
        label="Queue arn"
        isRequired={true}
        isReadOnly={false}
        value={queueArn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ruleName,
              actionName,
              instanceArn,
              contactArn,
              agentArn,
              queueArn: value,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.queueArn ?? value;
          }
          if (errors.queueArn?.hasError) {
            runValidationTasks("queueArn", value);
          }
          setQueueArn(value);
        }}
        onBlur={() => runValidationTasks("queueArn", queueArn)}
        errorMessage={errors.queueArn?.errorMessage}
        hasError={errors.queueArn?.hasError}
        {...getOverrideProps(overrides, "queueArn")}
      ></TextField>
      <TextField
        label="Timestamp"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={timestamp && convertToLocal(new Date(timestamp))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              ruleName,
              actionName,
              instanceArn,
              contactArn,
              agentArn,
              queueArn,
              timestamp: value,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || contactLensEventModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || contactLensEventModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
