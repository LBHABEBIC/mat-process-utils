import { NamedSchema } from "remultiform/database";

export type TestNamedSchema = NamedSchema<
  string,
  number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { store: { key: string; value: { value: any } } }
>;
