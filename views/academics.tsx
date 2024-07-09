import PageSection, { PageSectionVariant } from "@/components/page-section";
import PageSectionHeader from "@/components/page-section-header";
import ThemeToggle from "@/components/theme-toggle";
import TypeHeading from "@/components/type-heading";
import { getDictionary } from '@/dictionaries';

export default function Academics() {
  const $t = getDictionary();

  return (
    <PageSection id={$t.academics.id} variant={PageSectionVariant.Primary}>
      <PageSectionHeader>{$t.academics.heading}</PageSectionHeader>
    </PageSection>
  );
}
