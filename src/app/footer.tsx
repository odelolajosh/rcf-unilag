import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="section py-12 md:py-16 flex flex-col gap-16">
        {/*Subscribe to our newsletter*/}
        <div className="mx-auto w-full max-w-xl flex flex-col gap-6">
          <h2 className="uppercase font-bold text-lg tracking-wider text-center">
            Want to get the latest Updates from us?
          </h2>
          <Input placeholder="Your Email" />
          <Button>Subscribe</Button>
        </div>

        <div />

        {/*Links*/}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
          <div className="md:col-span-2 space-y-4">
            <Image
              src="/logo.png"
              alt="RCF UNILAG"
              width={54}
              height={54}
              loading="eager"
            />
            <p>A safe haven for UNILAG students and environs</p>
          </div>
          <FooterColumn
            title="Connect"
            links={[
              { text: "Become a member", href: "#" },
              { text: "Join the workforce", href: "#" },
              { text: "Study partners", href: "#" },
            ]}
          />
          <FooterColumn
            title="Resources"
            links={[
              { text: "Academic drive", href: "#" },
              { text: "Gallery", href: "#" },
              { text: "RCF Wallpapers", href: "#" },
            ]}
          />
          <FooterColumn
            title="Media"
            links={[
              { text: "Watch Online", href: "#" },
              { text: "Sermons", href: "#" },
              { text: "Blog", href: "#" },
            ]}
          />
        </div>

        <Separator className="bg-muted-foreground/30" />

        <div className="flex flex-wrap gap-4 items-center justify-between">
          <small>&copy; 2025 | The Redeemed Christian Fellowship, UNILAG</small>
          <div className="flex items-center gap-4">
            <Link href="#">
              <Image
                src="/brands/instagram.svg"
                alt="Instagram"
                className="invert-100"
                width={16}
                height={16}
              />
            </Link>
            <Link href="#">
              <Image
                src="/brands/youtube.svg"
                alt="YouTube"
                className="invert-100"
                width={16}
                height={16}
              />
            </Link>
            <Link href="#">
              <Image
                src="/brands/x.svg"
                alt="X"
                className="invert-100"
                width={16}
                height={16}
              />
            </Link>
            <Link href="#">
              <Image
                src="/brands/facebook.svg"
                alt="Facebook"
                className="invert-100"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { text: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="uppercase font-light text-muted-foreground text-sm">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.text}>
            <Link href={link.href} className="text-sm hover:underline">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
