import NotesPage from "@/components/NotesPage/NotesPage";

type Props = {
  params: {
    slug?: string[];
  };
};

export default async function FilterNotesPage({ params }: Props) {
  const tagFromUrl = params.slug?.[0];

  const tag = tagFromUrl === "all" ? undefined : tagFromUrl;

  return <NotesPage tag={tag} />;
}
