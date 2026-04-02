import { Terminal } from "./ui/terminal";

const Experience = () => {
  return (
    <div className="flex flex-col gap-y-6 w-full items-start" id="experience">
      <h1 className="text-[24px] font-geist font-semibold">experience_</h1>
      <section className="w-full">
        <Terminal
          commands={[
            "05/2023 - 08/2023: Billingual Data Entry Operator @ Exela Technologies",
            "01/2026 - 05/2026: Backend Developer Intern @ Zitheonsoft",
          ]}
          outputs={{
            0: [
              "✔ Served as a Bilingual Data Entry Operator and Adjudicator in an international project",
              "✔ Worked closely with global teams",
              "✔ Gained valuable experience in cross-cultural communication and collaboration",
            ],
            1: [
              "✔ Developed and maintained RESTful APIs using Spring Boot",
              "✔ Applied object-oriented principles and layered architecture",
              "✔ Collaborated in an agile environment and followed best practices for clean, maintainable code",
              "✔ Done. That's it so far..."
            ]
          }}
          typingSpeed={45}
          delayBetweenCommands={1000}
          username="hiramsanchez"
        />
      </section>
    </div>
  );
};

export default Experience;
