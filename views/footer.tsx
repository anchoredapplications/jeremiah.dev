import PageSection from '@/components/page/page-section';
import { getDictionary } from '@/dictionaries';
import { PageSectionVariant } from '@/types/page';

export default function Footer() {
  const $t = getDictionary();
  const currentYear = new Date().getFullYear();

  return (
    <PageSection id="footer" variant={PageSectionVariant.Footer}>
      <p className='p-2 font-thin tracking-tight text-sm flex gap-1 items-center justify-center w-full dark:text-muted-foreground'>
        &copy; {currentYear} {$t.footer.copyright} {$t.footer.captcha.label}
        <a href={$t.footer.captcha.url} target="_blank" rel="noopener noreferrer" className='underline'>{$t.footer.captcha.captcha}</a>
      </p>
    </PageSection>
  );
}