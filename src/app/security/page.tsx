import Link from 'next/link';
import { ArrowLeft, Shield, Lock, KeyRound, Fingerprint, CreditCard } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Security & Privacy Expertise - Yurii Voievodin",
    description: "iOS and macOS security expertise: encryption, Keychain management, OAuth 2.0, jailbreak detection, device fingerprinting, and secure payment processing across 10+ commercial apps.",
    openGraph: {
        title: "Security & Privacy Expertise - Yurii Voievodin",
        description: "iOS and macOS security expertise: encryption, Keychain management, OAuth 2.0, jailbreak detection, device fingerprinting, and secure payment processing across 10+ commercial apps.",
        url: `${siteConfig.url}/security`,
        type: "profile",
    },
};

interface SecuritySectionProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    projects: string[];
}

function SecuritySection({ icon, title, children, projects }: SecuritySectionProps) {
    return (
        <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
            <div className="px-0 py-4 md:p-8 text-zinc-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="text-violet-400">
                        {icon}
                    </div>
                    <h2 className="text-xl font-bold text-zinc-100">{title}</h2>
                </div>
                <div className="space-y-3 text-zinc-300 leading-relaxed">
                    {children}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {projects.map((project) => (
                        <span key={project} className="bg-zinc-700/50 text-zinc-400 px-2.5 py-0.5 text-xs rounded-full border border-zinc-600/30">
                            {project}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function SecurityPage() {
    return (
        <div className="min-h-screen p-5">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/projects"
                    className="inline-flex items-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-purple-300 mb-6 transition-all font-medium"
                >
                    <ArrowLeft className="mr-2 text-violet-400 hover:text-violet-300 transition-colors" size={16} />
                    Back to Projects
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
                        Security & Privacy
                    </h1>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        Throughout my iOS and macOS apps development, I have implemented security and privacy measures across multiple commercial applications handling sensitive user data, financial transactions, and real-money operations.
                    </p>
                </div>

                <div className="space-y-6">
                    <SecuritySection
                        icon={<Lock size={24} />}
                        title="Encryption & Data Protection"
                        projects={['Solitaire', 'PROVEIT', 'Hooh', 'Look Up']}
                    >
                        <p>
                            Implemented <strong>AES encryption</strong> for API communication using <strong>RNCryptor</strong>, wrapping both request payloads and response bodies in an encrypted layer to prevent man-in-the-middle interception. Built a custom <strong>Decrypter</strong> middleware that transparently encrypts/decrypts all JSON traffic between the app and backend.
                        </p>
                        <p>
                            Designed <strong>token refresh middleware</strong> with plugin-based interceptors using Moya/Alamofire, ensuring that authentication tokens are rotated securely without exposing credentials during renewal. Applied secure transport configurations and certificate pinning where required.
                        </p>
                    </SecuritySection>

                    <SecuritySection
                        icon={<KeyRound size={24} />}
                        title="Keychain & Credential Management"
                        projects={['PROVEIT', 'Chronograph', 'Solitaire', 'Clowder', 'Look Up']}
                    >
                        <p>
                            Used Apple <strong>Keychain Services</strong> through <strong>SAMKeychain</strong> and <strong>KeychainAccess</strong> libraries to securely store authentication tokens, API keys, and user credentials. Keychain items are stored with appropriate access control flags, ensuring data remains encrypted at rest and accessible only to the owning application.
                        </p>
                        <p>
                            Implemented device-bound token storage using <strong>X-Device-Token</strong> headers tied to Keychain-stored identifiers, preventing token reuse across devices. Credentials are never stored in UserDefaults, plist files, or other insecure locations.
                        </p>
                    </SecuritySection>

                    <SecuritySection
                        icon={<Shield size={24} />}
                        title="Authentication & Authorization"
                        projects={['Hooh', 'VistaPrint', 'VistaCreate', 'CoachNow', 'Solitaire', 'PROVEIT', 'Chronograph']}
                    >
                        <p>
                            Integrated <strong>Auth0</strong> with <strong>OAuth 2.0</strong> / <strong>AppAuth</strong> flows for secure authentication with PKCE (Proof Key for Code Exchange), ensuring authorization codes cannot be intercepted. Implemented token lifecycle management including secure storage, automatic refresh, and session expiration handling.
                        </p>
                        <p>
                            Built multi-factor authentication flows including <strong>OTP phone verification</strong>, social login via <strong>Facebook SDK</strong>, and email/password authentication with secure credential transmission. Applied proper session management with server-side validation for each authentication method.
                        </p>
                    </SecuritySection>

                    <SecuritySection
                        icon={<Fingerprint size={24} />}
                        title="Device Integrity & Fraud Prevention"
                        projects={['Solitaire', 'PROVEIT']}
                    >
                        <p>
                            Implemented <strong>jailbreak detection</strong> to identify compromised devices that could manipulate app behavior or bypass security controls. Detection checks include file system analysis, sandbox integrity verification, and dynamic library inspection to identify common jailbreak artifacts.
                        </p>
                        <p>
                            Built <strong>device fingerprinting</strong> systems that create unique device identifiers for fraud prevention, ensuring users cannot create multiple accounts or exploit promotional offers. Combined with <strong>location-based compliance</strong> verification using CoreLocation to enforce state-level restrictions for real-money gaming operations, ensuring regulatory compliance across jurisdictions.
                        </p>
                    </SecuritySection>

                    <SecuritySection
                        icon={<CreditCard size={24} />}
                        title="Payment Security"
                        projects={['PROVEIT', 'Chronograph', 'Hooh', 'VistaPrint', 'Solitaire']}
                    >
                        <p>
                            Implemented <strong>StoreKit</strong> in-app purchases with <strong>server-side receipt validation</strong> to verify transaction authenticity, preventing receipt forgery and unauthorized access to premium content. Built <strong>duplicate order detection</strong> to identify and reject replayed transaction receipts.
                        </p>
                        <p>
                            Integrated <strong>RevenueCat</strong> for subscription lifecycle management with server-side entitlement verification and upload quota enforcement. Implemented <strong>Braintree</strong> and <strong>PayPal</strong> payment SDKs with tokenized card processing, ensuring that raw payment credentials never touch the application layer. Applied <strong>Apple Pay</strong> for secure biometric-authenticated transactions.
                        </p>
                    </SecuritySection>
                </div>
            </div>
        </div>
    );
}
