"use client";

import { useQuery } from "@tanstack/react-query";
import { getNotesByTag } from "@/lib/api";
import NoteList from "../NoteList/NoteList";

type Props = {
  tag?: string;
};

export default function NotesPage({ tag }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", tag],
    queryFn: () => getNotesByTag(tag),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading notes</p>;

  const notes = data?.notes ?? [];

  if (notes.length === 0) {
    return <p>No notes found.</p>;
  }

  return <NoteList notes={notes} />;
}
