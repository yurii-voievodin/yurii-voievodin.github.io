import type { Project } from "@/types/project";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { myUniversityImages } from "@/lib/personal-projects-images";

export const myUniversity: Project = {
  slug: "my-university",
  name: "My University",
  summary:
    "Personal project for browsing university schedules, with favorites, sharing, and offline support.",
  date: "24 December 2018",
  tags: ["Productivity"],
  images: myUniversityImages,
  content: (
    <>
      <p className="text-zinc-300">
        <GradientLink href="https://github.com/university-my/ios">
          My University
        </GradientLink>{" "}
        — personal project for browsing university schedules. Students and
        teachers search for groups, teachers, or classrooms and view class
        schedules with favorites, sharing, and offline support.
      </p>

      <p className="text-zinc-300 font-semibold">Technical info:</p>
      <Bullets>
        <li>
          Written in <strong>Swift</strong>, UIKit with 13 Storyboards and{" "}
          <strong>SwiftUI</strong> integration via{" "}
          <CodeTag>UIHostingController</CodeTag> (~131 source files)
        </li>
        <li>
          <strong>MVC hybrid</strong> with dedicated{" "}
          <strong>DataControllers</strong>, <strong>LogicControllers</strong>,
          and <strong>DataSources</strong> — protocol-driven design with{" "}
          <CodeTag>ModelProtocol</CodeTag>,{" "}
          <CodeTag>EntityRepresentable</CodeTag>, and{" "}
          <CodeTag>CoreDataEntityProtocol</CodeTag> abstractions
        </li>
        <li>
          <strong>URLSession</strong> networking — custom generic{" "}
          <CodeTag>{"NetworkClient<Model>"}</CodeTag> with{" "}
          <strong>Combine</strong>, JSON decoding, and Result-based error
          handling
        </li>
        <li>
          <strong>CoreData</strong> persistence — 5 entities (
          <CodeTag>UniversityEntity</CodeTag>, <CodeTag>GroupEntity</CodeTag>,{" "}
          <CodeTag>TeacherEntity</CodeTag>, <CodeTag>ClassroomEntity</CodeTag>
          , <CodeTag>RecordEntity</CodeTag>) with uniqueness constraints and
          fetch indexes
        </li>
        <li>
          <strong>Zero third-party dependencies</strong> — built entirely with
          native iOS frameworks
        </li>
        <li>
          <strong>MetricKit</strong> for crash and performance diagnostics
          monitoring
        </li>
        <li>
          Localization: <strong>English</strong> and{" "}
          <strong>Ukrainian</strong> with localized storyboards and string
          files
        </li>
        <li>
          Favorites, search, share URLs, date/time schedule filtering, and
          &quot;What&apos;s New&quot; feature
        </li>
        <li>
          Deployment target: <strong>iOS 16.0+</strong>
        </li>
      </Bullets>
    </>
  ),
};
