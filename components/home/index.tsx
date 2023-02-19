import { SedansIcon } from "../icons";
import Card from "../ui/Card";

type Props = {};

function Home({}: Props) {
  console.log("home ");
  return (
    <div className="bg-black">
      <Card title="Sedan" description="sdknosdn" icon={<SedansIcon />} />
      <Card title="sdsd" description="sdknosdn" icon={<SedansIcon />} />
      <Card title="Sedasddkjdflkefn" description="sdknosdn" icon={<SedansIcon />} />
    </div>
  );
}

export default Home;
