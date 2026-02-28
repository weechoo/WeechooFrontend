"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface AddModalContainerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function AddModalContainer({
  open,
  onOpenChange,
  title,
  description,
  children,
}: AddModalContainerProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-4 gap-0">
        <DialogHeader className="pb-4">
          <DialogTitle className="font-medium text-neutral-black">
            {title}
          </DialogTitle>
          {description && (
            <DialogDescription className="text-sm text-neutral-100">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
