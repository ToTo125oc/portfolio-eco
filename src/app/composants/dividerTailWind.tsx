interface DividerProps {
    readonly title: string;
}

export default function DividerTailWind({ title }: DividerProps) {
    return (
        <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0" />
            <span className="absolute px-3 font-medium -translate-x-1/2 bg-gray-900 left-1/2">{title}</span>
        </div>
    );
}