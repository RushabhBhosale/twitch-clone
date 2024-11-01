"use client";

import { updateStream } from "@/actions/stream";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { useTransition } from "react";
import { toast } from "sonner";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
  field: FieldTypes;
  label: string;
  value: boolean;
}

const ToggleCard = ({ field, label, value = false }: ToggleCardProps) => {
  const [isPending, startTransition] = useTransition();
  const onChange = () => {
    startTransition(() => {
      updateStream({
        [field]: !value,
      })
        .then(() => toast.success("Chat Settings updated!"))
        .catch(() => toast.error("Failed to update chat settings"));
    });
  };
  return (
    <div className="p-6 bg-muted rounded-xl">
      <div className="flex items-center justify-between">
        <div className="font-semibold shrink-0">{label}</div>
        <div className="space-y-2">
          <Switch
            disabled={isPending}
            onCheckedChange={onChange}
            checked={value}
          >
            {value ? "On" : "Off"}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default ToggleCard;

export const ToggleCardSkeleton = () => {
  return <Skeleton className="p-10 w-full rounded-xl" />;
};
