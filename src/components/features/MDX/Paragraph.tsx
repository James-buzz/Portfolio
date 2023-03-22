interface Props {
  children: React.ReactNode;
}
const Paragraph: React.FC<Props> = (props) => {
  return (
    <div className="mb-6 px-2 font-serif text-xl leading-8 text-gray-800">
      {props.children}
    </div>
  );
};

export default Paragraph;
