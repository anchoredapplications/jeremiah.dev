import PageSection from "@/components/page-section";
import { PageSectionVariant } from '@/types/PageVariant';
import PageSectionHeader from "@/components/page-section-header";
import { getDictionary } from '@/dictionaries';

export default function Projects() {
  const $t = getDictionary();

  return (
    <PageSection id={$t.projects.id} variant={PageSectionVariant.Primary} showBorder={true}>
      <PageSectionHeader>{$t.projects.heading}</PageSectionHeader>
    </PageSection>
  );
}
