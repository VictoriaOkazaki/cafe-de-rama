import admin from "firebase-admin";
import { z } from "zod";
import { ZodId } from "~/types";

export function transformUser(user: admin.auth.UserRecord) {
  const customClaims = (user.customClaims || { role: "" }) as { role?: string };
  const role = customClaims.role ? customClaims.role : "";
  return {
    id: user.uid,
    email: user.email || "",
    role,
    lastSignInTime: user.metadata.lastSignInTime,
    creationTime: user.metadata.creationTime,
  };
}

const ZodUserRole = z.enum(["admin", "manager"]);

export const ZodUserAdd = z.object({
  password: z.string().min(6, "Password must contain at least 6 characters"),
  email: z.string().email("Not valid email"),
  role: ZodUserRole,
});
export type UserAdd = z.infer<typeof ZodUserAdd>;
export type UserRole = z.infer<typeof ZodUserRole>;

export const ZodUserUpdate = ZodUserAdd.partial().merge(ZodId);
export type UserUpdate = z.infer<typeof ZodUserUpdate>;

export type UserInfo = {
  uid: string;
  role: UserRole;
  email: string;
};

export async function checkUserAuthed(event: any): Promise<UserInfo> {
  const authorization = getHeader(event, "authorization");
  const token = getUserTokenByHeader(authorization);
  const unauthorizedError = {
    statusCode: 401,
    statusMessage: `Unauthorized`,
  };
  if (!token) {
    throw createError(unauthorizedError);
  }
  const userInfo = await getUserInfoByToken(token);
  if (!userInfo) {
    throw createError(unauthorizedError);
  }
  return userInfo;
}

export async function checkUserRole(event: any, allowedRoles: UserRole[]) {
  const userInfo = await checkUserAuthed(event);
  if (!allowedRoles.includes(userInfo.role)) {
    throw createError({
      statusCode: 403,
      statusMessage: `Forbidden`,
    });
  }
}

function getUserTokenByHeader(authorization?: string): string | null {
  if (!authorization) return null;
  if (!authorization.startsWith("Bearer")) {
    return null;
  }
  const split = authorization.split("Bearer ");
  if (split.length !== 2) {
    return null;
  }
  return split[1];
}

async function getUserInfoByToken(token: string): Promise<UserInfo | null> {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return {
      uid: decodedToken.uid,
      role: decodedToken.role,
      email: decodedToken.email!,
    };
  } catch (err: any) {
    console.error(`Error get user info by token`, err.message);
    return null;
  }
}
