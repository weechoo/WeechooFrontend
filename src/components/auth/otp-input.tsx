import React from "react";

export function OTPInput({ length = 6 }: { length?: number }) {
  const [values, setValues] = React.useState<string[]>(Array(length).fill(""));

  function handleChange(index: number, value: string) {
    if (!/^[0-9]?$/.test(value)) return;
    const next = [...values];
    next[index] = value;
    setValues(next);

    if (value && index < length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-sm text-neutral-200 font-medium"
        htmlFor="otp-input"
      >
        Verification Code
      </label>
      <div className="flex gap-2">
        {values.map((val, i) => (
          <input
            name="otp-input"
            key={i}
            id={`otp-${i}`}
            value={val}
            onChange={(e) => handleChange(i, e.target.value)}
            maxLength={1}
            className="w-12 h-12  px-3 text-center border rounded-md text-lg"
            placeholder="-"
          />
        ))}
      </div>
    </div>
  );
}
