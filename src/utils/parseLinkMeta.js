export function parseLinkMeta(data) {
  const title = data?.meta?.title || data?.url || "제목 없음";

  const description = data?.meta?.description || "";

  const thumbnail =
    data?.links?.thumbnail?.[0]?.href || "/images/default-thumbnail.jpg";

  return { title, description, thumbnail };
}
