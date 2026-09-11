import type { Project } from "@/types/project";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { lookUpImages } from "@/lib/commercial-projects-images";

export const lookUp: Project = {
  slug: "look-up",
  name: "Look Up",
  summary:
    "iOS shopping assistant for price comparison, receipt tracking, and shared shopping lists, built for the Saudi market.",
  date: "June 2019",
  tags: ["Shopping"],
  images: lookUpImages,
  content: (
    <>
      <p className="text-zinc-300">
        <strong>Look Up</strong> — iOS shopping assistant for searching
        products, comparing prices across stores, tracking receipts, and
        managing shared shopping lists. Built for the Saudi market (SAR
        pricing).
      </p>
      <p className="text-zinc-300 font-semibold">Technical info:</p>
      <Bullets>
        <li>
          Written in <strong>Swift</strong>, Storyboard-based UIKit (13
          storyboards, 177 source files)
        </li>
        <li>
          <strong>MVC + DataSource pattern</strong> — explicit DataSource
          classes for collection/table views, singleton Managers for shared
          state
        </li>
        <li>
          Multi-window architecture — separate windows for left menu and right
          filter panel with animated transitions
        </li>
        <li>
          <strong>Alamofire</strong> + <strong>AlamofireImage</strong> for
          networking and image caching; token-based auth via{" "}
          <CodeTag>X-Device-Token</CodeTag> stored in{" "}
          <strong>Keychain</strong>
        </li>
        <li>
          <strong>Marshal</strong> for bidirectional JSON ↔ Swift struct
          serialization
        </li>
        <li>
          Receipt management — local JPEG storage (UUID-named),
          pending/processed state tracking, image upload pipeline
        </li>
        <li>
          <strong>CoreLocation</strong> for store-based proximity filtering
        </li>
        <li>
          Phone number verification login flow, shopping list sharing via
          unique identifiers
        </li>
        <li>
          Two build targets — localhost and production with conditional API
          endpoints
        </li>
        <li>
          Deployment target: <strong>iOS 13.1+</strong>, iPhone and iPad
          supported
        </li>
      </Bullets>
    </>
  ),
};
