import React from "react";

function SupportSection() {
  return (
    <article className="flex gap-4 items-start p-6 rounded-xl bg-opacity-10 max-sm:flex-col max-sm:items-center max-sm:text-center"  style={{
      background:
        "linear-gradient(90deg, rgb(117, 155, 236) 0%, rgb(60, 116, 238) 100%)",
    }}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f35ef9a22c15ab2a794261870d43425f41b2d5f3"
        alt="Support"
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <h3 className="mb-4 text-base font-medium text-white">Need help?</h3>
        <p className="text-base leading-5 text-white">
          I'm here to guide you through the sign-up process. Feel free to ask
          any questions!
        </p>
      </div>
    </article>
  );
}

export default SupportSection;
