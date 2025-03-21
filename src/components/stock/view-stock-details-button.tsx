import { FunctionComponent } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

interface ViewStockDetailsButtonProps {
  stockSymbol: string;
}

const VIEW_STOCK_TOOLTIP_ID = "view-stock";

export const ViewStockDetailsButton: FunctionComponent<ViewStockDetailsButtonProps> = ({ stockSymbol }) => (
  <>
    <Link href={`/stock/${stockSymbol}`} className="flex gap-3 justify-center" data-tooltip-id={VIEW_STOCK_TOOLTIP_ID}>
      <EyeIcon className="size-6 text-gray-500" />
    </Link>
    <Tooltip id={VIEW_STOCK_TOOLTIP_ID} content="View stock details" />
  </>
);
