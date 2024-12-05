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

function IconStar({
  color,
  width,
  height,
}: {
  height: string;
  width: string;
  color: string;
}) {
  return (
    <svg viewBox="0 0 1024 1024" width={width} height={height} fill={color}>
      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" />
    </svg>
  );
}

function IconX({ width, height }: { height: string; width: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M18.36 5.64a1 1 0 0 1 0 1.41L13.41 12l4.95 4.95a1 1 0 0 1-1.41 1.41L12 13.41l-4.95 4.95a1 1 0 1 1-1.41-1.41L10.59 12 5.64 7.05a1 1 0 0 1 1.41-1.41L12 10.59l4.95-4.95a1 1 0 0 1 1.41 0z" />
    </svg>
  );
}

export { IconArrowRight, IconArrowLeft, IconArrowUp, IconStar, IconX };
