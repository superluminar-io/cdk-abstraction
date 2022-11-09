#!/usr/bin/env node

import { ConstructMode, CustomApp } from "./base";
import { ConstructOne, ConstructTwo } from "./constructs";

const app = new CustomApp({
  mode: ConstructMode.Nested,
  account: "12345678900",
  region: "eu-central-1",
});

app.addConstruct(ConstructOne);
app.addConstruct(ConstructTwo);
