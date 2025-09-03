import Section from "./Section";
import spec from "@/app/lp.spec.json";

export default function PricingNote() {
  const p = spec.pricing_note;
  return (
    <Section>
      <div className="band p-6 md:p-8 text-center">
        <div className="text-xl md:text-2xl font-bold text-brand-700">{p.headline}</div>
        <p className="text-slate-600 mt-2">{p.desc}</p>
      </div>
    </Section>
  );
}
