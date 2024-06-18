import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

export const InputField = ({
  values,
  setValues,
}: {
  values: string[];
  setValues: Dispatch<SetStateAction<string[]>>;
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value;
    if (newValue.length > 1) return;
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);

    if (newValue.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newValue.length === 0 && index >= 1) {
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <div className="flex flex-row items-center justify-between w-full my-5">
      {values.map((value, index) => (
        <div className="w-12 h-12 text-black" key={index}>
          <input
            ref={(el) => {
              if (el) inputRefs.current[index] = el;
            }}
            maxLength={1}
            className="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-base bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
            type="text"
            value={value}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      ))}
    </div>
  );
};
