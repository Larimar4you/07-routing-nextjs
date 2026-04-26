import NotesPage from "@/components/NotesPage/NotesPage";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function FilterNotesPage({ params }: Props) {
  const { slug } = await params;

  const tagFromUrl = slug[0];
  const tag = tagFromUrl === "all" ? undefined : tagFromUrl;

  return <NotesPage tag={tag} />;
}
