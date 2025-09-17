import{Phone} from "lucide-react";
export const buttons = [
    {
        name:"call",
        icon:Phone,
        style:"flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white",
        action:() => {
            console.log("Open call dropdown or dial number");
            
        },
    },

    {
        name:"login",
        label:"login",
        path: "/login"

    },
];