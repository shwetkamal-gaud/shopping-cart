import { AlertCircle } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

const Error = ({err}:{err:Error}) => {
  return (
      <Alert className="border-red-500 text-red-500" variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle className="text-red">Error</AlertTitle>
          <AlertDescription>
              {err.message}
          </AlertDescription>
      </Alert>
  )
}

export default Error