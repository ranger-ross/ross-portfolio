type BasicCardProps = {
    name: string;
    description: string;
    documentation: string;
};

const BasicCard = ({name, description, documentation}: BasicCardProps) => {
    return (
        <section
            className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
            <h2 className="text-lg text-gray-700">{name}</h2>
            <p className="text-sm text-gray-600">{description}</p>
            <a
                className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
                href={documentation}
                target="_blank"
                rel="noreferrer"
            >
                Documentation
            </a>
        </section>
    );
};

export default BasicCard;