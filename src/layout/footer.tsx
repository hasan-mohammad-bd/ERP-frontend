import { siteConfig } from "@/coonfig/site";
import { cn } from "@/utils";

export default function Footer() {
  return (
    <footer>
      <p
        className={cn(
          "flex mt-4 px-5 justify-between py-2 text-sm bg-primary text-primary-foreground font-medium"
        )}
      >
        <div>
          © {new Date().getFullYear()} {siteConfig.name}
        </div>
        <div className="space-x-2">
          <span>Contact Us:</span>
          <a href="tel:01760807974">01760807974,</a>
          <a href="tel:01744569317">01744569317</a>
        </div>
      </p>
    </footer>
  );
}
