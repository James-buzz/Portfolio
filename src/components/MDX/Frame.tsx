interface Props {
  src: string;
  height: number;
}
const Frame: React.FC<Props> = (props) => {
  return (
    <iframe
      className="mb-6 w-full rounded-xl"
      height={props.height}
      src={props.src}
    ></iframe>
  );
};

export default Frame;
