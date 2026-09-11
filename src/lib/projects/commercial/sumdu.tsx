import type { Project } from "@/types/project";
import GradientText from "@/components/ui/GradientText";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { sumduImages } from "@/lib/commercial-projects-images";

export const sumdu: Project = {
  slug: "sumdu",
  name: "SumDU",
  summary:
    "Schedule viewer for Sumy State University — my first published App Store app.",
  date: "November 2015",
  tags: ["Productivity"],
  images: sumduImages,
  content: (
    <>
      <p className="text-zinc-300">
        <GradientLink href="https://apps.apple.com/ua/app/id698235283">
          SumDU
        </GradientLink>{" "}
        — schedule viewer for Sumy State University (
        <GradientLink href="https://www.appdev.academy">
          App Dev Academy
        </GradientLink>
        ). Students and teachers search for groups, teachers, or auditoriums
        and view class schedules with calendar export. My first iOS app
        published in the App Store.
      </p>
      <p className="text-zinc-300">
        Source code on GitHub:{" "}
        <GradientLink href="https://github.com/appdev-academy/sumdu-ios">
          sumdu-ios
        </GradientLink>
      </p>

      <p className="text-zinc-300 font-semibold">Technical info:</p>
      <Bullets>
        <li>
          Written in <strong>Swift</strong>, fully programmatic UI — no
          Storyboards/XIBs, all layouts via <strong>Cartography</strong> DSL
          (~26 source files)
        </li>
        <li>
          <strong>MVC</strong> architecture with delegate protocols for
          decoupled communication (<CodeTag>ParserScheduleDelegate</CodeTag>,{" "}
          <CodeTag>ParserDataListDelegate</CodeTag>)
        </li>
        <li>
          <strong>Alamofire</strong> networking + <strong>Fuzi</strong> HTML
          parsing — scrapes university website to extract groups, teachers,
          and auditoriums from HTML select dropdowns
        </li>
        <li>
          <strong>SwiftyJSON</strong> for schedule API responses; 30-day
          rolling window for schedule queries
        </li>
        <li>
          <strong>NSCoding</strong> persistence via{" "}
          <CodeTag>NSKeyedArchiver</CodeTag> — offline caching of schedules,
          search history, and directory data in UserDefaults
        </li>
        <li>
          Adaptive UI: <strong>UINavigationController</strong> on iPhone,{" "}
          <strong>UISplitViewController</strong> on iPad with orientation
          support
        </li>
        <li>Localization: English, Ukrainian, Russian</li>
        <li>
          Calendar export via <strong>iCal</strong> format
        </li>
      </Bullets>

      <hr className="border-[var(--border-subtle)]" />
      <GradientText as="p" className="font-semibold">
        My role:
      </GradientText>
      <Bullets>
        <li>Implement custom navigation bar with smooth animations</li>
        <li>Build adaptive layout for iPad with UISplitViewController</li>
        <li>
          Implement search with alphabetical sections and real-time filtering
        </li>
      </Bullets>
    </>
  ),
};
