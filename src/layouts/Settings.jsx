import BoxSettings from "./BoxSettings/BoxSettings";
import ShadowsSettings from "./ShadowsSettings/ShadowsSettings";
import { useState } from "react";

export default function Settings() {
    const [tabs, setTabs] = useState(0);

    const tabsList = [
        { name: "Shadow", component: <ShadowsSettings /> },
        { name: "Box", component: <BoxSettings /> },
    ];

    return (
        <div className="relative mt-20 w-[600px] h-[550px] border rounded-b rounded-tr border-gray-300 shadow-xl bg-gray-50 md:mt-50">
            <div className="flex absolute -translate-y-full -left-[1px]">
                {tabsList.map((tab, index) => (
                    <button
                        key={index}
                        className={`min-w-[125px] font-bold py-2 px-3 mr-4 rounded-t border-t border-x border-gray-50 ${
                            tabs !== index ? "border-b bg-gray-200 hover:bg-slate-50" : ""
                        }`}
                        onClick={() => setTabs(index)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <div className="h-full overflow-auto">
                {tabsList[tabs].component}
            </div>
        </div>
    );
}
