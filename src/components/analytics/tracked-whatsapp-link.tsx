"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";

type TrackedWhatsAppLinkProps = ComponentPropsWithoutRef<"a"> & {
  service: string;
  ctaLocation: string;
};

type DataLayerWindow = Window & {
  dataLayer?: Record<string, unknown>[];
};

export function TrackedWhatsAppLink({
  service,
  ctaLocation,
  onClick,
  ...props
}: TrackedWhatsAppLinkProps) {
  const trackLead = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    const analyticsWindow = window as DataLayerWindow;
    analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? [];
    analyticsWindow.dataLayer.push({
      event: "generate_lead",
      method: "whatsapp",
      service,
      cta_location: ctaLocation,
      page_path: window.location.pathname,
    });
  };

  return <a {...props} onClick={trackLead} />;
}
