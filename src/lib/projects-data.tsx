import { ReactNode } from "react";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import {
  hoohImages,
  vistaCreateImages,
  clowderImages,
  vistaPrintImages,
  lookUpImages,
  coachNowImages,
  solitaireImages,
  proveitImages,
  chronographiOSImages,
  chronographMacOSImages,
  sumduImages,
} from "@/lib/commercial-projects-images";
import { myUniversityImages } from "@/lib/personal-projects-images";
import { dustdriftScreenshots } from "@/lib/dustdrift-images";
import { headrecorderScreenshots } from "@/lib/headrecorder-images";
import { wisebudgetScreenshots } from "@/lib/wisebudget-images";
import Image from "next/image";

export type ProjectCategory = "commercial" | "personal";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  date: string;
  tags: string[];
  images?: ProjectImage[];
  wideImages?: ProjectImage[];
  footer?: ReactNode;
  content: ReactNode;
}

// Newest first.
export const commercialProjects: Project[] = [
  {
    slug: "hooh",
    name: "Hooh",
    summary:
      "Private AI workspace for documents — native SwiftUI app with an on-device PDF editor.",
    date: "2025 - 2026",
    tags: ["AI", "Productivity"],
    images: hoohImages,
    content: (
      <>
        <p className="text-zinc-300">
          <GradientLink href="https://hooh.ai" target="_blank">
            Hooh
          </GradientLink>{" "}
          — private AI workspace for documents. Users upload PDFs, scans,
          photos, and Office files, then chat with an AI assistant that reads,
          summarizes, fills, and signs them.
        </p>
        <p className="text-zinc-300 font-semibold">Technical info:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Written in <strong>Swift 6</strong>, fully <strong>SwiftUI</strong>,
            strict concurrency with <CodeTag>@MainActor</CodeTag> default
            isolation; deployment target <strong>iOS 18.6+</strong>
          </li>
          <li>
            Feature-module architecture (<CodeTag>App/Features/*</CodeTag>:
            Chat, Library, Auth, Paywall, Onboarding, SideMenu…) plus local{" "}
            <strong>Swift Package</strong> modules —{" "}
            <CodeTag>Networking</CodeTag>, <CodeTag>PDFEditor</CodeTag>,{" "}
            <CodeTag>PresentationEditor</CodeTag>,{" "}
            <CodeTag>PresentationViewer</CodeTag>,{" "}
            <CodeTag>DesignSystem</CodeTag>
          </li>
          <li>
            <strong>Supabase</strong> for auth (Apple/Google/email), Postgres
            realtime channels (conversation sync), and shared-keychain session
            storage for the Share Extension
          </li>
          <li>
            Custom <strong>PDFEditor</strong> Swift Package (PDFKit-based) —
            annotate, freehand draw, sticky notes, signature capture &amp;
            placement, page reorder/scan-import, form filling, merge/compress
          </li>
          <li>
            Native <strong>App Intents</strong>/Siri Shortcuts, deep-link
            routing, and a <strong>Share Extension</strong> for importing
            documents from other apps
          </li>
          <li>
            Analytics: <strong>PostHog</strong> (product analytics),{" "}
            <strong>AppsFlyer</strong> (attribution, ATT-gated)
          </li>
          <li>
            Localization via <strong>Lokalise</strong> with{" "}
            <CodeTag>.xcstrings</CodeTag> string catalogs across 6 locales (EN,
            UK, DE, ES, FR, PT-PT)
          </li>
        </ul>

        <p className="text-zinc-300 font-semibold">CI/CD & Workflow:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            <strong>Xcode Cloud</strong> — builds and publishes releases to
            TestFlight
          </li>
        </ul>
        <div className="flex flex-wrap gap-3 pt-2">
          <GradientLink
            href="https://apps.apple.com/us/app/hooh-ai-pdf-document-assistant/id6763233940"
            target="_blank"
          >
            App Store
          </GradientLink>
          <GradientLink href="https://hooh.ai" target="_blank">
            hooh.ai
          </GradientLink>
        </div>
      </>
    ),
  },
  {
    slug: "vistaprint",
    name: "VistaPrint",
    summary:
      "E-commerce iOS app for ordering custom printed products, with an integrated design editor",
    date: "August 2023 - December 2025",
    tags: ["E-commerce", "Shopping"],
    images: vistaPrintImages,
    content: (
      <>
        <p className="text-zinc-300">
          <GradientLink href="https://www.vistaprint.com" target="_blank">
            VistaPrint
          </GradientLink>{" "}
          — e-commerce iOS app for ordering custom printed products. Users
          browse a product catalog, customize designs in an integrated editor,
          and place orders.
        </p>
        <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">
          My role:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Product page — preview images, pricing, discounts, color swatches,
            size/quantity/material variations
          </li>
          <li>
            Design editor image capabilities — replacement, cropping,
            hue/saturation/lightness sliders, filters, color extraction
          </li>
          <li>
            Account screen with web view integration and links to cart, orders,
            support
          </li>
          <li>
            Unit test coverage for core modules, localization with string
            catalogs, logging system
          </li>
        </ul>

        <p className="text-zinc-300 font-semibold">Technical info:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Written in <strong>Swift</strong>, UIKit-based with SwiftUI
            components
          </li>
          <li>
            <strong>MVP + DataProvider</strong> architecture — presenters manage
            business logic, typed data providers handle fetching and caching
          </li>
          <li>
            <strong>37 local CocoaPods modules</strong> for feature isolation
            (Editor, Gallery, ProductPage, VistaCart, Storage, Networking, etc.)
          </li>
          <li>
            <strong>Moya + Alamofire</strong> networking with custom{" "}
            <CodeTag>NetworkingProvider</CodeTag> and response caching layer
          </li>
          <li>
            <strong>CoreData</strong> + custom Storage module with{" "}
            <strong>EasyMapping</strong> for data persistence
          </li>
          <li>
            Advanced design editor — SVG rendering, background removal, image
            filters, color extraction, interactive zoom and transform gestures
          </li>
          <li>
            <strong>Braintree</strong> + <strong>PayPal</strong> for payments,
            cart and checkout flow
          </li>
          <li>
            <strong>Auth0</strong> (AppAuth) for authentication
          </li>
          <li>
            <strong>Firebase</strong> Remote Config + A/B testing,{" "}
            <strong>Segment</strong> for analytics
          </li>
          <li>
            <strong>SDWebImage</strong> for image loading/caching,{" "}
            <strong>SkeletonView</strong> for loading states
          </li>
          <li>
            <strong>SwiftLint</strong> with custom rule configuration across all
            modules
          </li>
          <li>
            Deployment target: <strong>iOS 18.0+</strong>
          </li>
        </ul>

        <p className="text-zinc-300 font-semibold">CI/CD & Workflow:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            <strong>GitLab CI</strong> with parallel test stages — unit tests,
            snapshot tests, UI tests, smoke tests, and full test suite on
            release branches
          </li>
          <li>
            <strong>Fastlane</strong> for build automation, versioning,
            TestFlight distribution, and Slack notifications
          </li>
          <li>S3 artifact storage with CloudFront invalidation on deploy</li>
        </ul>

        <hr className="border-zinc-700/50" />
      </>
    ),
  },
  {
    slug: "vistacreate",
    name: "VistaCreate",
    summary:
      "Professional design and creative content creation iOS app with thousands of templates and a full-featured editor.",
    date: "February 2022 - August 2023",
    tags: ["Design Tools"],
    images: vistaCreateImages,
    content: (
      <>
        <p className="text-zinc-300">
          <GradientLink href="https://create.vista.com" target="_blank">
            VistaCreate
          </GradientLink>{" "}
          — professional design and creative content creation iOS app. Users
          work with thousands of templates, add images, text, shapes and audio,
          and export designs in multiple formats.
        </p>
        <p className="text-zinc-300 font-semibold">Technical info:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Written in <strong>Swift</strong>, UIKit-based with SwiftUI
            components; <strong>Metal</strong> for graphics rendering
          </li>
          <li>
            <strong>MVP/VIPER hybrid</strong> — Router-based navigation,
            Presenter classes for business logic, ViewControllers as the view
            layer
          </li>
          <li>
            <strong>21 development CocoaPods modules</strong> — HomeModule,
            OnboardingModule, BillingService, CremUI, Music.TrimmablePlayer,
            BlackBox, and more (177 pods total)
          </li>
          <li>
            <strong>Moya + Alamofire</strong> networking with custom Networking
            module and APICache for response caching
          </li>
          <li>
            <strong>CoreData</strong> for local persistence with custom context
            management and undo/redo support
          </li>
          <li>
            Full-featured design editor — layers, text, SVG rendering, filters,
            transparency, color editing, background removal
          </li>
          <li>
            Audio editing via <strong>AVFoundation</strong> with custom{" "}
            <CodeTag>TrimmablePlayer</CodeTag> and histogram visualization
          </li>
          <li>
            <strong>StoreKit</strong> + custom BillingService module for
            subscriptions and in-app purchases
          </li>
          <li>
            <strong>Firebase</strong> — Analytics, Crashlytics, RemoteConfig,
            A/B testing, DynamicLinks, Push Notifications
          </li>
          <li>
            <strong>AppsFlyer</strong> for attribution,{" "}
            <strong>Iterable</strong> for marketing automation,{" "}
            <strong>Facebook SDK</strong> for social
          </li>
          <li>
            <strong>Auth0</strong> for authentication, <strong>R.swift</strong>{" "}
            for type-safe resources
          </li>
          <li>
            <strong>Lokalise</strong> localization with 25 languages supported
          </li>
          <li>
            Deployment target: <strong>iOS 15.0+</strong>, iPhone and iPad
            supported
          </li>
        </ul>

        <p className="text-zinc-300 font-semibold">CI/CD & Workflow:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            <strong>GitLab CI</strong> with Development and Full test plans,
            JUnit reporting, IPA builds uploaded to S3 via CloudFront
          </li>
          <li>
            <strong>Fastlane</strong> for TestFlight releases, version
            management, dSYM uploads, and Lokalise sync
          </li>
        </ul>

        <hr className="border-zinc-700/50" />
        <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">
          My role:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Unit tests with <strong>XCTest</strong> to cover app business logic
          </li>
          <li>
            Modular architecture using <strong>Private Pods</strong> and{" "}
            <strong>Development Pods</strong>
          </li>
          <li>
            Analytics event logging — <strong>Firebase</strong>,{" "}
            <strong>AppsFlyer</strong>, <strong>Iterable</strong>
          </li>
          <li>
            <strong>A/B tests</strong> via Firebase for onboarding and retention
            experiments
          </li>
          <li>
            Home screen with caching and data loading via{" "}
            <strong>Swift Concurrency</strong>
          </li>
          <li>Onboarding screens with pagination and paywall</li>
          <li>SwiftUI slider component for background removal/restoration</li>
          <li>Design export UI and logic across multiple formats</li>
        </ul>
      </>
    ),
  },
  {
    slug: "clowder",
    name: "Clowder",
    summary:
      "White-label community and event management platform cloned and customized for 50+ organizations.",
    date: "March 2020 - January 2022",
    tags: ["Social"],
    images: clowderImages,
    content: (
      <>
        <p className="text-zinc-300">
          <GradientLink href="https://www.clowder.com/" target="_blank">
            Clowder
          </GradientLink>{" "}
          — white-label community and event management platform. The Core iOS
          app is cloned and customized for 50+ organizations, providing event
          management, community forums, real-time chat, news feeds, resource
          libraries, and QR-based networking.
        </p>
        <p className="text-zinc-300 font-semibold">Technical info:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Written in <strong>Swift</strong>, UIKit-based architecture
          </li>
          <li>
            <strong>MVVM + Interactor</strong> — Interactors handle business
            logic, DataProviders fetch and cache, ViewControllers as the view
            layer
          </li>
          <li>
            <strong>16 internal frameworks</strong> — CLFoundation, CLBackend,
            CLServices, CLUIKit, CLAnalytics, CLAdvertisement, CLQRCodeSharing,
            CLPayments, and more
          </li>
          <li>
            <strong>Alamofire 5</strong> + proprietary{" "}
            <CodeTag>PXRESTRequest</CodeTag> for REST API abstraction;{" "}
            <strong>PromiseKit</strong> for async operations
          </li>
          <li>
            Proprietary <CodeTag>PXChat</CodeTag> + <strong>Chatto</strong> for
            real-time messaging
          </li>
          <li>
            <strong>Kingfisher</strong> for image caching,{" "}
            <strong>Eureka</strong> for form building
          </li>
          <li>
            Push notifications via proprietary <CodeTag>PXPush</CodeTag> and{" "}
            <strong>AppCenter</strong> for crash reporting
          </li>
          <li>
            <strong>Amplitude</strong> for analytics,{" "}
            <strong>KeychainAccess</strong> for secure credential storage
          </li>
          <li>QR code generation and scanning for digital membership cards</li>
          <li>
            Calendar integration, location-based &quot;near me&quot; discovery,
            rich HTML rendering via <strong>DTCoreText</strong>
          </li>
          <li>
            <strong>SwiftGen</strong> for type-safe resources,{" "}
            <strong>Sourcery</strong> for code generation,{" "}
            <strong>SwiftLint</strong> + <strong>SwiftFormat</strong> for code
            quality
          </li>
          <li>
            Deployment target: <strong>iOS 13.0+</strong>, iPhone and iPad
            supported
          </li>
        </ul>

        <p className="text-zinc-300 font-semibold">CI/CD & Workflow:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            <strong>GitLab CI</strong> — SwiftLint gate, IPA build, AppCenter
            for QA, TestFlight for staging, App Store for production
          </li>
          <li>
            <strong>Fastlane</strong> for build automation, versioning, and
            TestFlight distribution; <strong>YouTrack</strong> integration for
            automatic issue status updates
          </li>
          <li>
            <strong>GitFlow</strong> branching — develop, feature, release,
            hotfix, and deploy branches
          </li>
        </ul>

        <hr className="border-zinc-700/50" />
        <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">
          My role:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Create clones of the Core product and customize them per client
            (enable/disable modules, custom fields, branding)
          </li>
          <li>
            Support 50+ existing apps and update them to the latest Core version
          </li>
          <li>Propose and implement changes to the Core product</li>
          <li>
            Resolve merge conflicts and maintain GitFlow discipline across a
            large multi-repo setup
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: "coachnow",
    name: "CoachNow",
    summary:
      "Coaching and training management platform for coaches and athletes, with video, chat, and training spaces.",
    date: "February 2021",
    tags: ["Sports", "Video"],
    images: coachNowImages,
    content: (
      <>
        <p className="text-zinc-300">
          <GradientLink
            href="https://apps.apple.com/app/coachnow-coaching-platform/id596598472"
            target="_blank"
          >
            CoachNow
          </GradientLink>{" "}
          — coaching and training management platform for coaches and athletes.
          Users share training posts, videos, and media in dedicated training
          spaces, communicate through comments and replies, and manage athlete
          connections.
        </p>
        <p className="text-zinc-300 font-semibold">Technical info:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            <strong>Objective-C + Swift</strong> hybrid codebase (~688 source
            files) — legacy Objective-C foundation with Swift components added
            incrementally
          </li>
          <li>
            <strong>MVC with Service Layer</strong> — manager/helper classes (
            <CodeTag>EDFNetworkClient</CodeTag>,{" "}
            <CodeTag>EDFSyncManager</CodeTag>,{" "}
            <CodeTag>EDFAccountUpdater</CodeTag>) handle business logic
            alongside UIViewControllers
          </li>
          <li>
            <strong>RestKit</strong> for REST API communication with automatic
            Core Data object mapping and bi-directional sync
          </li>
          <li>
            <strong>CoreData</strong> (SQLite) for offline-first persistence
            with migration manager and RestKit integration
          </li>
          <li>
            Video capture via custom <strong>NextLevel</strong> framework, video
            trimming (<strong>PryntTrimmerView</strong>), playback, and batch
            export to <strong>AWS S3</strong>
          </li>
          <li>
            <strong>Stripe</strong> for payment processing and subscription
            management
          </li>
          <li>
            <strong>Firebase</strong> Crashlytics + Performance;{" "}
            <strong>Segment</strong> + <strong>AppsFlyer</strong> for analytics
          </li>
          <li>
            <strong>Intercom</strong> for in-app customer support messaging
          </li>
          <li>
            <strong>Facebook SDK</strong> for social login, <strong>OTP</strong>{" "}
            phone verification, <strong>OAuth2</strong> token-based auth
          </li>
          <li>
            <strong>PureLayout</strong> for programmatic Auto Layout,{" "}
            <strong>SDWebImage</strong> for image caching
          </li>
          <li>
            Deployment target: <strong>iOS 12.0+</strong>, iPhone and iPad
            supported
          </li>
        </ul>

        <hr className="border-zinc-700/50" />
        <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">
          My role:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Support the app and add new features to the mixed Objective-C /
            Swift codebase
          </li>
          <li>
            Rewrite legacy <strong>Objective-C</strong> code to{" "}
            <strong>Swift</strong>
          </li>
          <li>
            Make code reviews and publish releases to TestFlight and the App
            Store
          </li>
          <li>
            Implement screen recording with <strong>ReplayKit</strong> framework
          </li>
          <li>Maintain dependencies and manage the CocoaPods setup</li>
        </ul>
      </>
    ),
  },
  {
    slug: "solitaire",
    name: "Solitaire (Classic)",
    summary:
      "Competitive solitaire card game with cash-prize tournaments, head-to-head matches, and daily challenges.",
    date: "November 2019",
    tags: ["Game"],
    images: solitaireImages,
    content: (
      <>
        <p className="text-zinc-300">
          <GradientLink
            href="https://apps.apple.com/us/app/id1457988491"
            target="_blank"
          >
            Solitaire (Classic)
          </GradientLink>{" "}
          — competitive solitaire card game where users play for cash prizes
          through tournaments, head-to-head matches, and daily challenges,
          powered by the PROVEIT platform.
        </p>
        <p className="text-zinc-300 font-semibold">Technical info:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Written in <strong>Swift</strong>, Storyboard-based UIKit
            architecture (~343 source files)
          </li>
          <li>
            <strong>MVC/MVVM hybrid</strong> — struct-based models, custom{" "}
            <CodeTag>ViewController</CodeTag> base class, singleton managers (
            <CodeTag>Store</CodeTag>, <CodeTag>CurrentGame</CodeTag>,{" "}
            <CodeTag>UserData</CodeTag>)
          </li>
          <li>
            Custom game engine — <strong>CALayer</strong>-based card rendering,
            undo/redo with move history, score calculation with time bonuses,
            game state snapshots
          </li>
          <li>
            <strong>ProveItSDK</strong> — internal SDK namespace abstracting
            tournament system, multiplayer matchmaking, leaderboards, and
            real-money transactions
          </li>
          <li>
            <strong>4 build targets</strong> — localhost, sandbox, staging,
            production — each with its own Info.plist configuration
          </li>
          <li>
            <strong>Alamofire</strong> networking with AES-encrypted JSON API
            communication via custom <CodeTag>Decrypter</CodeTag> layer
          </li>
          <li>
            <strong>In-App Purchases</strong> (StoreKit) +{" "}
            <strong>Google AdMob</strong> for monetization
          </li>
          <li>
            <strong>SwiftLocation</strong> for state-based gameplay compliance
            and location verification
          </li>
          <li>
            Analytics: <strong>Firebase</strong>, <strong>Mixpanel</strong>,{" "}
            <strong>AppsFlyer</strong>; crash reporting via{" "}
            <strong>Fabric/Crashlytics</strong>
          </li>
          <li>
            <strong>Facebook SDK</strong> for social login;{" "}
            <strong>RNCryptor</strong> (AES) + <strong>SAMKeychain</strong> for
            secure storage
          </li>
          <li>
            Push notifications, jailbreak detection, device fingerprinting
          </li>
          <li>
            Deployment target: <strong>iOS 10.0+</strong>, iPhone and iPad
            supported
          </li>
        </ul>

        <hr className="border-zinc-700/50" />
        <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">
          My role:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>Design app architecture and build from scratch</li>
          <li>
            Implement the networking layer with REST API and encrypted
            communication
          </li>
          <li>Pull requests and code reviews</li>
        </ul>
      </>
    ),
  },
  {
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
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
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
        </ul>
      </>
    ),
  },
  {
    slug: "proveit",
    name: "PROVEIT",
    summary:
      "Real-money gaming platform with trivia, tournaments, and 8 skill-based arcade games — featured in TechCrunch.",
    date: "March 2017",
    tags: ["Gaming"],
    images: proveitImages,
    content: (
      <>
        <p className="text-zinc-300">
          <GradientLink href="https://apps.apple.com/app/proveit-real-money-games/id1219398758">
            PROVEIT
          </GradientLink>{" "}
          — real-money gaming platform where users compete in trivia,
          head-to-head challenges, daily tournaments, and 8 skill-based arcade
          games (Solitaire, Tetris, Flappy Bird, Connect Dots, and more) for
          cash prizes. Featured in{" "}
          <GradientLink href="https://techcrunch.com/2018/06/18/proveit-trivia">
            TechCrunch
          </GradientLink>
          .
        </p>
        <p className="text-zinc-300 font-semibold">Technical info:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Written in <strong>Swift</strong>, Storyboard/XIB-based UIKit
            architecture (~624 source files)
          </li>
          <li>
            <strong>MVC</strong> with singleton managers (
            <CodeTag>UserManager</CodeTag>, <CodeTag>GameManager</CodeTag>,{" "}
            <CodeTag>TournamentManager</CodeTag>) and struct-based models via{" "}
            <strong>Marshal</strong> JSON serialization
          </li>
          <li>
            <strong>8 arcade games</strong> — SpriteKit-based engines (Second
            Side RPG with physics, Smashy Bricks, Solitaire, Tetris, Block Star,
            Connect Dots, Flappy Bird, Number Tile)
          </li>
          <li>
            <strong>Alamofire</strong> networking with{" "}
            <strong>RNCryptor</strong> AES-encrypted request/response layer,{" "}
            <CodeTag>Router</CodeTag> enum pattern with 100+ API endpoints
          </li>
          <li>
            <strong>4 build configurations</strong> — localhost, sandbox,
            staging, production — each with own API endpoints, security keys,
            and feature flags
          </li>
          <li>
            <strong>In-App Purchases</strong> (StoreKit) with server-side
            receipt validation and duplicate order detection
          </li>
          <li>
            <strong>Facebook SDK</strong> for social login;{" "}
            <strong>SAMKeychain</strong> for secure token storage
          </li>
          <li>
            Location-based compliance for state-level gambling restrictions
          </li>
          <li>
            Analytics: <strong>Firebase</strong>, <strong>Mixpanel</strong>,{" "}
            <strong>AppsFlyer</strong>; crash reporting via{" "}
            <strong>Fabric/Crashlytics</strong>
          </li>
          <li>Apple Pay, Push Notifications, victory video recording</li>
        </ul>

        <hr className="border-zinc-700/50" />
        <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">
          My role:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>Design app architecture and build from scratch</li>
          <li>
            Implement the networking layer with REST API and AES-encrypted
            communication
          </li>
          <li>
            Build 8 arcade game integrations with tournament and matchmaking
            systems
          </li>
          <li>
            Implement real-money transaction flow with In-App Purchases and
            withdrawals
          </li>
          <li>Pull requests and code reviews</li>
        </ul>
      </>
    ),
  },
  {
    slug: "chronograph-ios",
    name: "Chronograph (iOS)",
    summary:
      "Pomodoro timer and task management app with cross-device sync, sharing a codebase with the macOS version.",
    date: "July 2016",
    tags: ["Productivity"],
    images: chronographiOSImages,
    content: (
      <>
        <p className="text-zinc-300">
          <GradientLink href="https://apps.apple.com/app/chronograph/id1281918814">
            Chronograph
          </GradientLink>{" "}
          — in-house Pomodoro timer and task management app (App Dev Academy)
          that tracks work intervals with configurable work/break cycles,
          manages tasks with due dates, and syncs data across devices. Shares
          codebase with the macOS version.
        </p>
        <p className="text-zinc-300 font-semibold">Technical info:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Written in <strong>Swift</strong>, Storyboard-based UIKit
            architecture (~164 shared + platform-specific source files)
          </li>
          <li>
            Custom generic <CodeTag>StateMachine&lt;T&gt;</CodeTag> for timer
            state transitions — Pomodoro cycles (work → short break → long
            break) with <CodeTag>willChangeState</CodeTag>/
            <CodeTag>didChangeState</CodeTag> callbacks
          </li>
          <li>
            <strong>Core Data</strong> persistence — <CodeTag>Task</CodeTag> and{" "}
            <CodeTag>Interval</CodeTag> entities with soft deletion and local
            change tracking for sync
          </li>
          <li>
            <strong>Alamofire</strong> networking with Router enum pattern — API
            clients for auth, tasks, intervals, users, and subscriptions
          </li>
          <li>
            <strong>SynchronizationManager</strong> — bi-directional sync with
            backend, queued export/import, periodic background sync with
            concurrency guards
          </li>
          <li>
            <strong>Facebook SDK</strong> + email/password auth;{" "}
            <strong>SAMKeychain</strong> for token storage
          </li>
          <li>
            <strong>Charts</strong> library for statistics visualization;{" "}
            <strong>Firebase</strong> analytics;{" "}
            <strong>Fabric/Crashlytics</strong>
          </li>
          <li>
            <strong>In-App Subscriptions</strong> (StoreKit) with server-side
            receipt validation
          </li>
          <li>
            Local notifications with smart scheduling — generates future
            notification chains based on current Pomodoro state
          </li>
          <li>
            Universal app: <strong>iPhone + iPad</strong> support, deployment
            target <strong>iOS 10.0+</strong>
          </li>
        </ul>

        <hr className="border-zinc-700/50" />
        <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">
          My role:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>Design app architecture and build from scratch</li>
          <li>
            Design Core Data schema and implement bi-directional sync with REST
            API
          </li>
          <li>Build custom analog/digital clock and timer UI components</li>
          <li>Implement shared codebase between iOS and macOS versions</li>
          <li>iPad version of the app</li>
          <li>Integration of analytics and In-App Subscriptions</li>
        </ul>
      </>
    ),
  },
  {
    slug: "chronograph-macos",
    name: "Chronograph (macOS)",
    summary:
      "macOS counterpart of the Pomodoro timer app, sharing a codebase and Core Data schema with the iOS version.",
    date: "March 2016",
    tags: ["Productivity"],
    images: chronographMacOSImages,
    content: (
      <>
        <p className="text-zinc-300">
          <GradientLink href="https://apps.apple.com/ua/app/chronograph-my-productivity/id1316023026?mt=12">
            Chronograph
          </GradientLink>{" "}
          — macOS counterpart of the iOS Pomodoro timer app (App Dev Academy).
          Native Cocoa/AppKit interface with window-based navigation, custom
          analog and digital clock views, and shared business logic with the iOS
          version.
        </p>
        <p className="text-zinc-300 font-semibold">Technical info:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Written in <strong>Swift</strong>, Cocoa/AppKit with{" "}
            <CodeTag>NSWindowController</CodeTag>-based navigation and
            Storyboards
          </li>
          <li>
            <strong>Shared codebase</strong> with iOS — all models, networking,
            Core Data, state machines, managers, and helpers via{" "}
            <code>#if os(macOS)</code> guards
          </li>
          <li>
            Custom <CodeTag>MacAnalogClockView</CodeTag> and{" "}
            <CodeTag>MacDigitalClockView</CodeTag> — native AppKit timer
            rendering
          </li>
          <li>
            Statistics screen built with <strong>SwiftUI</strong> — embedded in
            the Cocoa app
          </li>
          <li>
            Same <strong>Core Data</strong> schema and{" "}
            <strong>SynchronizationManager</strong> as iOS for cross-device sync
          </li>
          <li>
            <strong>In-App Subscriptions</strong> (StoreKit) +{" "}
            <strong>Firebase</strong> analytics + <strong>Crashlytics</strong>
          </li>
          <li>
            Deployment target: <strong>macOS 10.14+</strong>
          </li>
        </ul>

        <hr className="border-zinc-700/50" />
        <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">
          My role:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>Design app architecture and build from scratch</li>
          <li>
            Design Core Data schema and implement background sync with REST API
          </li>
          <li>Implement statistics screen in SwiftUI</li>
          <li>
            Manage shared Swift codebase and third-party dependencies across
            platforms
          </li>
          <li>Integration of analytics and In-App Subscriptions</li>
        </ul>
      </>
    ),
  },
  {
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
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
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
        </ul>

        <hr className="border-zinc-700/50" />
        <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">
          My role:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>Implement custom navigation bar with smooth animations</li>
          <li>Build adaptive layout for iPad with UISplitViewController</li>
          <li>
            Implement search with alphabetical sections and real-time filtering
          </li>
        </ul>
      </>
    ),
  },
];

// Newest first.
export const personalProjects: Project[] = [
  {
    slug: "head-recorder",
    name: "Head Recorder",
    summary:
      "macOS app that records your screen and webcam together as a single video, entirely on-device.",
    date: "30 July 2026",
    tags: ["Video", "macOS"],
    wideImages: headrecorderScreenshots,
    content: (
      <>
        <p className="text-zinc-300">
          <GradientLink href="/headrecorder">Head Recorder</GradientLink> —
          macOS app that records your screen and webcam together as a single
          video, with the camera composited as a customizable bubble (circle or
          rectangle, resized, repositioned, and mirrored). Recording and
          processing happen entirely on-device.
        </p>

        <p className="text-zinc-300 font-semibold">Technical info:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Written in <strong>Swift</strong>, <strong>SwiftUI</strong> +{" "}
            <strong>AppKit</strong> (~13 source files)
          </li>
          <li>
            Screen capture via <strong>ScreenCaptureKit</strong> (
            <CodeTag>SCStream</CodeTag> → <CodeTag>AVAssetWriter</CodeTag>);
            camera and mic captured independently via{" "}
            <CodeTag>AVCaptureSession</CodeTag> /{" "}
            <CodeTag>AVCaptureMovieFileOutput</CodeTag>
          </li>
          <li>
            Live camera bubble rendered in a floating borderless{" "}
            <CodeTag>NSWindow</CodeTag> (
            <CodeTag>CameraPreviewWindowController</CodeTag>) with{" "}
            <CodeTag>CAShapeLayer</CodeTag> circle/rounded-rect masking,
            excluded from the screen capture stream itself so it never appears
            twice
          </li>
          <li>
            Post-recording compositing via{" "}
            <CodeTag>AVMutableComposition</CodeTag> and a custom{" "}
            <CodeTag>AVVideoCompositing</CodeTag> (
            <CodeTag>OverlayCompositor</CodeTag>) — CoreImage
            radial-gradient-feathered circle mask or rounded-rect mask,
            affine-transform mirroring, and host-time-offset clock sync between
            the two source tracks
          </li>
          <li>
            Shared <CodeTag>OverlayGeometry</CodeTag> math drives both the live
            preview window and the final render, so the preview is what you get
          </li>
          <li>
            <strong>Zero third-party dependencies</strong> — built entirely with
            native Apple frameworks
          </li>
          <li>
            Localized in <strong>English</strong> and <strong>Ukrainian</strong>{" "}
            via String Catalogs
          </li>
          <li>
            Deployment target: <strong>macOS 13.0+</strong>
          </li>
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
          <GradientLink href="/headrecorder">Landing page</GradientLink>
          <GradientLink
            href="https://apps.apple.com/us/app/head-recorder-screen-webcam/id6796696067"
            target="_blank"
          >
            Mac App Store
          </GradientLink>
        </div>
      </>
    ),
  },
  {
    slug: "dustdrift",
    name: "DustDrift",
    summary:
      "2D top-down exploration and survival game across four connected biomes, for iPhone, iPad, and Mac.",
    date: "25 September 2025",
    tags: ["Game", "iOS", "macOS"],
    wideImages: dustdriftScreenshots,
    content: (
      <>
        <p className="text-zinc-300">
          <GradientLink href="/dustdrift">DustDrift</GradientLink> — 2D top-down
          exploration and survival game inspired by No Man&apos;s Sky, made for
          iPhone and iPad. Stranded on an alien world, players mine resources
          from destructible rocks, craft gear and weapons, and fight off hostile
          robots across four connected biomes reached through portals. Pre-order
          live on the App Store for iPhone, iPad, and Mac, arriving December 10,
          2026.
        </p>

        <p className="text-zinc-300 font-semibold">Technical info:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Written in <strong>Swift</strong>, <strong>SpriteKit</strong> — no
            SwiftUI, no <CodeTag>.sks</CodeTag> scene files (~330 source files
            across the shared game code, iOS, and Mac targets)
          </li>
          <li>
            <strong>Single shared codebase</strong> for iPhone/iPad and native
            Mac targets — a thin <CodeTag>GameScene</CodeTag> orchestrator
            delegates to per-scene subsystems (<CodeTag>WorldStreamer</CodeTag>,{" "}
            <CodeTag>InputDispatcher</CodeTag>,{" "}
            <CodeTag>PortalCoordinator</CodeTag>,{" "}
            <CodeTag>PhysicsContactRouter</CodeTag>) and manager classes
            (camera, UI, lighting, hints)
          </li>
          <li>
            <strong>Four biomes</strong> (Desert, Water, Ice, Shardlands)
            connected by portals, each with a JSON-authored map and its own
            docked ship for crafting and storage
          </li>
          <li>
            <strong>Combat</strong> — four <CodeTag>HeldItem</CodeTag>/
            <CodeTag>CombatTool</CodeTag> weapons (blaster, heavy rifle, gravity
            gun, cutter) and grid-based enemy AI (RoboSpider, Brawler, Sentinel)
          </li>
          <li>
            <strong>Crafting, inventory, and equipment</strong> systems with a
            3D-printer progression loop, plus destructible/mineable rock and ice
            formations
          </li>
          <li>
            <strong>Procedural, asset-free audio</strong> — an{" "}
            <strong>AVAudioEngine</strong> PCM synth engine with per-biome music
            moods and a named melody pool, no bundled audio files
          </li>
          <li>
            Procedural rock/terrain texture generation and shader-based ambient
            overlays (<CodeTag>ShaderLib</CodeTag>)
          </li>
          <li>
            Touch controls via <CodeTag>GCVirtualController</CodeTag>, plus
            keyboard and game controller support
          </li>
          <li>
            <strong>Framework-agnostic core</strong> (
            <CodeTag>Sources/Core</CodeTag>) shared between the Xcode app and an
            experimental SwiftPM + Raylib port that runs natively on Linux
          </li>
          <li>
            <strong>Swift Testing</strong> framework for unit tests, plus an
            RPC-driven regression suite exercising crafting/inventory/combat
            end-to-end; <strong>Xcode Cloud</strong> CI
          </li>
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
          <GradientLink href="/dustdrift">Landing page</GradientLink>
          <GradientLink
            href="https://apps.apple.com/app/id6758512309"
            target="_blank"
          >
            App Store
          </GradientLink>
        </div>
      </>
    ),
  },
  {
    slug: "wisebudget",
    name: "WiseBudgeter",
    summary:
      "macOS app for personal finance management, syncing transactions from Wise and Monobank.",
    date: "20 March 2025",
    tags: ["Finance", "macOS"],
    wideImages: wisebudgetScreenshots,
    content: (
      <>
        <p className="text-zinc-300">
          <GradientLink href="/wisebudget">WiseBudgeter</GradientLink> — macOS
          app for personal finance management. Track expenses and income across
          multiple currencies, sync transactions from{" "}
          <GradientLink href="https://wise.com">Wise</GradientLink> and{" "}
          <GradientLink href="https://www.monobank.ua">Monobank</GradientLink>,
          plan monthly budgets per category, and visualize spending with charts
          and analytics.
        </p>

        <p className="text-zinc-300 font-semibold">Technical info:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            Written in <strong>Swift</strong>, <strong>SwiftUI</strong> with{" "}
            <CodeTag>NavigationSplitView</CodeTag> three-column layout (~64
            source files)
          </li>
          <li>
            <strong>SwiftData</strong> persistence — 6 models (
            <CodeTag>Expense</CodeTag>, <CodeTag>Income</CodeTag>,{" "}
            <CodeTag>ExpenseCategory</CodeTag>,{" "}
            <CodeTag>IncomeCategory</CodeTag>, <CodeTag>BudgetPlan</CodeTag>,{" "}
            <CodeTag>BudgetPlanItem</CodeTag>) with relationship cascades and
            predicate-based filtering
          </li>
          <li>
            <strong>Dual bank integration</strong> — <strong>Wise</strong> and{" "}
            <strong>Monobank</strong> API clients with OAuth tokens stored in{" "}
            <strong>Keychain</strong>, automatic transaction import with
            deduplication via <CodeTag>externalId</CodeTag>
          </li>
          <li>
            <strong>Multi-currency support</strong> — foreign exchange tracking
            with base currency conversion, rate caching via{" "}
            <CodeTag>ExchangeRateService</CodeTag> with 24-hour TTL
          </li>
          <li>
            <strong>Charts</strong> framework for category-based spending
            visualization and budget vs. actual progress tracking
          </li>
          <li>
            <strong>CSV import/export</strong> — parsers for Wise, Monobank, and
            generic formats with MCC code mapping and merchant keyword
            auto-categorization
          </li>
          <li>
            <strong>Observable</strong> pattern with{" "}
            <CodeTag>@Observable</CodeTag> macro for reactive services,{" "}
            <strong>async/await</strong> concurrency, <strong>OSLog</strong>{" "}
            structured logging
          </li>
          <li>
            <strong>Zero third-party dependencies</strong> — built entirely with
            native Apple frameworks
          </li>
          <li>
            <strong>Swift Testing</strong> framework with in-memory{" "}
            <CodeTag>ModelContainer</CodeTag> for isolated unit tests
          </li>
          <li>
            Deployment target: <strong>macOS 15.2+</strong>
          </li>
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
          <GradientLink href="/wisebudget">Landing page</GradientLink>
          <GradientLink
            href="https://apps.apple.com/us/app/wisebudgeter/id6760725900"
            target="_blank"
          >
            Mac App Store
          </GradientLink>
        </div>
      </>
    ),
  },
  {
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
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
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
        </ul>
      </>
    ),
  },
  {
    slug: "my-university-server",
    name: "My University Server",
    summary:
      "Ruby on Rails backend aggregating class schedules from 34+ Ukrainian universities.",
    date: "24 December 2018",
    tags: ["Backend"],
    footer: (
      <div className="mt-6">
        <Image
          src="/projects/MyUniversity/landing.png"
          alt="My University landing page"
          width={1280}
          height={800}
          className="w-full rounded-2xl"
        />
      </div>
    ),
    content: (
      <>
        <p className="text-zinc-300">
          <GradientLink href="https://github.com/university-my/server-rails">
            My University Server
          </GradientLink>{" "}
          — backend for the My University iOS app powered by{" "}
          <GradientLink href="https://rubyonrails.org">
            Ruby on Rails
          </GradientLink>
          . Aggregates class schedules from 34+ Ukrainian universities via
          university-specific import services, exposes a REST API for the mobile
          app, and provides an admin dashboard for data management.
        </p>

        <p className="text-zinc-300 font-semibold">Technical info:</p>
        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
          <li>
            <strong>Ruby on Rails 7.0</strong> with <strong>Ruby 3.1</strong>,
            MVC architecture (~256 Ruby source files)
          </li>
          <li>
            <strong>PostgreSQL</strong> database with 10+ models —{" "}
            <CodeTag>University</CodeTag>, <CodeTag>Teacher</CodeTag>,{" "}
            <CodeTag>Group</CodeTag>, <CodeTag>Lesson</CodeTag>,{" "}
            <CodeTag>Auditorium</CodeTag>, <CodeTag>Discipline</CodeTag>,{" "}
            <CodeTag>Building</CodeTag>, <CodeTag>Department</CodeTag>,{" "}
            <CodeTag>Faculty</CodeTag>, <CodeTag>Speciality</CodeTag>
          </li>
          <li>
            <strong>REST API</strong> (<CodeTag>/api/v1/</CodeTag>) with{" "}
            <strong>JBuilder</strong> JSON responses — endpoints for
            universities, teachers, groups, auditoriums, buildings, and lessons
          </li>
          <li>
            <strong>37 service classes</strong> for university-specific schedule
            import and parsing from external APIs
          </li>
          <li>
            <strong>37 background jobs</strong> with <strong>Whenever</strong>{" "}
            cron scheduling for automated data imports
          </li>
          <li>
            <strong>ActiveAdmin</strong> dashboard with role-based access
            control (admin, reader, editor)
          </li>
          <li>
            <strong>Devise</strong> for authentication, <strong>Pundit</strong>{" "}
            for authorization policies
          </li>
          <li>
            <strong>Ahoy</strong> for event tracking and analytics,{" "}
            <strong>Blazer</strong> for SQL query dashboard
          </li>
          <li>
            <strong>FriendlyID</strong> for SEO-friendly URL slugs,{" "}
            <strong>Sitemap Generator</strong> for XML sitemaps
          </li>
          <li>
            <strong>Hotwire</strong> (Turbo + Stimulus) for frontend,{" "}
            <strong>Import Maps</strong> for JavaScript
          </li>
        </ul>
      </>
    ),
  },
];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return category === "commercial" ? commercialProjects : personalProjects;
}

export function getProject(
  category: ProjectCategory,
  slug: string,
): Project | undefined {
  return getProjectsByCategory(category).find((p) => p.slug === slug);
}

export function getLatestProject(category: ProjectCategory): Project {
  return getProjectsByCategory(category)[0];
}

export interface AdjacentProjects {
  prev?: Project;
  next?: Project;
}

// Browsing order follows the display order (newest first): "prev" moves toward
// the newest/start of the list, "next" moves toward the oldest/end of the list.
export function getAdjacentProjects(
  category: ProjectCategory,
  slug: string,
): AdjacentProjects {
  const list = getProjectsByCategory(category);
  const index = list.findIndex((p) => p.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? list[index - 1] : undefined,
    next: list[index + 1],
  };
}
