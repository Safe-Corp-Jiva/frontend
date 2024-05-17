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
export declare type CallerCreateFormInputValues = {
    id?: string;
    name?: string;
    email?: string;
};
export declare type CallerCreateFormValidationValues = {
    id?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CallerCreateFormOverridesProps = {
    CallerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CallerCreateFormProps = React.PropsWithChildren<{
    overrides?: CallerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CallerCreateFormInputValues) => CallerCreateFormInputValues;
    onSuccess?: (fields: CallerCreateFormInputValues) => void;
    onError?: (fields: CallerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CallerCreateFormInputValues) => CallerCreateFormInputValues;
    onValidate?: CallerCreateFormValidationValues;
} & React.CSSProperties>;
export default function CallerCreateForm(props: CallerCreateFormProps): React.ReactElement;
