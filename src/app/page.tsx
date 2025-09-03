import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import spec from "./lp.spec.json"
import { LPSpecSchema, type Section } from "@/lib/schemas"

// Validate the spec at build time
const validatedSpec = LPSpecSchema.parse(spec)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="max-w-3xl w-full space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>{validatedSpec.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">このLPは JSON スペックのみをソースとして描画されています。</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <Badge variant="secondary">App Router</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind</Badge>
              <Badge variant="secondary">shadcn/ui</Badge>
            </div>
          </CardContent>
        </Card>

        {validatedSpec.sections.map((s: Section, idx: number) => {
          switch (s.type) {
            case "attention":
              return (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle>{s.heading}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {s.sub && <p className="text-muted-foreground">{s.sub}</p>}
                  </CardContent>
                </Card>
              )
            case "problem":
              return (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle>Problem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1">
                      {s.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            case "solution":
              return (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle>Solution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-6 space-y-1">
                      {s.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              )
            default:
              return null
          }
        })}
      </div>
    </main>
  )
}
