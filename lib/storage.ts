// export function formatDate(timestamp: number): string {
//   return new Date(timestamp).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
// }

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
