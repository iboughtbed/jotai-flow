import { currentUser } from "@clerk/nextjs/server";

import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  const user = await currentUser();

  return (
    <div className="relative flex flex-col">
      <SiteHeader user={user} />
      <main className="relative flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
