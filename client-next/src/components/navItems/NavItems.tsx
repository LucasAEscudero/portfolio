"use client";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  name: string;
  link: string;
}

export default function NavItems({ name, link }: Props) {
  const router = useRouter();

  return (
    <li
      className="cursor-pointer hover:bg-slate-600 p-1 rounded text-center"
      onClick={() => router.push(link)}
    >
      {name}
    </li>
  );
}
