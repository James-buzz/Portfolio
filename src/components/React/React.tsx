interface Props {}
const React: React.FC<Props> = (props) => {
  return (
    <div className="mb-4">
      <button className="mb-2 flex w-full items-center gap-4 rounded-xl bg-gray-200 px-6 py-3 text-2xl hover:bg-gray-200">
        <div>😍</div>
        <div>12</div>
      </button>
      <button className="mb-2 flex w-full items-center gap-4 rounded-xl bg-gray-100 px-6 py-3 text-2xl hover:bg-gray-200">
        <div>😇</div>
        <div>3</div>
      </button>
      <button className="mb-2 flex w-full items-center gap-4 rounded-xl bg-gray-100 px-6 py-3 text-2xl hover:bg-gray-200">
        <div>🤔</div>
        <div>2</div>
      </button>
      <button className="mb-2 flex w-full items-center gap-4 rounded-xl bg-gray-100 px-6 py-3 text-2xl hover:bg-gray-200">
        <div>😷</div>
        <div>0</div>
      </button>
    </div>
  );
};

export default React;
