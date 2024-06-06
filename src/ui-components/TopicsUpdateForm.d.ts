/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Topics } from "../API.ts";
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
export declare type TopicsUpdateFormInputValues = {
    name?: string;
    description?: string;
    count?: number;
};
export declare type TopicsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    count?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopicsUpdateFormOverridesProps = {
    TopicsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    count?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TopicsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TopicsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    topics?: Topics;
    onSubmit?: (fields: TopicsUpdateFormInputValues) => TopicsUpdateFormInputValues;
    onSuccess?: (fields: TopicsUpdateFormInputValues) => void;
    onError?: (fields: TopicsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TopicsUpdateFormInputValues) => TopicsUpdateFormInputValues;
    onValidate?: TopicsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TopicsUpdateForm(props: TopicsUpdateFormProps): React.ReactElement;
