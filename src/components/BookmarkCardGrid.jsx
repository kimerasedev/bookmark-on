import { ArrowSquareOutIcon, FolderIcon } from "@phosphor-icons/react";
import { formatDate } from "../utils/formatDate";

export default function BookmarkCardGrid({
  title,
  url,
  thumbnail,
  categoryLabel,
  createdAt,
}) {
  return (
    <div className="w-full max-w-[385px] bg-bg border border-[#333333] rounded-md overflow-hidden">
      <img src={thumbnail} className="w-full aspect-video object-cover" />
      <div className="p-3 flex flex-col gap-1">
        <span className="font-semibold line-clamp-2 text-text">{title}</span>

        <div className="flex items-center text-muted text-sm gap-1">
          <FolderIcon size={14} />
          <span>{categoryLabel}</span>
          <div>・</div>
          <span>{formatDate(createdAt)}</span>
        </div>
        <div className="flex items-center gap-1 text-muted text-sm">
          <a
            href={url}
            className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[230px] hover:underline underline-offset-2"
          >
            {url.replace(/^https?:\/\//, "")}
          </a>
          <ArrowSquareOutIcon size={15} className="shrink-0" />
        </div>
      </div>
    </div>
  );
}
