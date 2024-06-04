import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex gap-2 items-cent max-w-xl mx-auto">
      <button className="px-5 py-2  bg-[#D72050] text-white rounded">
        Latest
      </button>
      <Marquee pauseOnHover={true}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
