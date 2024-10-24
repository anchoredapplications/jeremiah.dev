import PageSection from "@/components/page/page-section";
import { PageSectionVariant } from '@/types/page';
import PageSectionHeader from "@/components/page/page-section-header";
import { getDictionary } from '@/dictionaries';
import PageSectionContent from "@/components/page/page-section-content";
import { ContactForm } from "@/components/contact/contact-form";

export default function Contact() {
  const $t = getDictionary();

  return (
    <PageSection id={$t.contact.id} variant={PageSectionVariant.Primary}>
      <PageSectionHeader>{$t.contact.heading}</PageSectionHeader>
      <PageSectionContent>
        <ContactForm />
      </PageSectionContent>
    </PageSection>
  );
}
