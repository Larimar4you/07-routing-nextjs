"use client";

import NotesPage from "@/components/NotesPage/NotesPage";

type Props = {
  tag?: string;
};

export default function NotesClient({ tag }: Props) {
  return <NotesPage tag={tag} />;
}
