import type { Project } from "@/types/project";
import { wavefall } from "./wavefall";
import { headRecorder } from "./head-recorder";
import { wisebudget } from "./wisebudget";
import { myUniversity } from "./my-university";
import { myUniversityServer } from "./my-university-server";

export const personalProjects: Project[] = [
  wavefall,
  headRecorder,
  wisebudget,
  myUniversity,
  myUniversityServer,
];
