
import { TECH_STACK } from "../utils/TechStack.jsx";

const MyStack = () => {
    return (
        <div className="flex flex-col gap-y-6">
            <h1 className="text-[24px] font-geist font-semibold">stack_</h1>
            <div className="grid grid-flow-row md:grid-flow-col md:grid-rows-5 lg:grid-rows-4 gap-6">
                {TECH_STACK.map((entry) => (
                    <div key={entry.name} className="flex flex-row items-center gap-4">
                        <span className="h-7 w-7 [&>svg]:h-full [&>svg]:w-full">{entry.icon}</span>
                        <span className="text-md font-medium text-gray-600">{entry.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyStack;
