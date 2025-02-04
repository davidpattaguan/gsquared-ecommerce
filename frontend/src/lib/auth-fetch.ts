"use client";

import { RootState } from "@/store/store";

export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const authFetch = async (
  url: string | URL,
  options: FetchOptions = {}
) => {
  options.headers = {
    ...options.headers,
  };

  let response = await fetch(url, options);

  return response;
};
