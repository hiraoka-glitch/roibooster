import Section from "./Section";
import { Rocket, Wand2, FileText } from "lucide-react";
import spec from "@/app/lp.spec.json";

const icons = [Rocket, Wand2, FileText];

export default function Pillars() {
  return (
    <Section>
      <h2 className="mb-8">実行体制</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {spec.pillars?.map((p: { title: string; desc: string }, i: number) => {
          const Icon = icons[i] ?? Rocket;
          return (
            <div key={i} className="card p-6 md:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-lg font-semibold">{p.title}</div>
              </div>
              <p className="text-slate-600">{p.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
