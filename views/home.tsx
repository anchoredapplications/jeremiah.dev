import PageSection, { PageSectionVariant } from "@/components/page-section";
import DevOnly from "@/components/dev-only";
import TypeHeading from "@/components/type-heading";
import { getDictionary } from '@/dictionaries';
import DevNote from "@/components/dev-note";

export default function Home() {
  const $t = getDictionary();

  return (
    <PageSection id={$t.home.id} variant={PageSectionVariant.Primary}>
        <DevNote note="Hello!">
          <TypeHeading stack={$t.home.typeHeading} className="w-full h-full flex flex-col justify-center items-center"/>
        </DevNote>
    </PageSection>
  );
}
