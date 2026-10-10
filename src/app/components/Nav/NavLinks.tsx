import LinkItem from "./LinkItem";

interface categoryType {
    id: string,
    slug:string,
    nameBn: string,
    icon: string
}

const NavLinks = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/categories');
    const data:categoryType[] = await res.json();
 
    console.log(data);
    
    
    return (
        <div className='flex gap-2 max-w-7xl mx-auto py-5  overflow-x-auto px-4'>
            {data.map((n) => (
               
             
                <LinkItem 
                    key={n.id} 
                    slug={n.slug} 
                    icon={n.icon} 
                    nameBn={n.nameBn} 
                />
            ))}
        </div>
    );
};

export default NavLinks;