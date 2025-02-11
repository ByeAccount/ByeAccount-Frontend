import { Step } from "./Step.ts";

export type Website = {
  id: number;
  name: string;
  logo_url: string;
  website_url: string;
  deletion_url: string;
  steps: Step[];
  created_at: string;
  updated_at: string;
}