/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Metric } from "../API.ts";
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
export declare type MetricUpdateFormInputValues = {
    sentiment?: string[];
    length?: number;
    waittime?: number;
};
export declare type MetricUpdateFormValidationValues = {
    sentiment?: ValidationFunction<string>;
    length?: ValidationFunction<number>;
    waittime?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MetricUpdateFormOverridesProps = {
    MetricUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sentiment?: PrimitiveOverrideProps<SelectFieldProps>;
    length?: PrimitiveOverrideProps<TextFieldProps>;
    waittime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MetricUpdateFormProps = React.PropsWithChildren<{
    overrides?: MetricUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    metric?: Metric;
    onSubmit?: (fields: MetricUpdateFormInputValues) => MetricUpdateFormInputValues;
    onSuccess?: (fields: MetricUpdateFormInputValues) => void;
    onError?: (fields: MetricUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MetricUpdateFormInputValues) => MetricUpdateFormInputValues;
    onValidate?: MetricUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MetricUpdateForm(props: MetricUpdateFormProps): React.ReactElement;
