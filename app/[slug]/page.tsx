import GoBack from "@/components/GoBack";
export default async function Page({ params }: { params: { slug: string } }) {
  const { default: Doc } = await import(`@/content/${params.slug}.mdx`);
  return (
    <main>
      <div className="max-w-screen-xl mx-auto py-4">
        <GoBack />
      </div>
      <Doc />
    </main>
  );
}
