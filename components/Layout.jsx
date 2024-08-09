import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

const fontHeading = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "700"],
});

const fontBody = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400"],
});

export default function Layout({ children }) {
  return (
    <div className={cn("antialiased", fontHeading.variable, fontBody.variable)}>
      {children}
    </div>
  );
}
