"use client";
import Section from "./Section";
import { ArrowRight } from "lucide-react";
import spec from "@/app/lp.spec.json";

export default function Hero() {
  const h = spec.hero;
  return (
    <Section className="pt-12 md:pt-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <div className="text-brand-700 font-semibold mb-3">{h.eyebrow}</div>
          <h1 className="mb-4">{h.headline}</h1>
          <p className="text-slate-600 mb-6">{h.subhead}</p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {h.badges?.map((b: string, i: number) => (
              <span className="pill" key={i}>{b}</span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <a href={h.cta_primary_href} className="btn-primary">
              {h.cta_primary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href={h.cta_secondary_href} className="btn-outline">
              {h.cta_secondary}
            </a>
          </div>
        </div>

        {/* 右側ビジュアル（ダミー） */}
        <div className="relative">
          <div className="band p-6 md:p-8">
            <div className="text-slate-700 font-semibold">媒体運用 × LP改善 × 記事LP</div>
            <div className="text-slate-500">ROIを底上げする三位一体の運用体制</div>
            <div className="mt-6 h-48 bg-gradient-to-br from-brand-100 to-brand-200 rounded-xl flex items-center justify-center">
              <div className="text-brand-600 font-semibold">ROI向上の仕組み</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
