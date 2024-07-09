import PageSection, { PageSectionVariant } from "@/components/page-section";
import PageSectionHeader from "@/components/page-section-header";
import { getDictionary } from '@/dictionaries';

export default function Career() {
  const $t = getDictionary();

  return (
    <PageSection id={$t.career.id} variant={PageSectionVariant.Secondary}>
      <PageSectionHeader>{$t.career.heading}</PageSectionHeader>
    </PageSection>
  );
}
