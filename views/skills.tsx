import PageSection from "@/components/page-section";
import { PageSectionVariant } from '@/types/PageVariant';
import PageSectionHeader from "@/components/page-section-header";
import { getDictionary } from '@/dictionaries';

export default function Skills() {
  const $t = getDictionary();

  return (
    <PageSection id={$t.skills.id} variant={PageSectionVariant.Secondary}>
      <PageSectionHeader>{$t.skills.heading}</PageSectionHeader>
    </PageSection>
  );
}
