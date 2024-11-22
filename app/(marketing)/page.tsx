"use server";
import { Background } from "@/components/background";
import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { MortgageDataDashboard } from "@/components/mortgage-data-dashboard";
import { prisma } from "@/lib/prisma";
import { Stat } from "@/lib/schemas";

export default async function Home() {
  const stats = await prisma.stats_mortgage_doc_upload.findMany();
  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden ">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col items-center justify-between mb-12">
        <Hero />
        <MortgageDataDashboard stats={stats as unknown as Stat[]} />
      </Container>
    </div>
  );
}
