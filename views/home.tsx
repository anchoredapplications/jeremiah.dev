import ThemeToggle from "@/components/theme-toggle";
import TypeHeading from "@/components/type-heading";
import { getDictionary } from '@/dictionaries';

export default function Home() {
  const $t = getDictionary();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute right-5 top-4">
        <ThemeToggle />
      </div>
      <div>
        <TypeHeading stack={$t.home.typeHeading}/>
      </div>
    </main>
  );
}
