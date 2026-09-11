import type { Project } from "@/types/project";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { headrecorderScreenshots } from "@/lib/headrecorder-images";

export const headRecorder: Project = {
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
      <Bullets>
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
      </Bullets>

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
};
