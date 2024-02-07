import { TTechnology } from "@/lib/types";
import Image from "next/image";

interface Props {
  technology: TTechnology;
}

export default function TechnologyCard({ technology: { name, url } }: Props) {
  return (
    <div className="flex flex-col items-center flex-wrap mx-2">
      <Image src={url} alt={`${name}-icon`} width={75} height={75} />
      <h3>{name}</h3>
    </div>
  );
}
