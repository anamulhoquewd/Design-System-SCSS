// Bootstrap https://icons.getbootstrap.com/

function IconArrowRight({
  height = "1em",
  width = "1em",
  color = "#131927",
}: {
  height?: string;
  width?: string;
  color?: string;
}) {
  return (
    <svg fill={color} viewBox="0 0 16 16" height={height} width={width}>
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
      />
    </svg>
  );
}

function IconArrowLeft({
  height = "1em",
  width = "1em",
  color = "#131927",
}: {
  height?: string;
  width?: string;
  color?: string;
}) {
  return (
    <svg fill={color} viewBox="0 0 16 16" height={height} width={width}>
      <path
        fillRule="evenodd"
        d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
      />
    </svg>
  );
}

function IconArrowUp({
  height = "1em",
  width = "1em",
  color = "#131927",
}: {
  height?: string;
  width?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 16 16" fill={color} height={height} width={width}>
      <path
        fillRule="evenodd"
        d="M8 12a.5.5 0 00.5-.5V5.707l2.146 2.147a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L7.5 5.707V11.5a.5.5 0 00.5.5z"
      />
    </svg>
  );
}

export { IconArrowRight, IconArrowLeft, IconArrowUp };
