import {
  BookmarkSimpleIcon,
  FolderIcon,
  GearIcon,
  PlusIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import SidebarItem from "../SidebarItem";
import UserProfile from "../UserProfile";
import { categories } from "../../data/categories";

export default function Sidebar({
  selectedCategoryId,
  onSelectCategory,
  bookmarks,
}) {
  return (
    <aside className="flex flex-col justify-between bg-sidebar w-64 min-h-screen border-r border-border">
      <div className="px-3 py-5">
        <div className="flex items-center mb-5 text-text">
          <div className="flex items-center justify-center gap-2">
            <img src="./icons/logo.svg" className="w-8" />
            <span className="mt-1 text-[22px] font-logo text-primary font-bold">
              북마크온
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-6">
          <SidebarItem
            icon={BookmarkSimpleIcon}
            label="모든 북마크"
            count={bookmarks.length}
            isActive={selectedCategoryId === "all"}
            onClick={() => onSelectCategory("all")}
          />
          <SidebarItem icon={TrashIcon} label="휴지통" count={0} />
          <SidebarItem icon={GearIcon} label="설정" />
          <SidebarItem icon={PlusIcon} label="추가" />
          <hr className="text-border mt-3" />
        </div>

        <div className="text-[13px] font-semibold text-muted mb-2">
          카테고리
        </div>

        <div className="flex flex-col gap-1">
          {categories.map((c) => {
            const count = bookmarks.filter((b) => b.categoryId === c.id).length;
            return (
              <SidebarItem
                key={c.id}
                icon={FolderIcon}
                label={c.label}
                count={count}
                isActive={selectedCategoryId === c.id}
                onClick={() => onSelectCategory(c.id)}
              />
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-0">
        <UserProfile />
      </div>
    </aside>
  );
}
