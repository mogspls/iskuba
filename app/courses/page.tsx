import Header from "@/components/layout/Header"
import Iskuba from "@/components/layout/Iskuba"
export default function Courses() {
	return (
		<>
			<Header />
			<Iskuba/>
			<main className="min-h-screen h-full w-full">
				<section className="max-w-screen-xl mx-auto w-full lg:px-4 lg:py-4 flex gap-4 items-center lg:flex-row flex-col-reverse">
					<div className="flex-1 px-4 lg:px-0 py-4">
						<div>
							<h6 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">COURSES</h6>
							<h1 className="font-bold text-black text-2xl md:text-4xl">Not just a course. A foundation for a lifetime of diving.</h1>
						</div>
						<div className="flex flex-col gap-4 py-4">
							<p>When you train with us, you’re not just checking a box—you’re gaining real skills, real confidence, and a mentor who’s invested in your growth. With over 20 years of experience and a teaching style that’s firm, focused, and deeply rewarding, we don’t just get you certified—we make sure you’re ready.</p>
							<p>Whether it’s your first breath underwater or your first step toward becoming a dive professional, we’ll meet you where you are—and challenge you to go further.</p>
						</div>
					</div>
					<div className="lg:flex-[1.5]">
						<img src="/images/courses.jpg" alt="Courses Hero" className="w-full h-auto object-cover lg:rounded-lg lg:shadow-lg aspect-video object-top-left" />
					</div>
				</section>
				<section className="bg-foreground/10 min-h-2/4 py-4 px-4">
					<div className="max-w-screen-xl mx-auto w-full lg:px-4 lg:py-4 flex gap-2 flex-col">
						<div className="py-4">
							<h6 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">EXPERIENCE PROGRAMS</h6>
							<h1 className="font-bold text-black text-2xl md:text-4xl">Curious? Start here.</h1>
						</div>
						<div>
							<p>Not sure about taking a certification course just yet? We got you covered.</p>
							<p>These no-commitment, low-pressure programs are ideal for trying the water before fully committing.</p>
						</div>
					</div>
					<div className="max-w-screen-xl mx-auto w-full py-4">
						<div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 md:flex-row gap-4 flex-wrap min-w-96">
							<div className="bg-white rounded-2xl shadow-xs py-4 px-6 flex-1">
								<h1 className="font-bold text-black text-xl md:text-2xl">
									Bubblemaker
								</h1>
								<h4 className="pt-2 font-bold">COURSE DURATION: 2 hours</h4>
								<ul className="px-2.5 py-2 list-disc">
									<li className="text-xs">Minimum age 8 years old</li>
									<li className="text-xs">2m/6ft max</li>
								</ul>
								<p>For kids aged 8 and up. Big smiles, little bubbles&mdash; this is where the dream begins.</p>
							</div>
							<div className="bg-white rounded-2xl shadow-xs py-4 px-6 flex-1">
								<h1 className="font-bold text-black text-xl md:text-2xl">
									Discover Scuba Diving
								</h1>
								<h4 className="pt-2 font-bold">COURSE DURATION: 2 hours</h4>
								<ul className="px-2.5 py-2 list-disc">
									<li className="text-xs">Minimum age 10 years old</li>
									<li className="text-xs">12m/40ft max</li>
								</ul>
								<p>Never dived before? We've got you. Get a taste of scuba in a controlled, guided session in the pool, and in open water—perfect for travelers or the just-curious.</p>
							</div>
							<div className="bg-white rounded-2xl shadow-xs py-4 px-6 flex-1">
								<h1 className="font-bold text-black text-xl md:text-2xl">
									Discover Snorkeling
								</h1>
								<h4 className="pt-2 font-bold">COURSE DURATION: 2 hours</h4>
								<ul className="px-2.5 py-2 list-disc">
									<li className="text-xs">Minimum age 8 years old</li>
								</ul>
								<p>No tanks required. Explore vibrant reefs from the surface with an experienced guide by your side.</p>
							</div>
							<div className="bg-white rounded-2xl shadow-xs py-4 px-6 flex-1">
								<h1 className="font-bold text-black text-xl md:text-2xl">
									Advanced Snorkeling
								</h1>
								<h4 className="pt-2 font-bold">COURSE DURATION: 2 hours</h4>
								<ul className="px-2.5 py-2 list-disc">
									<li className="text-xs">Minimum age 12 years old</li>
									<li className="text-xs">12m max</li>
								</ul>
								<p>For confident snorkelers ready to push deeper. We’ll teach you the art of duck diving, proper finning, and how to get the most from your breath.</p>
							</div>
						</div>
					</div>
				</section>
				<section className="p-4">
					<div className="max-w-screen-xl mx-auto w-full lg:px-4 lg:py-4 flex gap-2 flex-col">
						<div className="py-4">
							<h6 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">CERTIFICATION COURSES</h6>
							<h1 className="font-bold text-black text-2xl md:text-4xl">Your path to becoming a real diver&mdash;done right.</h1>
						</div>
						<div>
							<p>We believe in building divers, not just certifying them. That means clear instruction, patient coaching, and high standards that give you true underwater confidence. Our course fees include equipment rentals and professional fees for entry-level courses. 
							{/* You have the option to purchase your elearning course materials HERE. */}
							</p>
						</div>
					</div>

				</section>
				<section>

				</section>
			</main>
		</>
	)
}