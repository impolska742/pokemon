import type { AppRouter } from "@/backend/router";
import { createReactQueryHooks } from "@trpc/react-query";

export const trpc = createReactQueryHooks<AppRouter>();
