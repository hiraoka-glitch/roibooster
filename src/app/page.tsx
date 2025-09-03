import Hero from "@/components/Hero"
import Pillars from "@/components/Pillars"
import PricingNote from "@/components/PricingNote"
import BottomCta from "@/components/BottomCta"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Section from "@/components/Section"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Pillars Section */}
      <Pillars />

      {/* Pricing Note */}
      <PricingNote />

      {/* FAQ Section */}
      <Section>
        <h2 className="mb-8">よくある質問</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>どのくらいの期間で効果が出ますか？</AccordionTrigger>
            <AccordionContent>
              最短1週間で改善提案を実施し、1ヶ月以内にROI向上の効果を実感いただけます。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>初期費用はかかりますか？</AccordionTrigger>
            <AccordionContent>
              初期費用は0円です。月額10万円〜の料金体系で、成果報酬型プランもご用意しています。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>どのような業界に対応していますか？</AccordionTrigger>
            <AccordionContent>
              EC、SaaS、教育、金融など幅広い業界で実績があります。業界特化のノウハウも豊富です。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* Bottom CTA */}
      <BottomCta />

      {/* Footer */}
      <footer className="bg-slate-50 py-8">
        <div className="container-1080 text-center text-slate-600">
          <p>&copy; 2024 ROIブースター. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
