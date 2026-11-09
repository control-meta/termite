"use client";

import React from "react";
import LocationPageTemplate, { CITY_CONFIGS } from "./LocationPageTemplate";

export function DelhiLocationPage() {
  return <LocationPageTemplate data={CITY_CONFIGS.delhi} />;
}

export default DelhiLocationPage;
