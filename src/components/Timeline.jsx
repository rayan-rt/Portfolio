import { timelineData } from "../data/timeline";
import { TimelineItem } from "./index";

const Timeline = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <h1 className="text-center text-3xl font-bold underline underline-offset-8 decoration-4 mb-8 text-stone-900 dark:text-white">
          Timeline
        </h1>
        {timelineData.map((item, i) => (
          <TimelineItem
            key={i}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
