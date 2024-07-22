import PageSection, { PageSectionVariant } from "@/components/page-section";
import PageSectionHeader from "@/components/page-section-header";
import { getDictionary } from '@/dictionaries';
import config from '@/config.json'
import CareerCardList from "@/components/career/career-card-list";

async function getCareerData() {
  const res = await fetch(config.api.me.career)
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Career() {
  const jobs: Job[] = await getCareerData()
  const $t = getDictionary();

  console.log("here", jobs)
  return (
    <PageSection id={$t.career.id} variant={PageSectionVariant.Secondary}>
      <PageSectionHeader>{$t.career.heading}</PageSectionHeader>
      <CareerCardList jobs={jobs}></CareerCardList>
    </PageSection>
  );
}
