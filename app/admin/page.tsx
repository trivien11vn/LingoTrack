import { isAdmin } from "@/lib/admin"
import dynamic from "next/dynamic"
import { redirect } from "next/navigation"

// Load the admin app only on the client so it doesn't run during server rendering.
const App = dynamic(() => import("./app"), {
    ssr: false
})

const AdminPage = () => {
    if (!isAdmin()) {
        redirect("/")
    }

    return (
        <App />
    )
}

export default AdminPage