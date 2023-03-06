interface Props {
  children: React.ReactNode;
}
const Code: React.FC<Props> = (props) => {
  return (
    <div className="inline rounded-xl bg-gray-200 px-1 py-1">
      {props.children}
    </div>
  );
};

export default Code;
