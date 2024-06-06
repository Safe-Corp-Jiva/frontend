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
export declare type TopicsCreateFormInputValues = {
    name?: string;
    description?: string;
    count?: number;
};
export declare type TopicsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    count?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopicsCreateFormOverridesProps = {
    TopicsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    count?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TopicsCreateFormProps = React.PropsWithChildren<{
    overrides?: TopicsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TopicsCreateFormInputValues) => TopicsCreateFormInputValues;
    onSuccess?: (fields: TopicsCreateFormInputValues) => void;
    onError?: (fields: TopicsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TopicsCreateFormInputValues) => TopicsCreateFormInputValues;
    onValidate?: TopicsCreateFormValidationValues;
} & React.CSSProperties>;
export default function TopicsCreateForm(props: TopicsCreateFormProps): React.ReactElement;
