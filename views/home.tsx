import PageSection, { PageSectionVariant } from "@/components/page-section";
import ThemeToggle from "@/components/theme-toggle";
import TypeHeading from "@/components/type-heading";
import { getDictionary } from '@/dictionaries';

export default function Home() {
  const $t = getDictionary();

  return (
    <PageSection variant={PageSectionVariant.Primary}>
      <span className="absolute right-0">
        <ThemeToggle />
      </span>
      <div className="w-full h-full flex flex-col justify-center items-center my-64">
        <TypeHeading stack={$t.home.typeHeading}/>
      </div>
    </PageSection>
  );
}
