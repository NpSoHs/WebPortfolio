export const Skill = ({ isMouseEnter, data }) => {
  return (
    <div>
      <div className="flex gap-x-4 text-sm">
        {data.map((e) => {
          return (
            <div
              key={`skill-${e}`}
              className={`bg-primarySubContent px-2 py-1 rounded-md ${
                isMouseEnter ? "text-primaryTitle" : ""
              } `}
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};
