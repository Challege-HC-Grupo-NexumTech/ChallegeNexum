// Tipos básicos (number, string, boolean, object)
export type ID = number;
export type Name = string;
export type Active = boolean;

export interface User {
  id: ID;
  name: Name;
  age: number;
  active: Active;
}

// Union Types (ex.: status que pode ser 'online' | 'offline' | 'busy')
export type Status = "online" | "offline" | "busy";

// Intersection Types (ex.: combinar perfil com permissões)
export interface Profile {
  bio?: string;
  avatarUrl?: string;
}
export interface Permissions {
  canEdit: boolean;
  canDelete: boolean;
}
export type UserWithPermissions = User & Profile & Permissions;
