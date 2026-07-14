"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;

export function SheetContent({ children }: { children: React.ReactNode }) {
  return <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-50 bg-black/35 data-[state=open]:animate-in" /><Dialog.Content className="fixed inset-y-0 right-0 z-50 w-[92vw] max-w-sm overflow-y-auto border-l bg-card p-5 shadow-xl"><div className="mb-5 flex items-center justify-between"><Dialog.Title className="text-lg font-semibold">Фильтры</Dialog.Title><Dialog.Close className="flex size-10 items-center justify-center rounded-lg hover:bg-muted" aria-label="Закрыть"><X className="size-5" /></Dialog.Close></div>{children}</Dialog.Content></Dialog.Portal>;
}
