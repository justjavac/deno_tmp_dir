/** Returns the path to the user's tmp directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 * 
 * |Platform | Value                  | Example                                                    |
 * | ------- | ---------------------- | ---------------------------------------------------------- |
 * | Linux   | `TMPDIR`               | /tmp                                                       |
 * | macOS   | `TMPDIR`               | /tmp                                                       |
 * | Windows | `{TMP}`                | C:\Users\justjavac\AppData\Local\Temp                      |
 */
export default function tmpDir(): string | null {
  switch (Deno.build.os) {
    case "linux":
    case "darwin":
     return Deno.env.get("TMPDIR") ?? null;
    case "windows":
      return Deno.env.get("TMP") ?? null;
  }

  return null;
}
