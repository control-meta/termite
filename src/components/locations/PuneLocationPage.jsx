"use client";

import React from "react";
import LocationPageTemplate, { CITY_CONFIGS } from "./LocationPageTemplate";

export function PuneLocationPage() {
  return <LocationPageTemplate data={CITY_CONFIGS.pune} />;
}

export default PuneLocationPage;
