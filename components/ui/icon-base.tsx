type IconBaseProps = {
  bgColor: string;
  icon: string;
};

export default function IconBase({
  bgColor,
  icon,
}: IconBaseProps): React.JSX.Element {
  return (
    <div
      className="mr-3 flex h-12 w-12 items-center justify-center rounded-lg"
      style={{ backgroundColor: bgColor }}
    >
      <i className={`fa-brands fa-${icon} text-xl text-white`}></i>
    </div>
  );
}
