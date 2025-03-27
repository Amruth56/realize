import React from "react";

const Pagination = () => {
  return (
    <nav
      className="flex justify-between px-5 py-0 mt-0"
      aria-label="Pagination"
    >
      <button aria-label="Previous page">
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=&quot;19:3578&quot; width=&quot;68&quot; height=&quot;45&quot; viewBox=&quot;0 0 68 45&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;prev-button&quot; style=&quot;width: 40px; height: 40px; cursor: pointer&quot;> <g filter=&quot;url(#filter0_d_19_3578)&quot;> <circle cx=&quot;34&quot; cy=&quot;22&quot; r=&quot;20&quot; fill=&quot;white&quot;></circle> </g> <path d=&quot;M40.4634 31.1133L31.7863 22.5L40.4634 13.8867L37.8071 11.25L26.4738 22.5L37.8071 33.75L40.4634 31.1133Z&quot; fill=&quot;black&quot;></path> <defs> <filter id=&quot;filter0_d_19_3578&quot; x=&quot;12&quot; y=&quot;1&quot; width=&quot;44&quot; height=&quot;44&quot; filterUnits=&quot;userSpaceOnUse&quot; color-interpolation-filters=&quot;sRGB&quot;> <feFlood flood-opacity=&quot;0&quot; result=&quot;BackgroundImageFix&quot;></feFlood> <feColorMatrix in=&quot;SourceAlpha&quot; type=&quot;matrix&quot; values=&quot;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0&quot; result=&quot;hardAlpha&quot;></feColorMatrix> <feOffset dy=&quot;1&quot;></feOffset> <feGaussianBlur stdDeviation=&quot;1&quot;></feGaussianBlur> <feColorMatrix type=&quot;matrix&quot; values=&quot;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0&quot;></feColorMatrix> <feBlend mode=&quot;normal&quot; in2=&quot;BackgroundImageFix&quot; result=&quot;effect1_dropShadow_19_3578&quot;></feBlend> <feBlend mode=&quot;normal&quot; in=&quot;SourceGraphic&quot; in2=&quot;effect1_dropShadow_19_3578&quot; result=&quot;shape&quot;></feBlend> </filter> </defs> </svg>",
          }}
        /> 
      </button>
      <button aria-label="Next page">
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=&quot;19:3577&quot; width=&quot;44&quot; height=&quot;44&quot; viewBox=&quot;0 0 44 44&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;next-button&quot; style=&quot;width: 40px; height: 40px; cursor: pointer&quot;> <g filter=&quot;url(#filter0_d_19_3577)&quot;> <circle cx=&quot;22&quot; cy=&quot;21&quot; r=&quot;20&quot; fill=&quot;white&quot;></circle> </g> <path d=&quot;M15 12.6367L23.6771 21.25L15 29.8633L17.6562 32.5L28.9896 21.25L17.6562 10L15 12.6367Z&quot; fill=&quot;black&quot;></path> <defs> <filter id=&quot;filter0_d_19_3577&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;44&quot; height=&quot;44&quot; filterUnits=&quot;userSpaceOnUse&quot; color-interpolation-filters=&quot;sRGB&quot;> <feFlood flood-opacity=&quot;0&quot; result=&quot;BackgroundImageFix&quot;></feFlood> <feColorMatrix in=&quot;SourceAlpha&quot; type=&quot;matrix&quot; values=&quot;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0&quot; result=&quot;hardAlpha&quot;></feColorMatrix> <feOffset dy=&quot;1&quot;></feOffset> <feGaussianBlur stdDeviation=&quot;1&quot;></feGaussianBlur> <feColorMatrix type=&quot;matrix&quot; values=&quot;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0&quot;></feColorMatrix> <feBlend mode=&quot;normal&quot; in2=&quot;BackgroundImageFix&quot; result=&quot;effect1_dropShadow_19_3577&quot;></feBlend> <feBlend mode=&quot;normal&quot; in=&quot;SourceGraphic&quot; in2=&quot;effect1_dropShadow_19_3577&quot; result=&quot;shape&quot;></feBlend> </filter> </defs> </svg>",
          }}
        />
      </button>
    </nav>
  );
};

export default Pagination;
