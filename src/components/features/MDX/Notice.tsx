interface Props {
  children: React.ReactNode;
}
const Notice: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="w-full rounded-md border-l-2 border-gray-400 bg-gray-100 px-4 py-4">
        <div className="font-sans font-medium">Notice</div>
        <div className="font-sans font-light tracking-wide">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Notice;
