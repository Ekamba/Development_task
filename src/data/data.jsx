export const options = [
  { value: 12, label: 0 },
  { value: 26, label: 26 },
  { value: 41, label: 41 },
  { value: 52, label: 52 },
  { value: 66, label: 66 },
  { value: 78, label: 78 },
  { value: 3, label: 3 },
  { value: 15, label: 15 },
  { value: 9, label: 9 },
  { value: 2, label: 2 },
];

export const ChevronDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
};

export const ChevronUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );
};
