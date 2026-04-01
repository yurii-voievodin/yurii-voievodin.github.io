export default function DomainTags({ tags }: { tags: string[] }) {
    return (
        <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
                <span key={tag} className="bg-violet-500/10 text-violet-300 border border-violet-500/20 px-2.5 py-0.5 text-xs rounded-full">
                    {tag}
                </span>
            ))}
        </div>
    );
}
