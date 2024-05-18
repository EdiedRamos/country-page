import type { Option, Options } from "@/types";
import { useEffect, useRef, useState } from "react";

interface useSelect {
  options: Options;
}

function findOption(options: Options): Option {
  if (options.length === 0)
    throw new Error(
      "useSelect must to be provided with options, options length is zero."
    );
  const defaultOption: Option[] = options.filter((option) => !!option.default);
  if (defaultOption.length === 0) return options[0];
  return defaultOption[0];
}

export const useSelect = ({ options }: useSelect) => {
  const selectRef = useRef<HTMLDivElement>(null);

  const [selectedOption, setSelectedOption] = useState<Option>(() =>
    findOption(options)
  );
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleShowOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handleOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutside);

    return () => document.removeEventListener("mousedown", handleOutside);
  });

  return {
    selectRef,
    handleShowOptions,
    selectedOption,
    showOptions,
    handleSelect,
    options,
  };
};
