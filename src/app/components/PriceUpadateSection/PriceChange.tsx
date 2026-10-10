import AllProducts from "./AllProducts";
import PriceSection from "./PriceSection";



interface changeType{
    id: number;
  slug: string;
  image: string;
  unit: string;
  nameBn: string;
  today: number;
  change: {
    dir: 'up' | 'down' | 'flat';
    pct: number;
  };
}

const PriceChange = async () => {
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', {
    next: { revalidate: 3600 },
  });
   if (!res.ok) {
    throw new Error('পণ্যের তথ্য লোড করা যায়নি');
  }

  const data:changeType[] = await res.json();

  const increased = data
    .filter((i) => i.change.dir === 'up')
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const decreased = data
    .filter((i) => i.change.dir === 'down')
    .sort((a, b) => a.change.pct - b.change.pct) 
    .slice(0, 6);

  return (
    <main className="  py-8 max-w-7xl mx-auto">
      <PriceSection title="আজ দাম বেড়েছে" items={increased} dir="up" />
      <PriceSection title="আজ দাম কমেছে" items={decreased} dir="down" />
      <AllProducts data={data}></AllProducts>
    </main>
  );
};

export default PriceChange;