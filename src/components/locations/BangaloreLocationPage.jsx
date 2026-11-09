"use client";

import React from "react";
import LocationPageTemplate, { CITY_CONFIGS } from "./LocationPageTemplate";

export function BangaloreLocationPage() {
  return <LocationPageTemplate data={CITY_CONFIGS.bangalore} />;
}

export default BangaloreLocationPage;
