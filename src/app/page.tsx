import { OlympiadExplorer } from "@/components/olympiad-explorer";

export default async function Home({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  return <OlympiadExplorer initialSearchParams={await searchParams} />;
}
