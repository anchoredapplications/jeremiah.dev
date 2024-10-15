import PageSection from '@/components/page/page-section';
import { getDictionary } from '@/dictionaries';
import { PageSectionVariant } from '@/types/page';

export default function Footer() {
  const $t = getDictionary();
  const currentYear = new Date().getFullYear();

  return (
    <PageSection id="footer" variant={PageSectionVariant.Footer}>
      <p className='font-extralight text-sm'>&copy; {currentYear} {$t.footer.copyright}</p>
    </PageSection>
  );
}
