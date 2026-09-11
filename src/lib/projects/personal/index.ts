import type { Project } from "@/types/project";
import { dustdrift } from "./dustdrift";
import { headRecorder } from "./head-recorder";
import { wisebudget } from "./wisebudget";
import { myUniversity } from "./my-university";
import { myUniversityServer } from "./my-university-server";

export const personalProjects: Project[] = [
  dustdrift,
  headRecorder,
  wisebudget,
  myUniversity,
  myUniversityServer,
];
