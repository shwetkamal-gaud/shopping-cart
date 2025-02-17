import { AlertCircle } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

const Error = ({err}:{err:Error}) => {
  return (
      <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
              {err.message}
          </AlertDescription>
      </Alert>
  )
}

export default Error