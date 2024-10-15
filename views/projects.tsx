import PageSection from "@/components/page/page-section";
import { PageSectionVariant } from '@/types/page';
import PageSectionHeader from "@/components/page/page-section-header";
import { getDictionary } from '@/dictionaries';
import PageSectionContent from "@/components/page/page-section-content";

export default function Projects() {
  const $t = getDictionary();

  return (
    <PageSection id={$t.projects.id} variant={PageSectionVariant.Secondary}>
      <PageSectionHeader>{$t.projects.heading}</PageSectionHeader>
      <PageSectionContent>
        //Discord Bot
        //O'Reilly
        //Ozark Highland Shepherds
        //This Page
        //Circle Dating
      </PageSectionContent>
    </PageSection>
  );
}
