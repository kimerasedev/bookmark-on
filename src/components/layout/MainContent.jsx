import { bookmarks } from "../../data/bookmarks";
import { categories } from "../../data/categories";
import BookmarkCardGrid from "../BookmarkCardGrid";

export default function MainContent({ selectedCategoryId }) {
  const filteredBookmarks =
    selectedCategoryId === "all"
      ? bookmarks
      : bookmarks.filter((b) => b.categoryId === selectedCategoryId);

  // categoryId로 label 찾기
  const getCategoryLabel = (categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    return category ? category.label : "전체";
  };

  return (
    <div className="px-6 py-6">
      <div className="grid grid-cols-3 gap-5  lg:grid-cols-4">
        {filteredBookmarks.map((b) => (
          <BookmarkCardGrid
            key={b.id}
            title={b.title}
            url={b.url}
            thumbnail={b.thumbnail}
            categoryLabel={getCategoryLabel(b.categoryId)}
            createdAt={b.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
