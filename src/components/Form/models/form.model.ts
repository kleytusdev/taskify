import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z
      .string()
      .email("El email no es válido")
      .min(1, "El email es obligatorio"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type FormValues = z.infer<typeof schema>;
