"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
export default function GoBack() {
	const router = useRouter();
	return (
		<button 
			className={"pr-4 py-1 text-center uppercase font-semibold rounded cursor-pointer text-xs flex gap-1 items-center text-black/75 hover:bg-black/10 duration-75"} 
			onClick={() => router.back()}
		>
			<ChevronLeft/> 
			Go back
		</button>
	)
}