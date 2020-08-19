# deno_tmp_dir

[![tag](https://img.shields.io/github/release/justjavac/deno_tmp_dir)](https://github.com/justjavac/deno_tmp_dir/releases)
[![Build Status](https://github.com/justjavac/deno_tmp_dir/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_tmp_dir/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_tmp_dir)](https://github.com/justjavac/deno_tmp_dir/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.3-green.svg)](https://github.com/denoland/deno)

Returns the path to the user's tmp directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

|Platform | Value                  | Example                                                    |
| ------- | ---------------------- | ---------------------------------------------------------- |
| Linux   | `TMPDIR`               | /tmp                                                       |
| macOS   | `TMPDIR`               | /tmp                                                       |
| Windows | `{TMP}`                | C:\Users\justjavac\AppData\Local\Temp                      |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import tmpDir from "https://deno.land/x/tmp_dir/mod.ts";

tmpDir();
// Lin: "/tmp"
// Mac: "/tmp"
// Win: "C:\Users\justjavac\AppData\Local\Temp"
```

## License

[deno_tmp_dir](https://github.com/justjavac/deno_tmp_dir) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
