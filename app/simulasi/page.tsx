import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FlaskConical } from "lucide-react";

const SIMULATIONS = [
  { id: "1", title: "Simulasi Kasus 1", description: "Placeholder — kasus simulasi akan diisi melalui panel admin." },
  { id: "2", title: "Simulasi Kasus 2", description: "Placeholder — kasus simulasi akan diisi melalui panel admin." },
  { id: "3", title: "Simulasi Kasus 3", description: "Placeholder — kasus simulasi akan diisi melalui panel admin." },
];

export default function SimulasiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-2 mb-8">
          <FlaskConical className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Simulasi Kasus</h1>
        </div>

        <p className="text-muted-foreground mb-6">
          Pelajari melalui simulasi kasus untuk memahami bagaimana konflik dapat berkembang dan bagaimana cara mencegahnya.
        </p>

        <div className="grid gap-4">
          {SIMULATIONS.map((sim) => (
            <Card key={sim.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{sim.title}</CardTitle>
                  <Badge variant="outline">Placeholder</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{sim.description}</p>
                <Link href={`/simulasi/${sim.id}`}>
                  <Button variant="outline" size="sm">Mulai Simulasi</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button variant="ghost">Kembali ke Beranda</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
