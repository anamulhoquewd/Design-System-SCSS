import React, { useEffect, useLayoutEffect } from "react";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Array<Option>;
  label: string;
  onOptionSelect: (option: Option, index: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  onOptionSelect,
  options = [],
  label = "Select an option",
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [listTop, setListTop] = React.useState<number>(0);
  const labelRef = React.useRef<HTMLButtonElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Handle toggle
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Handle option select
  const handleOptionSelect = (option: Option, index: number) => {
    onOptionSelect(option, index);
    setSelectedIndex(index);
    setIsOpen(false);
  };

  const handleKeyEscape = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      console.log("escape");
    }
  };

  // Handle outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Set list top
  useLayoutEffect(() => {
    setListTop((labelRef.current?.offsetHeight || 0) + 16);
  }, [labelRef.current?.offsetHeight]);

  const selectedOption = selectedIndex !== null ? options[selectedIndex] : null;

  return (
    <div ref={dropdownRef} className="dropdown">
      <button
        ref={labelRef}
        onKeyDown={handleKeyEscape}
        onClick={handleClick}
        className="dropdown-label"
      >
        <span className="flex align-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={"1.2rem"}
            height={"1.2rem"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>

          {selectedOption === null ? label : selectedOption.label}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={"1.2rem"}
          height={"1.2rem"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <ul style={{ top: listTop }} className="dropdown-list">
          {options.map((option: Option, index: number) => {
            const isSelected = selectedIndex === index;
            return (
              <li
                className="dropdown-item"
                key={index}
                onClick={() => handleOptionSelect(option, index)}
              >
                <span className="flex align-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width={"1.2rem"}
                    height={"1.2rem"}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>

                  {option.label}
                </span>
                <input
                  defaultChecked={isSelected}
                  type="checkbox"
                  name=""
                  id=""
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
