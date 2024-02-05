import { TTechnology } from "@/utils/types";

interface Props {
  technology: TTechnology;
}

export default function TechnologyCard({ technology }: Props) {
  return <article>{technology.name}</article>;
}
