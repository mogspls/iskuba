export default async function Page({ params }: { params: { slug: string } }) {
  const { default: Doc } = await import(`@/content/${params.slug}.mdx`);
  return <Doc />;
}
