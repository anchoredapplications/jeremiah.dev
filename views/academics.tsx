import config from '@/config.json'
import CommendationList from "@/components/academics/commendation-list";
import PageSection from "@/components/page/page-section";
import { PageSectionVariant } from '@/types/page';
import PageSectionContent from "@/components/page/page-section-content";
import PageSectionHeader from "@/components/page/page-section-header";
import { getDictionary } from '@/dictionaries';
import { Academics as AcademicsType } from "@/types/academics";
import Focus from '@/components/academics/focus';
import { getAcademicData } from '@/server/getAcademicData';

async function loadAcademicData() {
  const data = await getAcademicData()
  return data
}

export default async function Academics() {
  const academics: AcademicsType = await loadAcademicData()
  const $t = getDictionary();

  return (
    <PageSection id={$t.academics.id} variant={PageSectionVariant.Primary} showBorder={true}>
      <PageSectionHeader>{$t.academics.heading}</PageSectionHeader>
      <PageSectionContent>
        <main className='w-3/4'>
          {/* Degree */}
          <span className='flex justify-between'>
            <span className='flex flex-col'>
              <h2 className='text-2xl'>
                {academics.degree}
              </h2>
              <h3 className='text-xl font-light'>
                {academics.institution}
              </h3>
            </span>
            <h3 className='text-xl font-light'>
              {academics.startDate}-{academics.endDate}
            </h3>
          </span>
          {/* Focuses */}
          <div className="flex flex-col text-start md:grid md:grid-cols-2  md:flex-row">
            <div className="flex  border-gray-300 md:pr-2 md:border-r">
              <Focus focus={academics.focuses[0]}/>
            </div>
            <div className="flex md:pl-2">
              <Focus focus={academics.focuses[1]}/>
            </div>
          </div>
        </main>
        <CommendationList commendations={academics.commendations || []} />
      </PageSectionContent>
    </PageSection>
  );
}
