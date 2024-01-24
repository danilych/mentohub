import clsx from 'clsx'
import React, { forwardRef, HTMLProps, useImperativeHandle, useRef } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string
  placeholder?: string
}

export const RoundedInput = forwardRef(function RoundedInput({ className, placeholder}: Props, ref: React.Ref<HTMLInputElement>) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);
  return (
    <input
      type="text"
      ref={ref}
      placeholder={placeholder}
      className={clsx(
        'text-[#4E4E51] h-[50px] bg-[#F6F6F6] rounded-[50px] outline-none text-sm font-manrope font-normal w-full border-0',
        className
      )}
    />
  )
})
