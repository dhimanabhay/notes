import { Note } from "./types";

const STORAGE_KEY = "notes";

export function saveNotes(notes: Note[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function loadNotes(): Note[] {
  if (typeof window === "undefined") return [];
  const savedNotes = localStorage.getItem(STORAGE_KEY);
  if (savedNotes) {
    try {
      return JSON.parse(savedNotes);
    } catch (error) {
      console.error("Failed to parse notes from localStorage", error);
      return [];
    }
  }
  return [];
}

export function formatTime(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
