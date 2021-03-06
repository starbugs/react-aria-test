import React from 'react'
import {useNumberField} from '@react-aria/numberfield';
import {useNumberFieldState} from '@react-stately/numberfield';
import {useLocale} from '@react-aria/i18n';
import {useButton} from '@react-aria/button';
import { NumberFieldProps } from '@react-types/numberfield';

export default function NumberField(props: NumberFieldProps) {
  let {locale} = useLocale();
  let state = useNumberFieldState({...props, locale});
  let inputRef = React.useRef<HTMLInputElement>(null);
  let incrRef = React.useRef<HTMLButtonElement>(null);
  let decRef = React.useRef<HTMLButtonElement>(null);
  let {
    labelProps,
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps
  } = useNumberField(props, state, inputRef);

  let {buttonProps: incrementProps} = useButton(incrementButtonProps, incrRef);
  let {buttonProps: decrementProps} = useButton(decrementButtonProps, decRef);

  return (
    <div>
      <label {...labelProps}>{props.label}</label>
      <div {...groupProps}>
        <button {...decrementProps} ref={incrRef}>-</button>
        <input {...inputProps} ref={inputRef} />
        <button {...incrementProps} ref={decRef}>+</button>
      </div>
    </div>
  );
}