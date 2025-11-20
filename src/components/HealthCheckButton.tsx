import { getHealth } from "@/services/healthCheckService";
import { Cross } from "lucide-react";
import { toast } from "sonner"

export default function HealthCheckButton() {

    const healthCheck = async () => {

        const healthy = await getHealth();

        if(healthy) {
            toast.success("L'application est bien fonctionnelle")
        }
        else {
            toast.error("L'application n'est pas fonctionnelle")
        }

    }

    return (

        <button className=" absolute top-5 right-5 flex bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-lg font-semibold cursor-pointer" onClick={healthCheck}>
           <Cross /> <span className="ms-2">Health Check</span>
        </button>

    )

}