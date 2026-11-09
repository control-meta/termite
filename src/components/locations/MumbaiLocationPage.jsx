"use client";

import React from "react";
import LocationPageTemplate, { CITY_CONFIGS } from "./LocationPageTemplate";

export function MumbaiLocationPage() {
  return <LocationPageTemplate data={CITY_CONFIGS.mumbai} />;
}

export default MumbaiLocationPage;
