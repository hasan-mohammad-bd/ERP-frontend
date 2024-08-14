import { siteConfig } from "@/coonfig/site";
import { cn } from "@/utils";

export default function Footer() {
  return (
    <footer>
      <p
        className={cn(
          "flex mt-4 px-5 justify-between py-3 text-sm bg-primary text-primary-foreground font-bold"
        )}
      >
        <div>
          © {new Date().getFullYear()} {siteConfig.name}
        </div>
        <div>
          Contact Us:{" "}
          <a className="" href="tel:0123456789">
            0123456789
          </a>
        </div>
      </p>
    </footer>
  );
}
