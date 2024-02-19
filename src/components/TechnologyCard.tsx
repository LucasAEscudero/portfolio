import Image from "next/image";
import { TTechnology } from "@/lib/types";

interface Props {
  technology: TTechnology;
}

export default function TechnologyCard({ technology: { name, url } }: Props) {
  return (
    <div className="flex flex-col items-center flex-wrap mx-2">
      <Image src={url} alt={`${name}-icon`} width={55} height={55} />
      <h3>{name}</h3>
    </div>
  );
}
