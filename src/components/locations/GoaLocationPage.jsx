"use client";

import React from "react";
import LocationPageTemplate, { CITY_CONFIGS } from "./LocationPageTemplate";

export function GoaLocationPage() {
  return <LocationPageTemplate data={CITY_CONFIGS.goa} />;
}

export default GoaLocationPage;
