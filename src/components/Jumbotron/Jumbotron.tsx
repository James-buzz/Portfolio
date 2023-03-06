const Jumbotron: React.FC = () => {
  return (
    <div className="pt-6 sm:pt-40">
      <div className="font-serif text-lg font-bold uppercase tracking-wider text-gray-900">
        Hi, my name is James
      </div>
      <div className="mt-1 font-sans text-8xl font-medium text-gray-700">
        I create <span className="font-bold">software</span>
      </div>
      <div
        className="mt-10 font-serif text-4xl font-light text-gray-700"
        style={{ lineHeight: '1.4' }}
      >
        I&apos;m a self-taught Software Developer and a full-time Electrical
        Engineer, working at{' '}
        <a className="link" href="https://www.unitedutilities.com/">
          United Utilities
        </a>
        . I blog about my projects and share tips about my latest hikes.
      </div>
    </div>
  );
};

export default Jumbotron;
