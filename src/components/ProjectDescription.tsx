import React, { useId, useState } from "react";

interface ProjectDescriptionProps {
  version1: React.ReactNode[];
  version2: React.ReactNode[];
  labelA?: string;
  labelB?: string;
}

const ProjectDescription = ({
  version1,
  version2,
  labelA = "Original",
  labelB = "LinkedIn version",
}: ProjectDescriptionProps) => {
  const [useAlt, setUseAlt] = useState(false);
  const toggleId = useId();
  const content = useAlt ? version2 : version1;

  return (
    <div className="flex flex-col gap-5">
      <div className="inline-flex w-fit items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 px-6 py-2 text-sm">
        <span className={useAlt ? "text-neutral-500" : "text-neutral-900"}>
          {labelA}
        </span>
        <label
          htmlFor={toggleId}
          className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:transparent] has-checked:bg-[#005E93] cursor-pointer"
        >
          <input
            id={toggleId}
            type="checkbox"
            checked={useAlt}
            onChange={(event) => setUseAlt(event.target.checked)}
            className="peer sr-only"
            aria-label="Toggle description"
          />
          <span className="absolute inset-y-0 inset-s-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:inset-s-6 " />
        </label>
        <span className={useAlt ? "text-neutral-900" : "text-neutral-500"}>
          {labelB}
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {content.map((paragraph, index) => (
          <p key={index} className="text-base text-neutral-700">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectDescription;
