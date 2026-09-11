import Tag from '@/components/ui/Tag';

export default function DomainTags({ tags }: { tags: string[] }) {
    return (
        <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
                <Tag key={tag} tone="violet">
                    {tag}
                </Tag>
            ))}
        </div>
    );
}
