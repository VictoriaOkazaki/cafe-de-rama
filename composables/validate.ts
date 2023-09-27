import { ZodError, ZodObject } from "zod";

export function validateZod(
  o: ZodObject<any>,
  value: any
): { validateErrors: string | null } {
  try {
    o.parse(value);
  } catch (err: any) {
    return {
      validateErrors: (err as ZodError).issues
        .map((e) => `(${e.path[0]}: ${e.message})`)
        .join(", "),
    };
  }

  return { validateErrors: null };
}
