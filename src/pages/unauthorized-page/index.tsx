import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function UnauthorizedPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center ">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <svg
            className="mx-auto h-24 w-24 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Unauthorized Access</h2>
          <p className="mt-2 text-sm text-gray-600">
            Oops! It seems you don't have permission to access this page.
          </p>
        </div>
        <div className="mt-8">
          <Button className="w-full flex items-center justify-center" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  )
}