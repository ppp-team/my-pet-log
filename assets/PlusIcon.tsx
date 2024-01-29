interface IconProps {
  color?: string;
  width?: string;
}

const PlusIcon = ({ color, width }: IconProps) => {
  return (
    <>
      <svg width={width || "56"} height={width || "56"} viewBox="0 0 56 56" fill={color || "none"} xmlns="http://www.w3.org/2000/svg">
        <path d="M28 17.7144V38.2858" stroke={color || "white"} strokeWidth="3" strokeLinecap="round" />
        <path d="M17.7139 28L38.2853 28" stroke={color || "white"} strokeWidth="3" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PlusIcon;
