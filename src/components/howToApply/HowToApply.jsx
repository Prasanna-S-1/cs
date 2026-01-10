import ApplyStep from "./ApplyStep";
import ApplyForm from "./ApplyForm";

export default function HowToApply() {
  const steps = [
    {
      step: "1",
      title: "Apply Online",
      description: "Browse open roles and submit your updated CV.",
    },
    {
      step: "2",
      title: "Screening & Test",
      description: "Shortlisted candidates take a technical assessment.",
    },
    {
      step: "3",
      title: "Interview",
      description: "One-on-one discussion with our technical leads.",
    },
    {
      step: "4",
      title: "Onboarding",
      description: "Welcome aboard! Get your kit and start your journey.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6">
        
        {/* LEFT */}
        <div className="space-y-10">
          <h2 className="text-4xl font-extrabold">
            How to Apply
          </h2>

          {steps.map((item, i) => (
            <ApplyStep key={i} {...item} index={i} />
          ))}
        </div>

        {/* RIGHT */}
        <ApplyForm />
      </div>
    </section>
  );
}
