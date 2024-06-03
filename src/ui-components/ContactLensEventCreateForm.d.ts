/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactLensEventCreateFormInputValues = {
    ruleName?: string;
    actionName?: string;
    instanceArn?: string;
    contactArn?: string;
    agentArn?: string;
    queueArn?: string;
    timestamp?: string;
};
export declare type ContactLensEventCreateFormValidationValues = {
    ruleName?: ValidationFunction<string>;
    actionName?: ValidationFunction<string>;
    instanceArn?: ValidationFunction<string>;
    contactArn?: ValidationFunction<string>;
    agentArn?: ValidationFunction<string>;
    queueArn?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactLensEventCreateFormOverridesProps = {
    ContactLensEventCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ruleName?: PrimitiveOverrideProps<TextFieldProps>;
    actionName?: PrimitiveOverrideProps<TextFieldProps>;
    instanceArn?: PrimitiveOverrideProps<TextFieldProps>;
    contactArn?: PrimitiveOverrideProps<TextFieldProps>;
    agentArn?: PrimitiveOverrideProps<TextFieldProps>;
    queueArn?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactLensEventCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactLensEventCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactLensEventCreateFormInputValues) => ContactLensEventCreateFormInputValues;
    onSuccess?: (fields: ContactLensEventCreateFormInputValues) => void;
    onError?: (fields: ContactLensEventCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactLensEventCreateFormInputValues) => ContactLensEventCreateFormInputValues;
    onValidate?: ContactLensEventCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactLensEventCreateForm(props: ContactLensEventCreateFormProps): React.ReactElement;
