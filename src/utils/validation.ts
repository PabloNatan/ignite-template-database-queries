import { validateOrReject, ValidationError } from "class-validator";
import { AppError } from "../errors/AppError";

export async function validation(data: any): Promise<void> {
  const messages: string[] = [];
  try {
    await validateOrReject(data);
  } catch (errors: any) {
    errors?.forEach((error: ValidationError) => {
      messages.push(...Object.values(error?.constraints || {}));
    });
  }

  if (messages.length > 0) {
    throw new AppError(messages);
  }
}
