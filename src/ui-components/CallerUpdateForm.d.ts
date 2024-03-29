/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Caller } from "../API.ts";
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
export declare type CallerUpdateFormInputValues = {
    phone?: string;
    sentiments?: string[];
};
export declare type CallerUpdateFormValidationValues = {
    phone?: ValidationFunction<string>;
    sentiments?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CallerUpdateFormOverridesProps = {
    CallerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    sentiments?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CallerUpdateFormProps = React.PropsWithChildren<{
    overrides?: CallerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    caller?: Caller;
    onSubmit?: (fields: CallerUpdateFormInputValues) => CallerUpdateFormInputValues;
    onSuccess?: (fields: CallerUpdateFormInputValues) => void;
    onError?: (fields: CallerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CallerUpdateFormInputValues) => CallerUpdateFormInputValues;
    onValidate?: CallerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CallerUpdateForm(props: CallerUpdateFormProps): React.ReactElement;
