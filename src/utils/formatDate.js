export function formatDate(createdAt) {
  if (!createdAt) return "";
  const [year, month, day] = createdAt.split("-");
  return `${year}년 ${Number(month)}월 ${Number(day)}일`;
}
