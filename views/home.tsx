import PageSection, { PageSectionVariant } from "@/components/page-section";
import TypeHeading from "@/components/type-heading";
import { getDictionary } from '@/dictionaries';

export default function Home() {
  const $t = getDictionary();

  return (
    <PageSection id={$t.home.id} variant={PageSectionVariant.Primary}>
        <TypeHeading stack={$t.home.typeHeading} className="w-full h-full flex flex-col justify-center items-center"/>
    </PageSection>
  );
}
