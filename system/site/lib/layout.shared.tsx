import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

import { PhotographyMark } from "@/components/photography-mark";
import { SignIn } from "@/components/sign-in";
import { appTitle } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // The record's display title (instance.md's H1), not the machine slug.
      // Truncated: a long title forced horizontal scroll on mobile without it
      // (found live, 2026-08-18).
      title: (
        <span className="flex max-w-[68vw] items-center gap-2.5 sm:max-w-none">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-fd-border bg-fd-muted text-fd-primary">
            <PhotographyMark className="size-[1.125rem]" />
          </span>
          <span className="truncate font-display text-[0.9375rem] font-semibold tracking-[-0.005em]">
            {appTitle}
          </span>
        </span>
      ),
    },
    // `secondary` puts it at the navbar's trailing edge, beside the theme
    // toggle. SignIn renders null when no issuer is configured, so a record
    // that does not offer sign-in shows nothing rather than an empty slot.
    links: [{ type: "custom", secondary: true, children: <SignIn /> }],
  };
}
