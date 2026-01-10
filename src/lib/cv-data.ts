import { CVSection } from '@/types/blog';

// Skills data for CV page
export const cvData: CVSection[] = [
    {
        title: "Skills",
        items: [
            {
                title: "Core iOS",
                skills: ["Swift", "UIKit", "SwiftUI", "Auto Layout", "Core Data", "SwiftData"]
            },
            {
                title: "Architecture & Tooling",
                skills: ["Modular architecture", "CI/CD", "GitFlow", "Unit Testing", "SPM", "CocoaPods"]
            },
            {
                title: "Monetization & Analytics",
                skills: ["In-App Purchases", "RevenueCat", "Firebase", "AppsFlyer", "Iterable", "A/B Testing"]
            },
            {
                title: "AI/ML",
                skills: ["CoreML", "Foundation Models", "ML Kit", "Cloud AI APIs", "AI-assisted development tools"]
            },
            {
                title: "Programming Languages",
                skills: ["Swift", "Objective-C", "JavaScript", "Ruby", "PHP", "Python", "Shell script"]
            }
        ]
    }
];

