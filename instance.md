---
format: 2
name: photography-ksor
title: Practical Photography Fundamentals
description: Governed practical photography fundamentals for beginners, hobbyists, and photography enthusiasts using smartphones or dedicated cameras.
toolchain:
  requires: ">=0.0.60"
  scaffolded: "0.0.60"
# `database.dsn_env` names the environment variable holding your Postgres DSN —
# never the DSN itself, which belongs in .env. It is filled in because naming a
# variable costs nothing and needs no database: `pnpm dev` and `pnpm build` do
# not read it, and the value only has to exist when you climb to the served
# rung. To climb: copy .env.example to .env and set KSOR_DB_URL, then
# `pnpm provision` once (schema + grant), then `pnpm refresh` to PUBLISH the
# record, then `pnpm serve`. Serving does not publish — that is deliberate, and
# skipping refresh serves nothing.
# Nothing else here is required:
# `embedding:` already defaults to Gemini at 1536 dimensions, and leaving
# `retrieval:` out starts you with the abstention gate off and honest about it
# (turn it on afterwards with `ksor calibrate`, once the record is serving).
database:
  dsn_env: KSOR_DB_URL
# Where agents reach this record's MCP surface, and the semver it publishes as.
# Both go into /.well-known/mcp/server.json, the document an agent reads to
# DISCOVER this record instead of being told the URL. Leave mcp_url out until
# the server is actually published: an invented URL is worse than none.
# mcp_url: https://records.example.com/mcp
# version: 0.1.0
---

This KSoR is the authoritative governed knowledge record for practical
photography fundamentals intended for beginners, hobbyists, and photography
enthusiasts using smartphones or dedicated cameras. It covers universal,
basic photography principles that apply broadly across both device types.

It does not claim authority over advanced or specialized photography,
device- or model-specific menus and settings, video, drones, advanced editing
workflows, or other specialist areas. For questions outside this boundary,
state that the topic is not covered by this record rather than extrapolating
beyond its governed knowledge.
