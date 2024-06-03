/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ContactLensEvent } from "../API.ts";
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
export declare type ContactLensEventUpdateFormInputValues = {
    ruleName?: string;
    actionName?: string;
    instanceArn?: string;
    contactArn?: string;
    agentArn?: string;
    queueArn?: string;
    timestamp?: string;
};
export declare type ContactLensEventUpdateFormValidationValues = {
    ruleName?: ValidationFunction<string>;
    actionName?: ValidationFunction<string>;
    instanceArn?: ValidationFunction<string>;
    contactArn?: ValidationFunction<string>;
    agentArn?: ValidationFunction<string>;
    queueArn?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactLensEventUpdateFormOverridesProps = {
    ContactLensEventUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ruleName?: PrimitiveOverrideProps<TextFieldProps>;
    actionName?: PrimitiveOverrideProps<TextFieldProps>;
    instanceArn?: PrimitiveOverrideProps<TextFieldProps>;
    contactArn?: PrimitiveOverrideProps<TextFieldProps>;
    agentArn?: PrimitiveOverrideProps<TextFieldProps>;
    queueArn?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactLensEventUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactLensEventUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactLensEvent?: ContactLensEvent;
    onSubmit?: (fields: ContactLensEventUpdateFormInputValues) => ContactLensEventUpdateFormInputValues;
    onSuccess?: (fields: ContactLensEventUpdateFormInputValues) => void;
    onError?: (fields: ContactLensEventUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactLensEventUpdateFormInputValues) => ContactLensEventUpdateFormInputValues;
    onValidate?: ContactLensEventUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactLensEventUpdateForm(props: ContactLensEventUpdateFormProps): React.ReactElement;
