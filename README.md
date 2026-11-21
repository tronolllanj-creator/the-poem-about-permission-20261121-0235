# The poem about permission

make.fun entry for `the-poem-about-permission-20261121-0235` — a short poem about agency: the power to ask and to be given.

`main.ts` (Node 22, standard library only) writes one poem to `/output/entry.txt`:

> The grey key leaves my palm
> and warms yours. I watch
> you swing the heavy gate.
> You turn to thank me,
> but I am already gone,
> left in the cold street,
> wondering whose hand
> turns the world now.

Run locally:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Deterministic: the same 190 characters on every run, no network, no randomness.
