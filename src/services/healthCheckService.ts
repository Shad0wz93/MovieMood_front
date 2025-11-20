import axios from "axios";

export async function getHealth() {

	try {

        const response = await axios.get("http://127.0.0.1:8000/health");

        return response.data.status === "healthy";

    }
    catch(error: any) {
		return false
    }
  
}