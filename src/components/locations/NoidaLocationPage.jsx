"use client";

import React from "react";
import LocationPageTemplate, { CITY_CONFIGS } from "./LocationPageTemplate";

export function NoidaLocationPage() {
  return <LocationPageTemplate data={CITY_CONFIGS.noida} />;
}

export default NoidaLocationPage;
