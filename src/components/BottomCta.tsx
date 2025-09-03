import Section from "./Section";
import spec from "@/app/lp.spec.json";

export default function BottomCta() {
  const c = spec.cta_bottom;
  return (
    <Section>
      <div className="text-center">
        <h2 className="mb-6">{c.headline}</h2>
        <a href={c.button_href} className="btn-primary">{c.button_text}</a>
      </div>
    </Section>
  );
}
