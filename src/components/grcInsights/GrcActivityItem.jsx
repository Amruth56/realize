import React from "react";

function ActivityItem({ iconSrc, message, time }) {
  return (
    <div className="flex flex-wrap gap-4 mt-4 first:mt-0 bg-opacity-0 max-md:max-w-full">
      <img
        src={iconSrc}
        className="object-contain shrink-0 my-auto w-8 rounded-full aspect-square"
        alt="Activity icon"
      />
      <div className="flex flex-col grow shrink-0 items-start py-1 pr-20 basis-0 bg-opacity-0 w-fit max-md:max-w-full">
        <p className="text-sm text-slate-600">{message}</p>
        <time className="mt-1.5 text-xs text-slate-400">{time}</time>
      </div>
    </div>
  );
}

function GrcActivityFeed() {
  const activities = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/495c3d65ed88773399e404d1281eb26a256b1954?placeholderIfAbsent=true",
      message: 'New policy document added: "Cloud Security Guidelines 2025"',
      time: "2 hours ago",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/964513b50b4fcca2697a5bb05b30edde4dab7f29?placeholderIfAbsent=true",
      message: "Risk assessment completed for Q1 2025",
      time: "5 hours ago",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/8f286a89216d48f19ceeeaf7437e58bd/6f238bc6e41f4807d62db808c0a141cacc085776?placeholderIfAbsent=true",
      message: "GDPR compliance audit passed successfully",
      time: "1 day ago",
    },
  ];

  return (
    <section className="flex flex-col px-0.5 py-1 mt-7 leading-none bg-opacity-0 max-md:max-w-full">
      <h2 className="self-start text-xl font-semibold text-slate-800">
        Recent Activities
      </h2>
      <div className="flex flex-col justify-center p-px mt-7 bg-white rounded-xl border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:max-w-full">
        <div className="p-6 w-full bg-opacity-0 max-md:px-5 max-md:max-w-full">
          {activities.map((activity, index) => (
            <ActivityItem
              key={index}
              iconSrc={activity.iconSrc}
              message={activity.message}
              time={activity.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GrcActivityFeed;
