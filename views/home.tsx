import PageSection from "@/components/page-section";
import { PageSectionVariant } from '@/types/PageVariant';
import TypeHeading from "@/components/type-heading";
import { getDictionary } from '@/dictionaries';
import DevNote from "@/components/dev-note";
import PageSectionContent from "@/components/page-section-content";

export default function Home() {
  const $t = getDictionary();

  return (
    <PageSection id={$t.home.id} variant={PageSectionVariant.Primary}>
      <PageSectionContent>
          <DevNote note="Hello!">
            <TypeHeading stack={$t.home.typeHeading} className="w-full h-full flex flex-col justify-center items-center h-screen"/>
          </DevNote>
      </PageSectionContent>
    </PageSection>
  );
}
