import React from "react"

import { ContextProviderComponent } from "./src/components/Context"

export const wrapRootElement = ({ element }) => (
  <ContextProviderComponent>{element}</ContextProviderComponent>
)