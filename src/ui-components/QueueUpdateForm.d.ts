/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Queue } from "../API.ts";
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
export declare type QueueUpdateFormInputValues = {
    name?: string;
};
export declare type QueueUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QueueUpdateFormOverridesProps = {
    QueueUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QueueUpdateFormProps = React.PropsWithChildren<{
    overrides?: QueueUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    queue?: Queue;
    onSubmit?: (fields: QueueUpdateFormInputValues) => QueueUpdateFormInputValues;
    onSuccess?: (fields: QueueUpdateFormInputValues) => void;
    onError?: (fields: QueueUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QueueUpdateFormInputValues) => QueueUpdateFormInputValues;
    onValidate?: QueueUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QueueUpdateForm(props: QueueUpdateFormProps): React.ReactElement;
