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
import { Separator } from '@/components/ui/separator';
import { HoverTooltip } from '@/components/shared/hover-tooltip';

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
        <div className='w-full font-serif flex flex-col items-center justify-center p-4 xl:w-3/4'>
          {/* Degree */}
          <span className='flex justify-between w-full'>
            <span className='flex flex-col'>
              <h2 className='text-2xl lg:text-3xl xl:text-4xl'>
                {academics.degree}
              </h2>
              <HoverTooltip tooltip={$t.academics.cofo} className='flex justify-left hover:underline'>
                <a href={$t.academics.cofo} className='text-xl font-light xl:text-2xl'>
                  {academics.institution}
                </a>
              </HoverTooltip>
            </span>
            <h3 className='text-xl font-light lg:text-2xl xl:text-3xl'>
              {academics.startDate} - {academics.endDate}
            </h3>
          </span>
          {/* Focuses */}
          <div className="flex flex-col text-start gap-2 lg:flex-row">
              <Focus focus={academics?.focuses?.[0]}/>
              <Separator orientation='vertical' className='h-80 flex self-center hidden lg:block'/>
              <Focus focus={academics?.focuses?.[1]}/>
              <Separator orientation='vertical' className='h-80 flex self-center hidden lg:block'/>
              <Focus focus={academics?.focuses?.[2]}/>
          </div>
        </div>
        <CommendationList commendations={academics.commendations || []} />
      </PageSectionContent>
    </PageSection>
  );
}
