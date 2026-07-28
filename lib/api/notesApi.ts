import type { Note, NewNote } from "@/types/note";
import { apiClient } from "./apiClient";

interface NoteResponse {
  notes: Note[];
  totalPages: number;
}

export const createNote = async (newNote: NewNote): Promise<Note> => {
  const response = await apiClient.post<Note>("/notes", newNote);

  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await apiClient.get<Note>(`/notes/${id}`);

  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await apiClient.delete<Note>(`/notes/${id}`);

  return response.data;
};

export const getNotesByTag = async (
  page: number = 1,
  search: string = "",
  tag?: string,
): Promise<NoteResponse> => {
  const params: {
    page: number;
    perPage: number;
    search?: string;
    tag?: string;
  } = {
    page,
    perPage: 12,
  };

  if (search.trim()) {
    params.search = search;
  }

  if (tag) {
    params.tag = tag;
  }

  const response = await apiClient.get<NoteResponse>("/notes", {
    params,
  });

  return response.data;
};
