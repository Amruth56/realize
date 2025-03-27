import React from "react";

const AgentCard2 = ({ image, title, description, category }) => {
  return (
    <article className="p-6 bg-white rounded-xl shadow-sm">
      <div className="flex gap-4">
        <img
          src={image}
          alt={`${title} icon`}
          className="w-[64px] h-[64px] rounded-[8px]"
        />
        <div className="flex-1">
          <h2 className="mb-3.5 text-lg font-bold text-gray-800">{title}</h2>
          <p className="mb-9 text-sm text-gray-600">{description}</p>
          <div className="flex justify-between items-center">
            <span className="px-3 py-1.5 text-sm text-blue-600 bg-blue-50 rounded-full">
              {category}
            </span>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg id=&quot;19:3636&quot; layer-name=&quot;Frame&quot; width=&quot;14&quot; height=&quot;16&quot; viewBox=&quot;0 0 14 16&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[14px] h-[16px]&quot;> <path d=&quot;M0 0H14V16H0V0Z&quot; stroke=&quot;#E5E7EB&quot;></path> <path d=&quot;M13.7063 8.70624C14.0969 8.31562 14.0969 7.68124 13.7063 7.29062L8.70625 2.29062C8.31563 1.89999 7.68125 1.89999 7.29063 2.29062C6.9 2.68124 6.9 3.31562 7.29063 3.70624L10.5875 6.99999H1C0.446875 6.99999 0 7.44687 0 7.99999C0 8.55312 0.446875 8.99999 1 8.99999H10.5844L7.29375 12.2937C6.90312 12.6844 6.90312 13.3187 7.29375 13.7094C7.68437 14.1 8.31875 14.1 8.70938 13.7094L13.7094 8.70937L13.7063 8.70624Z&quot; fill=&quot;black&quot;></path> </svg>",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AgentCard2;
