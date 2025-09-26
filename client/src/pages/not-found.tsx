
import {
  Card,
} from "@progress/kendo-react-layout";
import {
  warningTriangleIcon
} from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
          <div className="flex mb-4 gap-2">
            <SvgIcon icon={warningTriangleIcon}/>
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Did you forget to add the page to the router?
          </p>
      </Card>
    </div>
  );
}
