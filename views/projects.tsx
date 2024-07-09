import PageSection, { PageSectionVariant } from "@/components/page-section";
import PageSectionHeader from "@/components/page-section-header";
import { getDictionary } from '@/dictionaries';

export default function Projects() {
  const $t = getDictionary();

  return (
    <PageSection id={$t.projects.id} variant={PageSectionVariant.Primary}>
      <PageSectionHeader>{$t.projects.heading}</PageSectionHeader>
    </PageSection>
  );
}
