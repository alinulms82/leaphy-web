import { JsonLd } from "./JsonLd";
import { PortableLink } from "./primitives";
import { site } from "@/lib/site";

export function Breadcrumbs({
  items,
  homeLabel = "Home",
}: {
  items: { name: string; href: string }[];
  homeLabel?: string;
}) {
  const all = [{ name: homeLabel, href: "/" }, ...items];

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          {all.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden>/</span>}
              {index === all.length - 1 ? (
                <span className="text-slate-700">{item.name}</span>
              ) : (
                <PortableLink href={item.href} className="hover:text-brand-700">
                  {item.name}
                </PortableLink>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${site.url}${item.href === "/" ? "" : item.href}`,
          })),
        }}
      />
    </>
  );
}
