import config from '@/config.json'
import CommendationList from "@/components/academics/commendation-list";
import PageSection, { PageSectionVariant } from "@/components/page-section";
import PageSectionContent from "@/components/page-section-content";
import PageSectionHeader from "@/components/page-section-header";
import { getDictionary } from '@/dictionaries';
import { Academics } from "@/types/academics";
import Focus from '@/components/academics/focus';

async function getAcademicData() {
  const res = await fetch(config.api.me.academics)
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Academics() {
  const academics: Academics = await getAcademicData()
  const $t = getDictionary();

  return (
    <PageSection id={$t.academics.id} variant={PageSectionVariant.Primary} showBorder={true}>
      <PageSectionHeader>{$t.academics.heading}</PageSectionHeader>
      <PageSectionContent>
        <div className='w-3/4'>
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
          <div className="flex flex-col text-cemter sm:grid sm:grid-cols-2  sm:flex-row">
            <div className="flex  border-gray-300 sm:pr-2 sm:justify-end sm:border-r">
              <Focus focus={academics.focuses[0]} isFirst={true}/>
            </div>
            <div className="flex sm:pl-2 sm:justify-end">
              <Focus focus={academics.focuses[1]} isLast={true}/>
            </div>
          </div>
        </div>
        <CommendationList commendations={academics.commendations || []} />
      </PageSectionContent>
    </PageSection>
  );
}
