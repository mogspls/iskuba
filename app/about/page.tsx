import Header from "@/components/layout/Header";
import Iskuba from "@/components/layout/Iskuba";

export default function About(){
	return (
		<>
			<Header/>
			<Iskuba/>
			<main className="min-h-screen h-full w-full">
				<section id="about" className="bg-foregound/10 h-full">
					<div className="max-w-screen-xl mx-auto w-full py-12 px-4">
						<div className="flex flex-col md:flex-row gap-12 items-center">
							<div className="py-4 [&>p]:py-2 md:[&>p]:text-xl flex-1">
								<h5 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">ABOUT US</h5>
								<h2 className="font-black text-2xl md:text-4xl">Built on trust. Backed by experience. Inspired by every new diver.</h2>
								<div className="flex flex-col gap-4 py-4">
									<p>Welcome to iSkuba Diving Center, proudly based at Mayumi Resort, where crystal-clear waters and years of shared experience come together to create something truly personal.</p>
									<p>This center is the result of a deep commitment to diving and mentorship, to build a space where divers could grow with purpose along their journey. At our core, we believe diving should be taught with care, discipline, and respect.</p>
									<p>We don’t rush certifications. We don’t cut corners. What we offer is time, attention, and a training experience designed to make every diver confident, capable, and ready for real-world diving.</p>
								</div>
							</div>
							<div className="flex-1">
								<img src="/images/about us.webp" alt="About Us" className="aspect-[4/3.5] object-center object-cover"/>
							</div>
						</div>
					</div>
				</section>
				<section className="bg-foreground/10">
					<div className="max-w-screen-xl mx-auto w-full py-12 px-4">

					</div>
				</section>
			</main>
		</>
	)
}