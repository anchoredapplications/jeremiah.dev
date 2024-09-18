import PageSection from '@/components/page-section';
import { getDictionary } from '@/dictionaries';
import { PageSectionVariant } from '@/types/PageVariant';

export default function Footer() {
  const $t = getDictionary();
  const currentYear = new Date().getFullYear();

  return (
    <PageSection id="footer" variant={PageSectionVariant.Footer}>
      <p>&copy; {currentYear} {$t.footer.copyright}</p>
    </PageSection>
  );
}
