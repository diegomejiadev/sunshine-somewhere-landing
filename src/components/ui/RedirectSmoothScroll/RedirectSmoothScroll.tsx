"use client";

import { SmoothScrolling } from "@/utils/scroll-smooth";

export const RedirectSmoothScroll = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return <button onClick={() => SmoothScrolling(id)}>{children}</button>;
};
