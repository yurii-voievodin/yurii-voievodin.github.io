'use client';

import { useState } from 'react';
import PersonalMacOSProjects from '@/components/projects/personal/MacOSProjects';
import PersonalIOSProjects from '@/components/projects/personal/IOSProjects';
import PersonalBackendProjects from '@/components/projects/personal/BackendProjects';

type PlatformFilter = 'all' | 'ios' | 'macos' | 'backend';

export default function PersonalProjects() {
    const [platform, setPlatform] = useState<PlatformFilter>('all');
    const show = (p: 'ios' | 'macos' | 'backend') => platform === 'all' || platform === p;

    return (
        <>
            <div className="flex gap-2 mb-6">
                {(['all', 'ios', 'macos', 'backend'] as const).map((f) => (
                    <button
                        key={f}
                        onClick={() => setPlatform(f)}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                            platform === f
                                ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-500/50'
                                : 'bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 hover:text-zinc-300 hover:border-zinc-600/50'
                        }`}
                    >
                        {f === 'all' ? 'All' : f === 'ios' ? 'iOS' : f === 'macos' ? 'macOS' : 'Backend'}
                    </button>
                ))}
            </div>

            {show('macos') && <PersonalMacOSProjects />}
            {show('ios') && <PersonalIOSProjects />}
            {show('backend') && <PersonalBackendProjects />}
        </>
    );
}
