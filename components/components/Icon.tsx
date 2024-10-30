interface IconProps {
  name: string;
  width: string;
  height: string;
  fontSize: string;
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
};

const Icon = ({ name, width, height, fontSize }: IconProps) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`flex justify-center items-center text-${fontSize} font-smeibold text-black p-1 rounded-full bg-white`}
    >
      {getInitials(name)}
    </div>
  );
};

export default Icon;