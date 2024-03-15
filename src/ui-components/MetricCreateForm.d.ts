/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MetricCreateFormInputValues = {
    sentiment?: string[];
    length?: number;
    waittime?: number;
};
export declare type MetricCreateFormValidationValues = {
    sentiment?: ValidationFunction<string>;
    length?: ValidationFunction<number>;
    waittime?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MetricCreateFormOverridesProps = {
    MetricCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sentiment?: PrimitiveOverrideProps<SelectFieldProps>;
    length?: PrimitiveOverrideProps<TextFieldProps>;
    waittime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MetricCreateFormProps = React.PropsWithChildren<{
    overrides?: MetricCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MetricCreateFormInputValues) => MetricCreateFormInputValues;
    onSuccess?: (fields: MetricCreateFormInputValues) => void;
    onError?: (fields: MetricCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MetricCreateFormInputValues) => MetricCreateFormInputValues;
    onValidate?: MetricCreateFormValidationValues;
} & React.CSSProperties>;
export default function MetricCreateForm(props: MetricCreateFormProps): React.ReactElement;
