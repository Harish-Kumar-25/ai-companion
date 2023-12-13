import Categories from "@/components/Categories";
import SearchInput from "@/components/SearchInput";
import prisma from "@/prisma/client";

export default async function Home() {
	const catergories = await prisma.category.findMany();
	return (
		<>
			<section className="h-full p-4 space-y-2">
				<div className=" ">
					<SearchInput />
					<Categories data={catergories} />
				</div>
			</section>
		</>
	);
}
