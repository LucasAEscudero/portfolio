"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface Props {
  name: string;
  link: string;
}

export default function NavItems({ name, link }: Props) {
  const router = useRouter();
  const path = usePathname();

  return (
    <li
      className={`cursor-pointer hover:border-b-1 p-1 text-center ${
        link === path && "border-b-2"
      } ${path === "/" && link === "#profile" && "border-b-2"}`}
      onClick={() => router.push(link)}
    >
      {name}
    </li>
  );
}
